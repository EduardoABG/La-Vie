const { Psicologo } = require("../models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const secret = require("../configs/secret");

const AuthController = {
  async login(req, res){
    const { email, senha } = req.body
    const usuario = await Psicologo.findOne({
      where:{
        email,
      },
    });

    if(!usuario){
      return res.status(400).json("Email não cadastrado");
    }
    if(bcrypt.compareSync(senha, usuario.senha)){
      return res.status(401).json("Senha inválida");
    }

    const token = jwt.sign({ 
      id: usuario.id, 
      email: usuario.email, 
      nome: usuario.nome,
      userType: 'user',
    });
    secret.key;
    return res.json("Logado");
  },
};

module.exports = AuthController;
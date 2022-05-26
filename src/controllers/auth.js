const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const Usuario = require("../models/Psicologo");
const secret = require("../configs/secret");

const AuthController = {
  login: async (req, res) => {
    const { email, senha } = req.body;

    const usuario = await Usuario.findOne({
      where: {
        email,
      },
    });

    if (!usuario || !bcrypt.compareSync(senha, usuario.senha)) {
      return res.status(401).json("Usuário ou senha inválido");
    }

    const user = {
      codigo: usuario.codigo,
      nome: usuario.nome,
      email: usuario.email,
    };
    // const { senha: _senha, ...user } = usuario;

    const token = jwt.sign(user, secret.key);

    return res.json({
      token,
      user,
    });
  },
  store: async (req, res) => {
    const { nome, email, senha } = req.body;
    const hashSenha = bcrypt.hashSync(senha, 10);

    const { codigo } = await Usuario.create({
      nome,
      email,
      senha: hashSenha,
    });

    const user = {
      codigo,
      nome,
      email,
    };

    const token = jwt.sign(user, secret.key);

    return res.status(201).json({
      token,
      user,
    });
  },
};

module.exports = AuthController;
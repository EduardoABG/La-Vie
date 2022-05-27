const { Psicologo } = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const secret = require("../configs/secret");

const authController = {
  login: async (req, res) => {
    const { email, senha } = req.body;
    const psicologo = await Psicologo.findOne({
      where: {
        email,
      },
    });

    if (!psicologo || !bcrypt.compareSync(senha, psicologo.senha)) {
      return res
        .status(401)
        .json("“E-mail ou senha inválido, verifique e tente novamente”");
    }

    const user = {
      id: psicologo.id,
      email: psicologo.email,
      nome: psicologo.nome,
      userType: "user",
    };
    // const { senha: _senha, ...user } = usuario;

    const token = jwt.sign(user, secret.key);

    return res.json({
      token,
      user,
    });
  },
};

module.exports = authController;

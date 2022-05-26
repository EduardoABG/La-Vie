const expressJWT = require("express-jwt");
const secret = require("../configs/secret");
const { Psicologo } = require("../models");

module.exports = expressJWT({
  secret: secret.key,
  algorithms: ["HS256"],  
});

module.exports = async (req, res, next) => {
  if (req.auth) {
    const psicologo = await Psicologo.findByPk(req.auth.id);
    if (!psicologo) {
      next({
        status: 401,
        name: "UnauthorizedError",
        inner: {
          message: "Invalid user code",
        },
      });
    }
  }

  next();
};
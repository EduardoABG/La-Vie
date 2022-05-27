const expressJWT = require("express-jwt");
const secret = require("../configs/secret");
// const { expressjwt } = require("express-jwt");


module.exports = expressJWT({
    secret: secret.key,
    algorithms: ["HS256"],  
  });
  
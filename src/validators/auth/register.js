const { validate, Joi } = require("express-validation");


module.exports = validate({
    body: Joi.object({
        nome: Joi.required(),
        email: Joi.required(),
        senha: Joi.required(),
        apresentacao: Joi.required(),
    })
});


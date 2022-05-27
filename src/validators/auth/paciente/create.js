const { validate, Joi: JoiBase } = require("express-validation");
const { validator: validatorDocument } = require("senha-validator");

const { Paciente } = require("../../../models");

const Joi = JoiBase.extend(validatorDocument)
  .extend(require("joi-phone-number"))
  .extend(require("joi-postalcode"));

const validPacienteExistis = async (value) => {
  const paciente = await Paciente.findOne({ where: { cpf: value } });

  if (paciente) {
    throw new Joi.ValidationError(
      "string.cpf",
      [
        {
          message: "Paciente already registered",
          path: ["cpf"],
          type: "string.cpf",
          context: {
            key: "cpf",
            label: "cpf",
            value,
          },
        },
      ],
      value
    );
  }
};

module.exports = validate({
  body: Joi.object({
    nome: Joi.string().required(),
    sobrenome: Joi.string().required(),
    cpf: Joi.document()
      .min(11)
      .max(11)
      .cpf()
      .external(validPacienteExistis)
      .required(),
    data_nascimento: Joi.date().required(),
    telefone: Joi.string()
      .phoneNumber({ defaultCountry: "BR", format: "national" })
      .required(),
    email: Joi.string().email().required(),
    endereco: Joi.object({
      cep: Joi.string().min(8).postalCode("BR").required(),
      logradouro: Joi.string().required(),
      numero: Joi.string().required(),
      bairro: Joi.string().required(),
      cidade: Joi.string().required(),
      estado: Joi.string().max(2).required(),
    }),
  }),
});
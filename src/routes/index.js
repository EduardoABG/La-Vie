const express = require("express");
const router = express.Router();

const HomeController = require("../controllers/home");
const AtendimentoController = require("../controllers/atendimento");
const PacienteController = require("../controllers/paciente");
const PsicologoController = require("../controllers/psicologo");
const OrderController = require("../controllers/order");
const AuthController = require("../controllers/auth");


module.exports = router;
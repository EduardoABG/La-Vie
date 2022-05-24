const express = require("express");
const router = express.Router();

const HomeController = require("../controllers/home");
const AtendimentoController = require("../controllers/atendimento");
const PacienteController = require("../controllers/paciente");
const PsicologoController = require("../controllers/psicologo");
const OrderController = require("../controllers/order");
const AuthController = require("../controllers/auth");

const authRegisterValidator = require("../validators/auth/register");
const authLoginValidator = require("../validators/auth/login");

router.get("/", HomeController.index);


router.get("/atendimentos", AtendimentoController.index);
router.get("/atendimentos/:id",  AtendimentoController.show);
router.post("/atendimentos", AtendimentoController.store);




module.exports = router;
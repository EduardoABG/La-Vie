const express = require("express");
const router = express.Router();

const HomeController = require("../controllers/home");
const AtendimentoController = require("../controllers/atendimento");
const PacienteController = require("../controllers/paciente");
const PsicologoController = require("../controllers/psicologo");

router.get("/", HomeController.index);

router.get("/psicologos", PsicologoController.index);
router.get("/psicologos/:id", PsicologoController.show);
router.post("/psicologos", auth, PsicologoController.store);
router.put("/psicologos/:id", PsicologoController.update);
router.delete("/psicologos/:id", PsicologoController.destroy);

router.get("/pacientes", PacienteController.index);
router.get("/pacientes/:id", PacienteController.show);
router.post("/pacientes", PacienteController.store);
router.put("/pacientes/:id", PacienteController.update);
router.delete("/pacientes/:id", PacienteController.destroy);


router.get("/atendimentos", AtendimentoController.index);
router.get("/atendimentos/:id", AtendimentoController.show);
router.post("/atendimentos", AtendimentoController.store);

routes.post("/login", authLoginValidation, AuthController.login);

const authLoginValidation = require("../validators/auth/login");
const AuthController = require("../controllers/auth");
const auth = require("../middlewares/auth");

//const authRegisterValidator = require("../validators/auth/register");
// const authRegisterValidator = require("../validators/auth/register");
// const authLoginValidator = require("../validators/auth/login");

// const pacienteValidator = require("../validators/paciente");
// const psicologoValidator = require("../validators/psicologo");
// const atendimentoValidator = require("../validators/atendimento");

module.exports = router;

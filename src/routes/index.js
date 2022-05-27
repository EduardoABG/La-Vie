const express = require("express");
const router = express.Router();

const HomeController = require("../controllers/home");
const AtendimentoController = require("../controllers/atendimento");
const PacienteController = require("../controllers/paciente");
const PsicologoController = require("../controllers/psicologo");
const log = require("../middlewares/log");
const authLoginValidation = require("../validators/auth/login");
const authController = require("../controllers/auth");
const psicologoCreateValidation = require("../validators/auth/register");
const auth = require("../middlewares/auth");

router.get("/", HomeController.index);

router.get("/psicologos", PsicologoController.index);
router.get("/psicologos/:id", PsicologoController.show);
router.post("/psicologos", auth, psicologoCreateValidation, PsicologoController.store);
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
router.post("/login", authLoginValidation, authController.login);

router.post("/psicologos", PsicologoController.store);

module.exports = router;

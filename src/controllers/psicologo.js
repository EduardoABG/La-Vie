const { Psicologo } = require("../models");

const PsicologoController = {
  index: async (req, res) => {
    const allPsicologos = await Psicologo.findAll();

    res.json(allPsicologos);
  },
  show: async (req, res) => {
    const { id } = req.params;

    const psicologo = await Psicologo.findByPk(id);

    if (psicologo) {
      return res.json(psicologo);
    }

    res.status(404).json({
      message: "Psicologo não encontrado",
    });
  },
  store: async (req, res) => {
    const { nome, email, senha, apresentacao = [] } = req.body;
    const novoPsicologo = await Psicologo.create({
      nome,
      email,
      senha,
      apresentacao,
    });

    res.json(novoPsicologo);
  },
  update: (req, res) => {
    const { id } = req.params;

    res.json({
      id,
      ...(req.body || {}),
    });
  },
  destroy: (req, res) => {
    res.status(204).send("");
  },
};

module.exports = PsicologoController;

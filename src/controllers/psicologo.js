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
  update: async(req, res) => {
    const { id } = req.params;
    const { nome, email, senha, apresentacao = [] } = req.body;
    const psicologoAtualizado = await Psicologo.update(
      {
      nome,
      email,
      senha,
      apresentacao,
      },
      {
        where: {
          id,
        },
      },
    );

    res.json({
      id,
      ...(req.body || {}),

    });
  },
  destroy: async (req, res) => {
    const { id } = req.params;
    await Psicologo.destroy({
      where: {
        id,
      },
    });
    res.status(204).send("");
  },
};

module.exports = PsicologoController;

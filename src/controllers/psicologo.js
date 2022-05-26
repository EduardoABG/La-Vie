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
      message: "id não encontrado",
    });
  },
  store: async (req, res) => {
<<<<<<< HEAD
    const { nome, email, senha, apresentacao = [] } = req.body;
=======
    const { nome, email, senha, apresentacao } = req.body;
>>>>>>> 0d2d58bdae89aeb5d1aae0bbe52a97c08bcf2a4b
    const novoPsicologo = await Psicologo.create({
      nome,
      email,
      senha,
      apresentacao,
    });
    if (novoPsicologo) {
      return res.status(201).json(novoPsicologo);
    }

    res.status(400);
  },
  update: async (req, res) => {
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
      }
    );

    if (psicologoAtualizado) {
      return res.json({
        id,
        ...(req.body || {}),
      });
    }

    res.status(400);
  },
  destroy: async (req, res) => {
    const { id } = req.params;
    const deletarPsicologo = await Psicologo.destroy({
      where: {
        id,
      },
    });

    if (deletarPsicologo) {
      return res.status(204).send("");
    }
    res.status(404).json({
      message: "id não encontrado"
    });
  },
};

<<<<<<< HEAD
module.exports = PsicologoController;
=======
module.exports = PsicologoController;
>>>>>>> 0d2d58bdae89aeb5d1aae0bbe52a97c08bcf2a4b

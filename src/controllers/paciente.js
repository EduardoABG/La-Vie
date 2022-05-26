const { Paciente } = require("../models");

const PacienteController = {
  index: async (req, res) => {
    const allPacientes = await Paciente.findAll();

    res.json(allPacientes);
  },
  show: async (req, res) => {
    const { id } = req.params;

    const paciente = await Paciente.findByPk(id);

    if (paciente) {
      return res.json(paciente);
    }

    res.status(404).json({
      message: "id não encontrado",
    });
  },
  store: async (req, res) => {
<<<<<<< HEAD
    const { nome, email, data_nascimento = [] } = req.body;
=======
    const { nome, email, data_nascimento } = req.body;
>>>>>>> 0d2d58bdae89aeb5d1aae0bbe52a97c08bcf2a4b
    const novoPaciente = await Paciente.create({
      nome,
      email,
      data_nascimento,
    });
    if (novoPaciente) {
      return res.status(201).json(novoPaciente);
    }

    res.status(400);
  },
  update: async (req, res) => {
    const { id } = req.params;
<<<<<<< HEAD
    const { nome, email, data_nascimento = [] } = req.body;
=======
    const { nome, email, data_nascimento } = req.body;
>>>>>>> 0d2d58bdae89aeb5d1aae0bbe52a97c08bcf2a4b
    const pacienteAtualizado = await Paciente.update(
      {
        nome,
        email,
        data_nascimento,
      },
      {
        where: {
          id,
        },
      }
    );

    if (pacienteAtualizado) {
      return res.json({
        id,
        ...(req.body || {}),
      });
    }

    res.status(400);
  },
  destroy: async (req, res) => {
    const { id } = req.params;
    const deletarPaciente = await Paciente.destroy({
      where: {
        id,
      },
    });
    if (deletarPaciente) {
      return res.status(204).send("");
    }
    res.status(404).json({
      message: "id não encontrado"
    });
  },
};

<<<<<<< HEAD
module.exports = PacienteController;
=======
module.exports = PacienteController;
>>>>>>> 0d2d58bdae89aeb5d1aae0bbe52a97c08bcf2a4b

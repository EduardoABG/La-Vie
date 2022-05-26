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
    const { nome, email, data_nascimento = [] } = req.body;
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
    const { nome, email, data_nascimento = [] } = req.body;
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

module.exports = PacienteController;

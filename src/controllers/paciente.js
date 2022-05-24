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
      message: "Paciente não encontrado",
    });
  },
  store: async (req, res) => {
    const { nome, email, data_nascimento = [] } = req.body;
    const novoPaciente = await Paciente.create({
      nome,
      email,
      data_nascimento,
    });

    res.json(novoPaciente);
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

    res.json({
      id,
      ...(req.body || {}),
    });
  },
  destroy: async (req, res) => {
    const { id } = req.params;
    await Paciente.destroy({
      where: {
        id,
      },
    });
    res.status(204).send("");
  },
};

module.exports = PacienteController;

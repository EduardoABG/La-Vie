const { Atendimento, Paciente, Psicologo } = require("../models");

const AtendimentoController = {
  index: async (req, res) => {
    const allAtendimentos = await Atendimento.findAll({attributes: ["id", "psicologo_id", "data_atendimento", "observacao"], include: Paciente});

    res.status(200).json(allAtendimentos);
  },
  store: async (req, res) => {
    const { paciente_id, data_atendimento, observacao = [] } = req.body;
    const paciente = await Paciente.count({ where: { id: paciente_id }});

    if (paciente) {
      const novoAtendimento = await Atendimento.create({
        paciente_id,
        data_atendimento,
        observacao,
      });
  
      res.status(201).json(novoAtendimento);
    }
    
  },
  show: async (req, res) => {
    //Falta criar a exceção para a senha não aparecer
    const { id } = req.params;

    const atendimento = await Atendimento.findByPk(id);

    if (atendimento) {
      return res.json(atendimento);
    }

    res.status(404).json({
      message: "Atendimento não encontrado",
    });
  },
};

module.exports = AtendimentoController;

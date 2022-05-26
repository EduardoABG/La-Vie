const { Atendimento } = require("../models");

const AtendimentoController = {
  index: async (req, res) => {
    const allAtendimentos = await Atendimento.findAll();

    res.json(allAtendimentos);
  },
  store: async (req, res) => {
<<<<<<< HEAD
    const { paciente_id, data_atendimento, observacao = [] } = req.body;
=======
    const { paciente_id, data_atendimento, observacao } = req.body;
>>>>>>> 0d2d58bdae89aeb5d1aae0bbe52a97c08bcf2a4b
    const novoAtendimento = await Atendimento.create({
      paciente_id,
      data_atendimento,
      observacao,
    });

    res.json(novoAtendimento);
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

<<<<<<< HEAD
module.exports = AtendimentoController;
=======
module.exports = AtendimentoController;
>>>>>>> 0d2d58bdae89aeb5d1aae0bbe52a97c08bcf2a4b

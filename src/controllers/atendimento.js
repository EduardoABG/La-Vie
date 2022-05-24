const { Atendimento } = require("../models");

const AtendimentoController = {
    index: async (req, res) => {
      const allAtendimentos = await Atendimento.findAll();
  
      res.json(allAtendimentos);
    },
    store: async (req, res) => {
      const { paciente_id, data_atendimento, observacao = [] } = req.body;
      const novoAtendimento = await Atendimento.create({
        paciente_id,
        data_atendimento,
        observacao,   
      });
  
      res.json(novoAtendimento);
    },
    show: async (req, res) => {
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
  
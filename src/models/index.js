const Atendimento = require("./Atendimento");
const Psicologo = require("./Psicologo");
const Paciente = require("./Paciente");

Atendimento.belongsTo(Psicologo, {
  foreignKey: "psicologo_id",
});

Atendimento.belongsTo(Paciente,{
  foreignKey: "paciente_id"
})

module.exports = {
  Atendimento,
  Psicologo,
  Paciente,
};

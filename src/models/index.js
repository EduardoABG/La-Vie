const Atendimento = require("./Atendimento");
const Psicologo = require("./Psicologo");
const Paciente = require("./Paciente");

// Atendimento.hasOne(Psicologo);
// Atendimento.hasOne(Paciente);
// Psicologo.hasMany(Atendimento);
// Paciente.hasMany(Atendimento);

// Atendimento.belongsTo(Psicologo, {
//   foreignKey: "psicologo_id",
// });

// Atendimento.belongsTo(Paciente,{
//     foreignKey: "paciente_id"
// })

module.exports = {
  Atendimento,
  Psicologo,
  Paciente,
};

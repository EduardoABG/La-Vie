const Atendimento = require("./Atendimento");
const Psicologo = require("./Psicologo");
const Paciente = require("./Paciente");

//Atendimento.hasOne(Psicologo);
//Atendimento.hasOne(Paciente);

// Endereco.belongsTo(Cliente, {
//   foreignKey: "cliente_codigo",
// });

// Filme.belongsToMany(Genero, {
//   foreignKey: "filme_codigo",
//   through: FilmeGenero,
// });
// Filme.hasMany(ReservaFilme);

// Genero.belongsToMany(Filme, {
//   foreignKey: "genero_codigo",
//   through: FilmeGenero,
// });

// Reserva.hasMany(ReservaFilme);
// Reserva.belongsTo(Cliente, {
//   foreignKey: "cliente_codigo",
// });

// ReservaFilme.belongsTo(Reserva, {
//   foreignKey: "reserva_codigo",
// });
// ReservaFilme.belongsTo(Filme, {
//   foreignKey: "filme_codigo",
// });

module.exports = {
    Atendimento,
    Psicologo,
    Paciente,
};

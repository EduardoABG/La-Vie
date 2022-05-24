const { DataTypes } = require("sequelize");

const db = require("../database");

const Atendimento = db.define(
  "atendimento",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    data_atendimento: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    observacao: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    psicologo_id: {
      type: DataTypes.INTEGER,
      References: {
        model: Psicologo,
        key: "id",
      },
    },
    paciente_id: {
      type: DataTypes.INTEGER,
      References: {
        model: Paciente,
        key: "id",
      },
    },
  },
  { tableName: "atendimento", timestamps: false, underscored: true }
);

module.exports = Atendimento;

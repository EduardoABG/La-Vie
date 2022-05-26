CREATE DATABASE lavie;

USE lavie ;

-- -----------------------------------------------------
-- Criando a tabela `psicologo`
-- -----------------------------------------------------
CREATE TABLE psicologo (
  id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(50) NOT NULL,
  email VARCHAR(50) NOT NULL,
  senha VARCHAR(16) NOT NULL,
  apresentacao VARCHAR(255) NOT NULL
);

-- -----------------------------------------------------
-- Criando a tabela`paciente`
-- -----------------------------------------------------
CREATE TABLE paciente (
  id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(50) NOT NULL,
  email VARCHAR(50) NOT NULL,
  data_nascimento DATE NOT NULL
);

-- -----------------------------------------------------
-- Criando a tabela atendimento
-- -----------------------------------------------------
CREATE TABLE atendimento (
  id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
  data_atendimento DATETIME NOT NULL,
  observacao TEXT NOT NULL,
  psicologo_id INT NOT NULL,
  paciente_id INT NOT NULL,

  CONSTRAINT fk_atendimento_psicologo FOREIGN KEY (psicologo_id) REFERENCES psicologo(id),
  CONSTRAINT fk_atendimento_paciente FOREIGN KEY (paciente_id) REFERENCES paciente(id)
);
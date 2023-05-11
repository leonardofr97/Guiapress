const Sequelize = require("sequelize");

const database = "guiapress", usuario = "root", password = "0wR79!G$22D#", dadosConexao = {host: "localhost", dialect: "mysql"};

const connection = new Sequelize(database, usuario, password, dadosConexao);

module.exports = connection;
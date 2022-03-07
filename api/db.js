const Sequelize = require('sequelize');
// Conexão com o banco de dados MySQL
const sequelize = new Sequelize("chat", "root", "gM4875x!39", {

	host: 'localhost',
	dialect: 'mysql'

});

module.exports = {

    Sequelize: Sequelize,
    sequelize: sequelize

}

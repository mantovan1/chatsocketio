const db = require('../db');

const Mensagem = db.sequelize.define('mensagens', {
	uuid: {
		type: db.Sequelize.STRING,
		allowNull: false,
		primaryKey: true
	},
	user: {
		type: db.Sequelize.STRING,
		allowNull: false
	},
	text: {
                type: db.Sequelize.STRING,
		allowNull: false,
        },
	room: {
                type: db.Sequelize.STRING,
		allowNull: false
        }
})

//Mensagem.sync({force: true});

module.exports = Mensagem;

const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

const Mensagem = require('./models/Mensagem');

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});


io.on('connection', socket => {
	//console.log(socket.id);

	socket.on('send-message', async (uuid, user, text, room) => {
		if(uuid === '' || user === '' || text === '' || room === ''){
			return;
		} else {
			await Mensagem.create({uuid: uuid, user: user, text: text, room: room});

			const mensagens = await Mensagem.findAll({
				where: {room: room},
				order: [ ['createdAt', 'ASC'] ]
			});

			socket.to(room).emit('send-message', JSON.stringify(mensagens));
		}
	});

	socket.on('join-room', async room => {
		socket.join(room);
	});

})

app.get('/conversation/:room', async (req, res) => {
        const mensagens = await Mensagem.findAll({
                where: {room: req.params.room},
                order: [ ['createdAt', 'ASC'] ]
        });
  
        res.json(mensagens);
})

server.listen(8080, () => {
  console.log('listening on *:8080');
});

const Discord = require('discord.js');
const client = new Discord.Client();
const utils = require('./utils');

client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', message => {
	console.log(message.content);
	if (message.content === '!ping') {
		message.channel.send('Sup');
	}
});

client.login(utils.authToken);
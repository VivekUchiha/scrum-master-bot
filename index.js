const Discord = require('discord.js');
const client = new Discord.Client();
const utils = require('./utils');
const fs = require('fs');

client.once('ready', () => {
	console.log('Ready!');
});

client.members = new Discord.Collection();

fs.readdir('./events', (err, files) => {
	if (err) return console.error(err);
	files.forEach(file => {
		const event = require(`./events/${file}`);
		const eventName = file.split('.')[0];
		client.on(eventName, event.bind(null, client));
	});
});

client.commands = new Discord.Collection();

client.isScrumHappening = false;
client.attendees = new Discord.Collection();
client.reactionCollector = new Discord.Collector();

fs.readdir('./commands', (err, files)=>{
	if (err) return console.error(err);
	files.forEach(file => {
		const command = require(`./commands/${file}`);
		client.commands.set(command.name, command);
	});
});

client.login(utils.authToken);
module.exports = {
	name: 'ping',
	execute(client, message) {
		message.channel.send('sup');
	},
};

module.exports = {
	name: 'set_ctf_notices_channel',
	execute(client, message, args) {
		if(message.member.roles.cache.some(role => role.name === 'Real Scrum Master')) {
			client.ctfNoticesChannel = message.channel;
			message.channel.send('CTF reminder channel set');

			// Dont Delete these
			// const day = new Date();
			// console.log(Math.floor(day.getTime()/1000), Math.floor(day.getTime()/1000) + 86400*7);
		}
	},
};
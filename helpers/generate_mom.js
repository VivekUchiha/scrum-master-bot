const { MessageEmbed } = require('discord.js');
module.exports = {
	name: 'generate_mom',
	execute(Client, message) {
		const momArray = Array.from(Client.mom.values());
		let momString = '';
		momArray.forEach(mess => {
			momString += mess.author.username + ': ' + mess.content + '\n\n';
		});
		if(momString != '') {
			const embed = new MessageEmbed()
				.setTitle('MOM')
				.setDescription(momString);
			message.channel.send(embed);
		}
	},
};
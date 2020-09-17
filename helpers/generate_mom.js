const { MessageEmbed } = require('discord.js');
module.exports = {
	name: 'generate_mom',
	execute(Client, message) {
		const momArray = Array.from(Client.mom.values());
		let momString = '';
		momArray.forEach(mess => {
			try{
				momString += mess.member.displayName + ': ' + mess.content + '\n\n';
			}
			catch(err) {
				console.log(err);
			}
		});
		if(momString != '') {
			const embed = new MessageEmbed()
				.setTitle('MOM')
				.setDescription(momString);
			message.channel.send(embed);
		}
	},
};
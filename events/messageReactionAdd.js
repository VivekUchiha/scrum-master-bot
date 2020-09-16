const message = require('./message');

module.exports = (Client, reaction, user) => {

	try {
		const ScrumMasterRole = reaction.message.guild.roles.cache.find(role => role.name === 'Real Scrum Master');
		if (reaction.message.guild.members.cache.get(user.id)._roles.includes(ScrumMasterRole.id) && Client.isScrumHappening && reaction._emoji.name == '💯') {
			reaction.message.channel.send('Great Job ' + reaction.message.member.user.username);
			Client.mom.set(reaction.message.id, reaction.message);
		}
	}
	catch(err){
		console.log(err);
	}

	
};
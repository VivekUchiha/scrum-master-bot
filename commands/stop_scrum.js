const generate_mom = require('../helpers/generate_mom');
module.exports = {
	name: 'stop_scrum',
	execute(client, message, args) {
		if(!client.isScrumHappening) return;
		if(message.member.roles.cache.some(role => role.name === 'Real Scrum Master')) {
			message.delete();
			generate_mom.execute(client, message);
			client.isScrumHappening = false;

			if(!client.collector) return;
			client.collector.stop();

		}
		else {
			message.channel.send(':D');
		}
	},
};
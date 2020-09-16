module.exports = {
	name: 'remind_scrum',
	execute(client, message, args) {
		try {
			let content = ':exclamation: :exclamation: Reminder: Scrum at';
			args.forEach(arg => {
				content += ` ${arg}`;
			});
			content += '\n If you\'re not gonna be present for the scrum, send your reason here like this:\n\n!absent_reason <Your reason>\n\nor else Vivek kik you out.';

			if (!message.member.roles.cache.some(role => role.name === 'Real Scrum Master')) {
				message.channel.send('Inna thala. You\'re not the Scrum Master');
				return;
			}
			client.scrumMaster = message.member;
			client.canSendReason = true;

			const CurrentRole = message.guild.roles.cache.find(role => role.name === 'Current');

			Array.from(message.guild.members.cache.values()).forEach(mem => {
				if (mem._roles.includes(CurrentRole.id)) { mem.user.send(content); }
			});
		}
		catch {
			message.channel.send('Something went wrong');
		}
	},
};
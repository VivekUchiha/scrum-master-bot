const { MessageEmbed } = require('discord.js');
module.exports = {
	name: 'start_scrum',
	adminOnly: true,
	execute(client, message, args) {
		try {
			if (message.member.roles.cache.some(role => role.name === 'Real Scrum Master')) {

				client.isScrumHappening = true;
				client.mom = new Map();

				const filterReactions = (reaction, user) => {
					return user.id != undefined;
				};
				message.channel.send('The Scrum has started. React to this message if you\'re here :eyes:')
					.then((AttendanceMessage) => {
						client.collector = AttendanceMessage.createReactionCollector(filterReactions);

						client.collector.on('collect', (reaction, user) => {
							console.log(`Collected ${reaction.emoji.name} from ${user}`);
							if (!client.attendees.has(user)) client.attendees.set(user, getFormatedTime(Date.now()));
						});

						client.collector.on('end', collected => {
							// console.log(client.attendees);
							const Attendees = Array.from(client.attendees.keys());

							let PresentList = 'Members present for today\'s scrum \n';

							let AbsentList = '\n Members not present for today\'s scrum \n';

							let PresentCount = 1, AbsentCount = 1;

							message.guild.members.fetch()
								.then((members) => {
									members.forEach((member) => {
										if(Attendees.includes(member.user)) {
											PresentList += `${PresentCount++}) ${member.displayName} \n`;
										}
										else if (member.roles.cache.some(role => role.name === 'Current') && (!Attendees.includes(member.user))) {
											AbsentList += `${AbsentCount++}) ${member.displayName} \n`;
										}
									});
									const embed = new MessageEmbed()
										.setTitle('Scrum Attendance')
										.setDescription(PresentList + AbsentList);
									message.channel.send(embed);
								});

						});
					});


			}
			else {
				message.channel.send('You are not the Scrum Master');
			}
		}
		catch (err) {
			console.log(err);
		}

	},
};

function getFormatedTime(unixTimeStamp) {
	const date = new Date(unixTimeStamp);
	const hours = date.getHours();
	const minutes = '0' + date.getMinutes();
	const seconds = '0' + date.getSeconds();
	return hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
}

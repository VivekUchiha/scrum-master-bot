module.exports = {
	name: 'setrole',
	execute(client, message, args) {
		try {
			let mem;

			Array.from(client.guilds.cache.values()).forEach(guild=>{
				Array.from(guild.members.cache.values()).forEach(member=>{
					if(message.author.id == member.user.id)
						mem = member;
				})
			})


			const AlumniRole = mem.guild.roles.cache.find(role => role.name === 'Alumnus');
			const CurrentRole = mem.guild.roles.cache.find(role => role.name === 'Current');

			console.log(args);

			switch (args[0]) {
				case 'alumnus':
					mem.roles.add(AlumniRole);
					mem.roles.remove(CurrentRole);
					message.channel.send('Alumnus role set');
					break;
				case 'current':
					mem.roles.add(CurrentRole);
					mem.roles.remove(AlumniRole);
					message.channel.send('Current role set');
					break;
				default:
					message.channel.send('You had one job  -_-');
					break;
			}
		}
		catch {
			message.channel.send("Something went wrong");
		}
	},
};

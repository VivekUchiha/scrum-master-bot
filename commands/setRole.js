module.exports = {
	name: 'setrole',
	execute(client, message, args) {

		const mem = client.members.get(message.author.id);
		if(!mem) return;

		const AlumniRole = mem.guild.roles.cache.find(role => role.name === 'Alumnus');
		const CurrentRole = mem.guild.roles.cache.find(role => role.name === 'Current');
		switch(args[0]) {
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
			message.channel.send('Inna thala');
			break;
		}
	},
};
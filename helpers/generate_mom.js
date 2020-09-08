module.exports = {
	name: 'generate_mom',
	execute(Client, message) {
		const momArray = Array.from(Client.mom.values());
		let momString = 'MOM of today\'s scrum\n\n';
		momArray.forEach(mess => {
			momString += mess.author.username + ': ' + mess.content + '\n\n';
		});
		if(momString != '') {message.channel.send(momString);}
	},
};
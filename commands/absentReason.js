module.exports = {
	name: 'absent_reason',
	execute(client, message, args) {

		try{
			if(!client.canSendReason) {
				message.channel.send('Can\'t do that now');
				return;
			}
			let content = `${message.author.username}:\n\n`;
			args.forEach(element => {
				content += `${element} `;
			});
			client.scrumMaster.send(content);
			message.channel.send('Reason recieved');
		}
		catch{
			message.channel.send('Something went wrong');
		}
	},
};
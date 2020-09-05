module.exports = {
    name: "generate_mom",
    execute(Client, message) {
        const momArray = Array.from(Client.mom.values())
        var momString = '';
        momArray.forEach(mess => {
            momString += mess.author.username + ': ' + mess.content + '\n';
        })
        if(momString!='')
            message.channel.send(momString)
    }
}
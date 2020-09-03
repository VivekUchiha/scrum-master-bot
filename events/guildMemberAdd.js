module.exports = (client, member) => {
        console.log(member.displayName)
        client.members.set(member.id, member);
	    member.send(`Welcome to delta server, ${member.displayName}. Enter \n !setrole alumni (if you're an alumni) \n !setrole current (if you're a current member)`)
}
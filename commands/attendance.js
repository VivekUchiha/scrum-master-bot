module.exports = {
    name: "start_attendance",
    execute(client, message, args) {
        if(message.member.roles.cache.some(role => role.name === "ScrumMaster")){

            client.isScrumHappening = true;
            client.mom = new Map();

            const filterReactions = (reaction, user) => {
                return user.id != undefined;
            }

            client.collector = message.createReactionCollector(filterReactions);

            client.collector.on('collect', (reaction, user) => {
                console.log(`Collected ${reaction.emoji.name} from ${user.tag}`);
                if(!client.attendees.has(user.tag)) client.attendees.set(user.tag, getFormatedTime(Date.now()));
            });

            client.collector.on('end', collected => {
                // console.log(client.attendees);
                message.channel.send(Array.from(client.attendees.keys()) + " in the scrum");
            }); 
            
        } else {
            message.channel.send("You are not the Real Scrum Master");
        }
    }
}

function getFormatedTime(unixTimeStamp) {
    var date = new Date(unixTimeStamp);
    var hours = date.getHours();
    var minutes = "0" + date.getMinutes();
    var seconds = "0" + date.getSeconds();
    return hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
}

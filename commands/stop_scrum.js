module.exports = {
    name: "stop_scrum",
    execute(client, message, args) {
        if(message.member.roles.cache.some(role => role.name === "ScrumMaster")){

            console.log(message);

            client.isScrumHappening = false;

            client.collector.stop();
            
        } else {
            message.channel.send("You are not the Real Scrum Master");
        }
    }
}
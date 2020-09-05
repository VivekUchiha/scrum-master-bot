module.exports = {
    name: "stop_scrum",
    execute(client, message, args) {
        if(message.member.roles.cache.some(role => role.name === "ScrumMaster")){

            console.log(message);

            if(client.isScrumHappening){
                try {
                    client.isScrumHappening = false;
                    client.collector.stop();
                } catch (error) {
                    console.log(error);
                }
            } else {
                message.channel.send("Start the scrum first");
            }
            
        } else {
            message.channel.send("You are not the Real Scrum Master");
        }
    }
}
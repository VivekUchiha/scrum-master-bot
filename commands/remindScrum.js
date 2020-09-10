module.exports={
    name:"remind_scrum",
    execute(client, message, args){
        var content = ":exclamation: :exclamation: Reminder: Scrum at";
        args.forEach(arg=>{
            content += ` ${arg}`
        });
        content += "\n If you're not gonna be present for the scrum, Send your reason here or else Vivek kik you out"  
        Array.from(message.guild.members.cache.values()).forEach(mem => {
            mem.user.send(content)
        });
    }
}
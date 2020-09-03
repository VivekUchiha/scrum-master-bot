module.exports = {
    name: "setrole",
    execute(client, message, args) {

        const mem = client.members.get(message.author.id);
        if(!mem) return;

        const AlumniRole = mem.guild.roles.cache.find(role => role.name === "Alumni");
        const CurrentRole = mem.guild.roles.cache.find(role => role.name === "Current");
        switch(args[0])
        {
            case 'alumni':
                mem.roles.add(AlumniRole);
                mem.roles.remove(CurrentRole);
                message.channel.send("Alumni role set");    
                break;
            case 'current':
                mem.roles.add(CurrentRole);
                mem.roles.remove(AlumniRoles);
                message.channel.send("Current role set");
                break;
            default:
                message.channel.send("Inna thala");
                break;
        }
    }
}
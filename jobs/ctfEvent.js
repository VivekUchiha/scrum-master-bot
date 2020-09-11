var cron = require('node-cron');
var request = require('request');
const { MessageEmbed } = require('discord.js');

module.exports = {
    startJob(client) {

        cron.schedule('0 0 * * 0', () => {
            const day = new Date();
            const startTime = Math.floor(day.getTime() / 1000);
            const endTime = Math.floor(day.getTime() / 1000) + 86400 * 7;

            var options = {
                'method': 'GET',
                'url': `https://ctftime.org/api/v1/events/?limit=100&start=${startTime}&finish=${endTime}`,
                'headers': {}
            };
            request(options, function (error, response) {
                try{
                    if (client.ctfNoticesChannel != null) {
                        const embed = new MessageEmbed()
                            .setTitle("Upcoming CTFs this week:");
                        JSON.parse(response.body).forEach((element, index) => {
                            var message = '';
                            message += `${index + 1}. ${element.title}\n`;
                            message += `\n${element.description}\n`;
                            embed.addFields(
                                { name: '\u200B', value: message },
                                { name: "Format", value: element.format },
                                { name: "URL", value: element.url },
                                { name: "CTF Time URL", value: element.ctftime_url },
                                { name: "Start", value: element.start, inline: true },
                                { name: "Finish", value: element.finish, inline: true }
                            );
                        });
                        client.ctfNoticesChannel.send(embed);
                    }
                }
                catch(err){
                    console.log(err);
                }
            });
        });

    }
}
module.exports = {
    name: "help",
    cooldown: 3,
    description: 'Bot Orders',
    aliases: ["h"],
    run: async function(client, message, args, user) {
        try {
            const { MessageEmbed } = require('discord.js');
            var prefix = await require('quick.db').fetch(`prefix_${message.guild.id}`);
            if (prefix == null) prefix = require('../../config/bot').prefix;
            let help = new MessageEmbed()
                .setColor('BLUE')
               
               
                .setDescription(`
                
**Public Commands**
\`ping\` . \`invite\` . \`support\` . \`info\`
                
**Admin Commands**
\`prefix\`
                
**Music Commands**
\`play\` . \`skip\` . \`nowplaying\` . \`loop\`
\`volume\` . \`lyrics\` . \`join\` . \`pause\` 
\`stop\` . \`filter\` .  \`leave\` . \`resume\`
\`radio\` . \`queue\`
               
**Links**
**[Support Server](https://discord.gg/NnHedRywk6) | [Invite Me](https://discord.com/api/oauth2/authorize?client_id=893739956747501599&permissions=8&scope=bot)**

`);


              
         
            setTimeout(() => {
                message.channel.send({
                    embed: help
                })
            }, 500);
        } catch (err) {
            console.log(err)
        }
    }
};

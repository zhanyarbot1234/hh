module.exports = {
    name: "info",
    cooldown: 3,
    description: 'Bot Orders',
    run: async function(client, message, args, user) {
        try {
            const { MessageEmbed } = require('discord.js');
            var prefix = await require('quick.db').fetch(`prefix_${message.guild.id}`);
            if (prefix == null) prefix = require('../../config/bot').prefix;
            let help = new MessageEmbed()
                .setColor('BLUE')
             
               


    .addField("`My name`", `**NAMO ᵉᶠᶠᵉᶜᵗ ˢᵗᵃᶠᶠ#1679**`, true)
    .addField("`My ID`",  `**897865860037890088**`, true)
    .addField( "`My Prefix` ",`**%**`,true)
    .addField("`Node.js Version`",  `**12**`, true)
    .addField("`Language Program`",  `**Java Script**`, true)
    .addField("`Discord.js `",  `**12.5.1**`, true)
    .addField( "`developer bot` ",`<@740950314764730420>`,true)          
         
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

module.exports = {
    name: "ping",
    cooldown: 3,
    description: 'view the bot ping',
    aliases: ["ping"],
    run: async function(client, message, args, user) {
        var states = "Excellent";
        var states2 = "Excellent";
        var msg = `${Date.now() - message.createdTimestamp}`;
        var api = `${Math.round(client.ws.ping)}`;
        if (message.author.bot) return;
        message.channel.send({
            embed: {
                description: `**Time Taken:** ${msg} ms ✨ | ${states}\n**WebSocket:** ${api} ms 💢 | ${states2}`,
                color: 0x2F3136
            }
        });
    }
};

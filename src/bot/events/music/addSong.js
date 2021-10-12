module.exports = async function(client, message, queue, song) {
    const { MessageEmbed } = require("discord.js");
    message.channel.send(
        new MessageEmbed()
        .setAuthor(song.name, song.thumbnail, song.url)
        .setColor('BLUE')
        .setThumbnail(song.thumbnail)
        .setDescription(`✔️ | **__[${song.name}](${song.url})__** **has been add to queue**`)
        .setFooter(song.formattedDuration + ` | ${song.likes}👍 ${song.dislikes}👎`)
    );
};

const chalk = require('chalk');
const figlet = require("figlet");

module.exports = async function(client) {
    console.log(chalk.yellow.bold(figlet.textSync("jano")));
    await console.log(chalk.red.bold(client.user.tag) + chalk.blue.bold("Is Ready"));

   client.user.setActivity(`Type: ${PREFIX}help - %play| ${client.guilds.cache.size} Server,Users ${client.guilds.cache.reduce((a, g) => a + g.memberCount, 0)},`, { type: "PLAYING"});
    await client.user.setStatus("dnd"); 
}

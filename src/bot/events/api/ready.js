const chalk = require('chalk');
const figlet = require("figlet");

module.exports = async function(client) {
    console.log(chalk.yellow.bold(figlet.textSync("jano")));
    await console.log(chalk.red.bold(client.user.tag) + chalk.blue.bold("Is Ready"));

        
    client.user.setActivity(` ${PREFIX}help -PoP Music Bot Is here for fun`, { type: "WATCHING"});
    client.user.setActivity(` ${PREFIX}play| Users ${client.guilds.cache.reduce((a, g) => a + g.memberCount, 0)},`, { type: "WATCHING"});
    await client.user.setStatus("dnd"); 
}

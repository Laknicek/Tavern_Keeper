const {MessageEmbed} = require("discord.js");

module.exports = {
    name: "ping",
    category: "info",
    description: "Returns the bot\'s latency and API ping",
    aliases: ['latency'],
    usage: '>ping',
    run: async (client, message, args) => {
        message.channel.send(`🏓 Pinging....`).then((msg) => {
            const pEmbed = new MessageEmbed()
            .setTitle("Pong!")
            .setColor('BLUE')
            .setDescription(
                `🏓 Pong!\nLatency: ${Math.floor(
                  msg.createdTimestamp - message.createdTimestamp
                )}ms\nAPI Latency: ${client.ws.ping}ms`
              )
            msg.edit(pEmbed);
          });
    }
}
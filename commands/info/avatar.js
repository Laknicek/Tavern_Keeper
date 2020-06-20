const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "avatar",
    category: "Info",
    description: "Get the avatar of the tagged user, or your own avatar.",
    aliases: ['pfp' , 'icon'],
    usage: '>avatar | >avatar [@user]',
    guildOnly: true,
    run: async (client, message, args) => {
        let user = message.mentions.users.first() || message.author
        const aEmbed = new MessageEmbed()
        .setTitle(`${user.username}'s avatar`)
        .setImage(user.avatarURL({dynamic: true}))
        .setColor('BLUE')
        .setTimestamp()
        message.channel.send(aEmbed)
        }
    }
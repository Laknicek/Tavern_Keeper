const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "clear",
    category: "Moderation",
    description: "Clear up to 99 messages in a specified channel",
    aliases: ['purge' , ' prune'],
    usage: '>clear',
    guildOnly: true,
    run: async (client, message, args) => {
        if(!message.member.hasPermission('MANAGE_MESSAGES')) 
        return message.reply(
            'You do not have the permission to use this commnad.'
            );

        if(!message.guild.me.hasPermission('MANAGE_MESSAGES')) 
        return message.reply(
            'I do not have the permission to use this commnad.'
            )
        const amount = parseInt(args[0]) + 1;

        if (isNaN(amount)) {
            return message.reply('That doesn\'t seem to be a valid number.');
        } else if (amount <= 1 || amount > 100) {
            return message.reply('you need to input a number between 1 and 99.');
        }

        let Reason =  message.content.split(" ").slice(2).join(" ");
        if (!Reason)
        return message.reply(
            'You are not allowed to clear messages without a reason.'
            );
    
        message.channel.bulkDelete(amount, true);
            const channel = client.channels.cache.get('720997712602071098');
            const Embed = new MessageEmbed()
            .setAuthor(`Bulk Deleted` , `${message.author.displayAvatarURL()}`)
            .setColor(`RED`)
            .addFields(
                {name: 'Bulk Delete by', value: `${message.author} ID: ${message.author.id}`},
                {name: 'Bulk Delete In', value: message.channel},
                {name: 'Reason', value: Reason},)
            .setTimestamp()
            .setFooter(`User ID: ${message.author.id}`)
        channel.send(Embed);

        const cEmbed = new MessageEmbed()
        .setDescription(`**Successfully cleared ${args[0]} messages.**`)
        .setColor('GREEN')
        message.channel.send(cEmbed)
    },
  };
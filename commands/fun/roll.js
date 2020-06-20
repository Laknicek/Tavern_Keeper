const rollDice = () => Math.floor(Math.random() * 6) + 1;

module.exports = {
    name: "roll",
    category: "Fun",
    description: "Roll a dice and get a random number from 1 - 6.",
    aliases: ['rolldice' , ' diceroll'],
    usage: '>roll',
    run: async (client, message, args) => {
        message.channel.send(`${message.author}, You rolled a ` + rollDice());
    },
  };
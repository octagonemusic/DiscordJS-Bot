const economy = require('../../utils/economy')
const Discord = require('discord.js')

module.exports = {
  name: 'withdraw',
  description: "Withdraws OctaCreds from your Bank into your Wallet.",
  timeout: 5,
  run: async (client, message, arguments) => {
    const { guild, member } = message

    const target = message.mentions.users.first()
    

    const coinsToGive = arguments[0]
    if (isNaN(coinsToGive)) {
      message.reply('Please provide a valid number of OctaCreds to withdraw from the bank.')
      return
    }

    const bankOwned = await economy.getBank(guild.id, member.id)
    if (bankOwned < coinsToGive) {
      message.reply(`You do not have \`${coinsToGive}\` OctaCreds in your bank!`)
      return
    }

    const remainingCoins = await economy.addCoins(
      guild.id,
      member.id,
      coinsToGive
    )
    const newBalance = await economy.addBank(guild.id, member.id, coinsToGive * -1)

    message.channel.send(
      new Discord.MessageEmbed()
      .setAuthor('ℭ𝔬𝔫𝔠𝔢𝔯𝔱𝔬 𝔡𝔦 ℭ𝔲𝔩𝔱𝔲𝔯𝔞')
      .setTitle('Withdrawn!')
      .setColor('RANDOM')
      .setFooter(`Withdrawn by ${message.author.username}`, message.author.displayAvatarURL())
      .setDescription(`**Withdrawn Amount:** \`${coinsToGive}\`

**Wallet Amount:** \`${remainingCoins}\`

**Bank Amount:** \`${newBalance}\``)
    )
  },
}
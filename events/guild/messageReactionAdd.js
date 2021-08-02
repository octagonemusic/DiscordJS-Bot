module.exports = async(client, reaction, user) => {
    if (reaction.message.partial) await reaction.message.fetch();
  if (reaction.partial) await reaction.fetch();

  if (user.bot) return;
  if (!reaction.message.guild) return;
  if (reaction.message.guild.id !== "832467028802797578") return;



  if (reaction.message.guild.id === '839977693126459413' && reaction.message.author.bot) {
    if (reaction.emoji.name === "🇫")

      return reaction.message.channel.send(`***${user.username}* has paid respects!**`).catch(() =>
        console.log("Failed to send message"))
  }

  if (reaction.message.channel.id === "832479712680476723") {
    if (reaction.emoji.name === "♂️") {
      await reaction.message.guild.members.cache.get(user.id).roles.add("832830546009915464")
      return user.send("Male role was given!").catch(() =>
        console.log("Failed to send DM"))
    }

    if (reaction.emoji.name === "♀️") {
      await reaction.message.guild.members.cache.get(user.id).roles.add("832830631175127070")
      return user.send("Female role was given!").catch(() =>
        console.log("Failed to send DM"))
    }

    if (reaction.emoji.name === "🏳️‍🌈") {
      await reaction.message.guild.members.cache.get(user.id).roles.add("832830693561335808")
      return user.send("Non-Binary role was given!").catch(() =>
        console.log("Failed to send DM"))
    }

    if (reaction.emoji.name === "🍜") {
      await reaction.message.guild.members.cache.get(user.id).roles.add("832830949418074152")
      return user.send("Asia role was given!").catch(() =>
        console.log("Failed to send DM"))
    }

    if (reaction.emoji.name === "🍕") {
      await reaction.message.guild.members.cache.get(user.id).roles.add("832830966916448276")
      return user.send("Europe role was given!").catch(() =>
        console.log("Failed to send DM"))
    }

    if (reaction.emoji.name === "🍔") {
      await reaction.message.guild.members.cache.get(user.id).roles.add("832830985560916008")
      return user.send("North America role was given!").catch(() =>
        console.log("Failed to send DM"))
    }

    if (reaction.emoji.name === "🌮") {
      await reaction.message.guild.members.cache.get(user.id).roles.add("832831006591156245")
      return user.send("South America role was given!").catch(() =>
        console.log("Failed to send DM"))
    }

    if (reaction.emoji.name === "🍖") {
      await reaction.message.guild.members.cache.get(user.id).roles.add("832831041181974540")
      return user.send("Africa role was given!").catch(() =>
        console.log("Failed to send DM"))
    }

    if (reaction.emoji.name === "🦘") {
      await reaction.message.guild.members.cache.get(user.id).roles.add("832831151894560788")
      return user.send("Oceania role was given!").catch(() =>
        console.log("Failed to send DM"))
    }

    if (reaction.emoji.name === "🎹") {
      await reaction.message.guild.members.cache.get(user.id).roles.add("836903296857014272")
      return user.send("Piano role was given!").catch(() =>
        console.log("Failed to send DM"))
    }

    if (reaction.emoji.name === "🎸") {
      await reaction.message.guild.members.cache.get(user.id).roles.add("836903341996376085")
      return user.send("Guitar role was given!").catch(() =>
        console.log("Failed to send DM"))
    }

    if (reaction.emoji.name === "🎻") {
      await reaction.message.guild.members.cache.get(user.id).roles.add("836903320714346516")
      return user.send("Violin role was given!").catch(() =>
        console.log("Failed to send DM"))
    }

    if (reaction.emoji.name === "🎤") {
      await reaction.message.guild.members.cache.get(user.id).roles.add("836903362720432158")
      return user.send("Singing role was given!").catch(() =>
        console.log("Failed to send DM"))
    }

    if (reaction.emoji.name === "🥁") {
      await reaction.message.guild.members.cache.get(user.id).roles.add("836903384812486666")
      return user.send("Singing role was given!").catch(() =>
        console.log("Failed to send DM"))
    }

    if (reaction.emoji.name === "📻") {
      await reaction.message.guild.members.cache.get(user.id).roles.add("836903362720432158")
      return user.send("Other Instruments role was given!").catch(() =>
        console.log("Failed to send DM"))
    }

    if (reaction.emoji.name === "🎶") {
      await reaction.message.guild.members.cache.get(user.id).roles.add("832831394773336064")
      return user.send("Music role was given!").catch(() =>
        console.log("Failed to send DM"))
    }

    if (reaction.emoji.name === "📕") {
      await reaction.message.guild.members.cache.get(user.id).roles.add("832831421018013696")
      return user.send("Reading role was given!").catch(() =>
        console.log("Failed to send DM"))
    }

    if (reaction.emoji.name === "🎨") {
      await reaction.message.guild.members.cache.get(user.id).roles.add("832831436879822919")
      return user.send("Art role was given!").catch(() =>
        console.log("Failed to send DM"))
    }

    if (reaction.emoji.name === "🎮") {
      await reaction.message.guild.members.cache.get(user.id).roles.add("832831453443129354")
      return user.send("Gaming role was given!").catch(() =>
        console.log("Failed to send DM"))
    }

    if (reaction.emoji.name === "🔴") {
      await reaction.message.guild.members.cache.get(user.id).roles.add("832831788611141673")
      return user.send("Live Stream Ping role was given!").catch(() =>
        console.log("Failed to send DM"))
    }

    if (reaction.emoji.name === "💀") {
      await reaction.message.guild.members.cache.get(user.id).roles.add("832831889764909057")
      return user.send("Dead Chat Ping role was given!").catch(() =>
        console.log("Failed to send DM"))
    }

    if (reaction.emoji.name === "🎬") {
      await reaction.message.guild.members.cache.get(user.id).roles.add("832831947856019476")
      return user.send("Movie Night Ping role was given!").catch(() =>
        console.log("Failed to send DM"))
    }

    if (reaction.emoji.name === "👦") {
      await reaction.message.guild.members.cache.get(user.id).roles.add("832831587530965042")
      return user.send("Below 18 role was given!").catch(() =>
        console.log("Failed to send DM"))
    }

    if (reaction.emoji.name === "👨") {
      await reaction.message.guild.members.cache.get(user.id).roles.add("832831615818399774")
      return user.send("Above 18 role was given!").catch(() =>
        console.log("Failed to send DM"))
    }


  } else {
    return;
  }
}
const Discord = require('discord.js');
const api = require('novelcovid')
// install the covid package
const fetch = require('node-fetch');
// installing the package to the fetch links


module.exports = {
	name : 'covid',
    aliases : ['corona', 'coronastats', 'covidstats'],
    usage : "<all> / <country>",
    description: "Shows the Covid-19 statistics.",
    timeout: 5,
	run: async (client, message, args) => {

        let countries = args.join(" ");
        // the country = =covid country

 		// if there is no country provided it sends this embed
        const noArgs = new Discord.MessageEmbed()
        .setTitle('Invalid Command Usage')
        .setColor(0xFF0000)
        .setDescription('You Can Try Using **?covid all** or **?covid USA**')
		// sends the noArgs embed
        if(!args[0]) return message.channel.send(noArgs);


		
  		// if some1 typed =covid all it will send the worldwide covid cases
        if(args[0] === "all"){
          	// fetching the covid data
            fetch(`https://covid19.mathdro.id/api`)
            .then(response => response.json())
            .then(data => {
              	// gets the worldwide's covid data from the website
                let confirmed = data.confirmed.value.toLocaleString()
                let recovered = data.recovered.value.toLocaleString()
                let deaths = data.deaths.value.toLocaleString()

                // making the covid embed with the world stats
                const embed = new Discord.MessageEmbed()
                .setTitle(`Worldwide COVID-19 Stats 🌎`)
                .addField('Confirmed Cases', confirmed)
                .addField('Recovered', recovered)
                .addField('Deaths', deaths)

                message.channel.send(embed)
            })


        // so if someone send =covid (country) not =covid all it will send this
        } else {
          	// fetching the data of all the countries
            fetch(`https://covid19.mathdro.id/api/countries/${countries}`)
            .then(response => response.json())
            .then(data => {
              	// getting the data of the countries
                let confirmed = data.confirmed.value.toLocaleString()
                let recovered = data.recovered.value.toLocaleString()
                let deaths = data.deaths.value.toLocaleString()

                // making a embed with the info of the country that you choosed
                const embed = new Discord.MessageEmbed()
                .setTitle(`COVID-19 Stats for **${countries}**`)
                .addField('Confirmed Cases', confirmed)
                .addField('Recovered', recovered)
                .addField('Deaths', deaths)

                message.channel.send(embed)
            }).catch(e => {
                // if he can't find the country that u said it will send this message
                return message.channel.send('Invalid country provided')
            })
        }
    }
}

    

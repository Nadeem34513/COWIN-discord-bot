const fetch = require('node-fetch')
const HttpsProxyAgent = require('https-proxy-agent')
const axios = require('axios')

const UserAgent = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:81.0) Gecko/20100101 Firefox/81.0' 
const baseUrl = 'https://cowin.rabeeh.me/api'


module.exports = (client, prefix) => {    
    client.on('message', message => {
        if(!message.content.includes(prefix) || message.author.bot) return
   
        const args = message.content.slice(prefix.length).trim().split(' ')
        const command = args.shift().toLowerCase()
        const { author } = message
        const { tag } = author
        
        if (command === 'hourlyUpdate') {
            if (args[0] === "ON" || args[0] === "On" || args[0] === "on") {
                message.channel.send(`Hourly update turned on for the user ${tag}, this feature haven't been implemented :cry: yet`)
            }
            else if (args[0] === "OFF" || args[0] === "Off" || args[0] === "off") {
                message.channel.send(`Hourly update turned off for the user ${tag}, this feature haven't been implemented :cry: yet`)
        
            }
        }
    })
}
const { Client } = require('discord.js')

require('dotenv').config()

// New Discord Client
const client = new Client()

client.on('ready', () => {
    console.log("BOT IS UP AND RUNNING...!")
})

// listening to all msgs
client.on('message', message => {
    console.log(`${message.author.username}: ${message.content}`)
        
})

// Login
client.login(process.env.BOT_TOKEN)
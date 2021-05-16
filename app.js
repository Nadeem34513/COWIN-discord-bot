const { Client } = require('discord.js')
const fetch = require('node-fetch')
const help = require('./modules/help')
const api = require('./api/api')

require('dotenv').config()


const prefix = '!'

// New Discord Client
const client = new Client()

client.on('ready', () => {
    console.log("BOT IS UP AND RUNNING...!")
})

// listening to all msgs

help(client, prefix)

// API CALLS

api.get_states(client, prefix)
api.get_district(client, prefix)

// Login
client.login(process.env.BOT_TOKEN)
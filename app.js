const { Client, MessageEmbed } = require('discord.js')
const fetch = require('node-fetch')
const mongoose = require('mongoose')

const help = require('./commands/help')
const reg = require('./commands/reg')
const api = require('./api')

require('dotenv').config()

const prefix = process.env.PREFIX

// New Discord Client
const client = new Client()
const embed = new MessageEmbed()

client.on('ready', () => {
    console.log("BOT IS UP AND RUNNING...!")
})

// DB Setup 
const db = process.env.DBKEY
mongoose.connect(db, {useNewUrlParser: true, useUnifiedTopology: true})
mongoose.connection.once('open', () => console.log('Connection made...'))


// listening to all msgs
// client.on('message', message => {
     // Dumby code; for testing lol
    
// })

// Commands with prefix: '!'
help(client, prefix, embed)
reg(client, prefix)


// API CALLS

api.get_states(client, prefix)
api.get_district(client, prefix)

// Login
client.login(process.env.BOT_TOKEN)
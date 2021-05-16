const { Client, MessageEmbed } = require('discord.js')
const fetch = require('node-fetch')
const mongoose = require('mongoose')

const help = require('./modules/help')
const api = require('./api')
const User = require('./model/Users')

require('dotenv').config()

const prefix = '!'

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
client.on('message', message => {
    // Dumby code; for testing lol

    if(!message.content.startsWith(prefix) || message.author.bot) return

    const args = message.content.slice(prefix.length).trim().split(' ')
    const command = args.shift().toLowerCase()

    if (command === 'reg') {
        console.log(message.author.username)
        console.log(message.author.id)
        console.log(message.author.client)
        console.log(message.author.tag)
    }
})

help(client, prefix, embed)

// API CALLS

api.get_states(client, prefix)
api.get_district(client, prefix)

// Login
client.login(process.env.BOT_TOKEN)
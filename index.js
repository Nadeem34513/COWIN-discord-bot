const { Client, MessageEmbed } = require('discord.js')
const mongoose = require('mongoose')

const help = require('./commands/help')
const reg = require('./commands/reg')
const update = require('./commands/update')
const hourlyUpdate = require('./commands/hourlyUpdate')
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
const db = process.env.DBKEY.toString()
mongoose.connect(db, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})
mongoose.connection.once('open', () => console.log('Connection made...'))

// Calling Commands
help(client, prefix, embed)
reg(client, prefix)
update(client, prefix)
hourlyUpdate(client, prefix)

api(client, prefix)

// Login
client.login(process.env.BOT_TOKEN)
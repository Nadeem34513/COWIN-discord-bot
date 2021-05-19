const User = require('./model/Users')
const { Client, MessageEmbed } = require('discord.js')
const mongoose = require('mongoose')
const axios = require('axios').default

const help = require('./commands/help')
const reg = require('./commands/reg')
const update = require('./commands/update')
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
mongoose.connect(db, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})
mongoose.connection.once('open', () => console.log('Connection made...'))


// listening to all msgs
client.on('message', async message => {
    //Dumby code; for testing lol
    if (message.content.startsWith(prefix) && message.content.includes('axiosCall')) {
        const baseUrl = 'https://cdn-api.co-vin.in/api'
        console.log('hello')
        const data = await axios.get(`${baseUrl}/v2/admin/location/states`).then(res => console.log(res))
        console.log(data)
    }
})

// Commands with prefix: '!'
help(client, prefix, embed)
reg(client, prefix)
update(client, prefix)

// API CALLS

api.get_states(client, prefix)
api.get_district(client, prefix)

// Login
client.login(process.env.BOT_TOKEN)
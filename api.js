const fetch = require('node-fetch')
const HttpsProxyAgent = require('https-proxy-agent')
const axios = require('axios')
const { model } = require('mongoose')

const UserAgent = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:81.0) Gecko/20100101 Firefox/81.0' 
const baseUrl = 'https://cowin.rabeeh.me/api'


module.exports = (client, prefix) => {
    client.on('message', message => {
        const args = message.content.slice(prefix.length).trim().split(' ')
        const command = args.shift().toLowerCase()

        // get_states function
        if (message.content.startsWith(prefix) && command === 'get_states') {
            get_states(message)    
        }
        else if (message.content.startsWith(prefix) && command === 'get_district') {
            get_district(message, args)
        }        
    })
}

const get_states = async (message) => {
    message.channel.send('check the console for api response(s):cry:')
    
    //const proxyAgent = new HttpsProxyAgent('http://46.250.171.31:8080')
    const data = await fetch(`${baseUrl}/v2/admin/location/states`, {
        headers: {
            //agent: proxyAgent,
            'User-Agent': UserAgent
        }
    }).then(response => response.json())
      .catch(err => console.log(err))
        
    console.log(data)
    let newData = JSON.stringify(data)
    newData = newData.replace(/{|}|"/g,'')
    newData = newData.replace(/,/g,'\n')
    newData = newData.replace(/[|]/g,'\n')

    message.channel.send(newData)
}           


const get_district = async (message, args) => {    

    const data = await fetch(`${baseUrl}/v2/admin/location/districts/${args[0]}`, {
        //agent: proxyAgent,
        headers: {
            'User-Agent': UserAgent
        }
    }).then(response => response.json())

    console.log(data)
    let newData = JSON.stringify(data)
    newData = newData.replace(/{|}|"/g,'')
    newData = newData.replace(/,/g,'\n')
    message.channel.send(newData)
       
}

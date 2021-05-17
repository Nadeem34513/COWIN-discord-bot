const fetch = require('node-fetch')

const UserAgent = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:81.0) Gecko/20100101 Firefox/81.0' 

//get states 
const get_states = (client, prefix) => {
    // function not done yet
    client.on('message', async message => {
        const args = message.content.slice(prefix.length).trim().split(' ')
        const command = args.shift().toLowerCase()

        if(message.content.startsWith(prefix) && command === 'get_states'){
            message.channel.send('check the console for api response(s)')
                    
            const data = await fetch('https://cdn-api.co-vin.in/api/v2/admin/location/states', {
                // imp
                headers: {
                    'User-Agent': UserAgent
                }
            }).then(response => response.json())
              .catch(err => console.log(err))
                
            const newData = JSON.stringify(data)
            // console.log(newData)
            // newData.replace(/{|}|"|/g,' ')
            // console.log(typeof(newData))
            // console.log(typeof(data))
            // message.channel.send(newData)
            message.channel.send(data.states[17].state_name)
            
        }
    
    })
}

// get district
const get_district = (client, prefix) => {
    // function not done yet
    client.on('message', async message => {
        const args = message.content.slice(prefix.length).trim().split(' ')
        const command = args.shift().toLowerCase()

        if(message.content.startsWith(prefix) && command === 'get_districts'){
            message.channel.send('check the console for the api response(s)')
                    
            const data = await fetch(`https://cdn-api.co-vin.in/api/v2/admin/location/districts/${args[0]}`, {
                // imp
                headers: {
                    'User-Agent': UserAgent
                }
            }).then(response => response.json())
            
            
            console.log(data)
            
            // await message.channel.send(data)
        }
    
    })
}







module.exports =  {
    get_states,
    get_district
}

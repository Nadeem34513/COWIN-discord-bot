const fetch = require('node-fetch')
const HttpsProxyAgent = require('https-proxy-agent')

const UserAgent = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:81.0) Gecko/20100101 Firefox/81.0' 

//get states 
const get_states = (client, prefix) => {
    // function not done yet
    client.on('message', async message => {
        const args = message.content.slice(prefix.length).trim().split(' ')
        const command = args.shift().toLowerCase()

        if(message.content.startsWith(prefix) && command === 'get_states'){
            message.channel.send('check the console for api response(s)')
            
            const proxyAgent = new HttpsProxyAgent('http://46.250.171.31:8080')
            const data = await fetch('https://cdn-api.co-vin.in/api/v2/admin/location/states', {
                headers: {
                    agent: proxyAgent,
                    'User-Agent': UserAgent
                }
            }).then(response => response.json())
              .catch(err => console.log(err))
                
            console.log(data)
            let newData = JSON.stringify(data)
        //    newData=newData.replace("{", ' ');
        //    newData=newData.replace("}", ' ');
        //    newData=newData.replace("\"", ' ');
        //    newData=newData.replace(",", ' ');
        //     newData = newData.substr(0, newData.length - 1);
            //newData = newData.replace(/{|}|"|,/g,'')
            newData = newData.replace(/{|}|"/g,'')
            newData = newData.replace(/,/g,'\n')
            newData = newData.replace(/[|]/g,'\n')

            // { ,}, and " gets replaced by a blank space
            console.log(newData)
            message.channel.send(newData)
            
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
            
            const proxyAgent = new HttpsProxyAgent('http://46.250.171.31:8080')
            const data = await fetch(`https://cdn-api.co-vin.in/api/v2/admin/location/districts/${args[0]}`, {
                // imp
                headers: {
                    agent: proxyAgent,
                    'User-Agent': UserAgent
                }
            }).then(response => response.json())
            
            
            console.log(data)
            let newData = JSON.stringify(data)

            newData = newData.replace(/{|}|"/g,'')
            newData = newData.replace(/,/g,'\n')

            message.channel.send(newData)
        }
        // discord edukk
    })
}

module.exports =  {
    get_states,
    get_district
}



// function replaceLastCharacter() {
//     var str = 'tracedynamics';
//     str = str.replace('s','S');
//     console.log(str); 
// }
    
// // //str.substr()
// function removeLastCharacter() {
//     var str = ' { " states " : [ { " state_id ": 1, " state_name " : " Andaman and Nicobar Islands " } , { " state_id " : 2,';
//     str = str.replace("{", ' ').replace("}", ' ').replace("[", ' ').replace("]", ' ')

//     console.log(str); 
// }
    
// removeLastCharacter()
// // newString = string.replace(/\s+/g,' ').trim();



// function removeFirstCharacter() {
//     var str = 'tracedynamics hello';
//     str = str.slice(0,str.length-1);
//     console.log(str); 
//     }

    
// removeFirstCharacter()

// //var stringWithoutLineBreaks = stringWithLineBreaks.replace(/(\r\n|\n|\r)/gm, "");
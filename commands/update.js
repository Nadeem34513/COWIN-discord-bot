const User = require('../model/Users')

module.exports = (client, prefix) => {
    client.on('message', message => {   
        if(!message.content.includes(prefix) || message.author.bot) return
   
        const args = message.content.slice(prefix.length).trim().split(' ')
        const command = args.shift().toLowerCase()

        const { author } = message
        const { id } = author
   
        if (command === 'update') {
            if (args[0] === null || args[1] == null)
               message.channel.send('Enter the district id and age group as parameters')
            else {
                const district_id = args[0]
                const age_grp = args[1]
                User.findOneAndUpdate({ id: id }, {district_id, age_grp}).then(user => {
                    if (user) {message.channel.send('You have successfully updated your district and age group')}
                    else {message.channel.send(`You must first register yourself using _!reg_ command`)}
                })
            }    
        }  
    })   
}
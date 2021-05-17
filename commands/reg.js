const User = require('../model/Users')

module.exports = (client, prefix) => {
    client.on('message', message => {
        if(!message.content.startsWith(prefix) || message.author.bot) return

        const args = message.content.slice(prefix.length).trim().split(' ')
        const command = args.shift().toLowerCase()
        const { author } = message
        const { id, tag, } = author
    
        if (command === 'reg') {
            const district_id = args[0]
            const age_grp = args[1]

            User.findOne({ id: id }).then(user => {
                if (user) {
                    console.log("User found already exist:  ", user)
                    message.channel.send(`You have already registered for the district id: ${user.district_id} and age group: ${user.age_grp}`)
                }
                else {
                    const newUser = new User({
                        id,
                        district_id,
                        tag,
                        age_grp
                    }).save()
                        .then(user => {
                            console.log(`New user added to db ${user}`)
                            message.channel.send('You have successfully registered for cowin vaccin update')
                        })
                        .catch(err => console.log(err))
                }
                    
            })
        }
    })
}
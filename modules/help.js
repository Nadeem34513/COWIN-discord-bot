module.exports = (client, prefix) => {
    client.on('message', message => {
        if (message.content === `${prefix}help`) {
                message.channel.send(
`All the commands for this bot are down belown
prefix: '!'
help -> displays help
apis -> displays all the states and state_id
apid -> displays all the districts and district_id
reg -> users can register vaccination appoinment using their district and age group as args`
)
        }
    })
}
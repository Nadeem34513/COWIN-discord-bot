module.exports = (client, prefix, embed) => {
    client.on('message', message => {
        if (message.content === `${prefix}help`) {
            embed
                .setTitle("COWIN BOT HELP")
                .setColor("#6969")
                .setFooter("Stay home and wear a mask")
                .addFields(
                    {
                        name: '!help',
                        value: 'Displays help'
                    },
                    {
                        name: '!get_states',
                        value: 'Displays all states and corresponding state id'
                    },
                    {
                        name: '!get_districts [state_id]',
                        value: 'Displays all districts and corresponding district id'
                    },
                    {
                        name: '!reg [district_id] [age_group]',
                        value: 'Register for cowin updates using district and age group'
                        
                    }
                )
            
            message.channel.send(embed)
        }// end of if

        client.user.setPresence({
            activity: {
                name: `"${prefix}help" for help`
            }
        })        
    })

}
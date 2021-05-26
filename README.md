![BFH Banner](https://trello-attachments.s3.amazonaws.com/542e9c6316504d5797afbfb9/542e9c6316504d5797afbfc1/39dee8d993841943b5723510ce663233/Frame_19.png)
# CowiVacc

CowiVacc is a discord bot that can let user check for cowin vaccin availibilty in their district. **This bot is specifically made for India**

[CLICK HERE TO ADD COWIVACC TO YOUR SERVER](https://discord.com/oauth2/authorize?client_id=843232501631287347&scope=bot)

___
## Team Id
BFH/recVKXtDb6xacMOVX/2021
## Team members
1. [Erfan Habeeb](https://github.com/erfanhabeeb)
2. [Jasal MM]()

___
## Libraries used

discord.js: 12.5.3
___
## Usage

| Commands      | Description |
| -----------   | ----------- |
| `!help`        | Displays help       |
| `!get_states`     | Displays all states and corresponding state id        |
| `!get_districts [state_id]`     | Displays all districts and corresponding district id        |
| `!reg [district_id] [age_group]`     | Register for cowin updates using district and age group        |
| `!update [district_id] [age_group]`     | Updates your existing district and age group with the one you provided as arguments        |
| `!hourlyUpdate [ON/OFF]`     | Toggles hourly updates         |

___

## How to configure
1. Clone this repo
```bash
git clone https://github.com/Nadeem34513/COWIN-discord-bot.git
```
2. Change directory
``` bash
cd ./COWIN-discord-bot
```
3. Install the neccessary dependencies
```javascript
npm install
```
4. Make sure to create a ``.eni`` file and add your bot token and mongodb URI in it.
## How to Run
```javascript
node start
```
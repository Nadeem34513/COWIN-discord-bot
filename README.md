# CowiVacc

CowiVacc is a discord bot that can let user check for cowin vaccin availibilty in their district 

[CLICK HERE TO ADD COWIVACC TO YOUR SERVER](https://discord.com/oauth2/authorize?client_id=843232501631287347&scope=bot)

## Setup

```bash
git clone https://github.com/Nadeem34513/COWIN-discord-bot.git 

cd ./COWIN-discord-bot
```
```javascript
npm install

node start
```
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

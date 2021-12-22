const tmi = require('tmi.js');
require('dotenv').config()

const client = new tmi.Client({
    options: { debug: true},
    connection: {
        secure: true,
        reconnect: true
    },
    identity: {
        username: process.env.TWITCH_OUATH_USERNAME,
        password: process.env.TWITCH_OAUTH_TOKEN
    },
    channels: ['adrianmartindev']
});

client.connect();

client.on('message', (channel, tags, msg, self) => {
    if(self || !msg.startsWith('!')) return;

    const args = msg.slice(1).split(' ');
    const command = args.shift().toLowerCase();

    if(command === 'twitter'){
        client.say(channel, `https://twitter.com/adrianmartindev`);
    }else if(command === 'resumen'){
        client.say(channel, `https://www.adrianmartin.dev/twitch-resume`);
    }else if(command === 'web'){
        client.say(channel, `https://www.adrianmartin.dev`);
    }else if (command === 'comandos'){
        //TODO: Abstraer a estructura de datos externa que sea configurable.
        client.say(channel, `!twitter, !web, !comandos`);
    }
})
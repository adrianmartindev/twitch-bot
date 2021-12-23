const tmi = require('tmi.js');
const commands = require('./constants/commands');
require('dotenv').config();

const client = new tmi.Client({
    options: { debug: true},
    connection: {
        secure: true,
        reconnect: true
    },
    identity: {
        username: process.env.TWITCH_OAUTH_USERNAME,
        password: process.env.TWITCH_OAUTH_TOKEN
    },
    channels: ['adrianmartindev']
});

client.connect();

client.on('message', (channel, user, msg, self) => {
    if(self || !msg.startsWith('!')) return;

    const args = msg.slice(1).split(' ');
    const commandReceived = args.shift().toLowerCase();
    const commandFound = commands.find(command => command.command === commandReceived);

    //TODO: Guardar las preguntas y hacer que se muestren por pantalla con un widget
    if(commandReceived === 'pregunta'){
        const question = msg.substring(msg.indexOf(' ')+ 1);
        console.log(question);
    }

    //TODO: Crear ranking, y hacer widget por pantalla
    if(commandReceived === 'estrella'){
        if(user.subscriber){
            client.say(channel, commandFound.responseSub);
        }else{
            client.say(channel, commandFound.responseNoSub);
        }
    }else{
        client.say(channel, commandFound.response);
    }
    

})
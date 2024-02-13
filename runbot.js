const qrcode = require('qrcode-terminal');
const { Client, MessageMedia } = require('whatsapp-web.js');

const client = new Client();

// Display QR code to authenticate
client.on('qr', (qr) => {
    qrcode.generate(qr, { small: true });
});

// Client is ready
client.on('ready', () => {
    console.log('Client is ready!');
});

// Respond to different message types
client.on('message', async (message) => {
    switch (message.body.toLowerCase()) {
        case 'bro':
            await message.reply('Say Your Problem');
            break;
        case 'hey':
            await message.reply('Hello');
            break;
        case 'bye':
            await message.reply('Bye Bye see You Again');
            break;
        case 'help me':
            await message.reply('How can I Help you');
            break;
        case 'can i love you':
            await message.reply('Sorry I am not Human');
            break;
        case 'act like me':
            await message.reply('Acting Like You');
            break;
        case 'act like human':
            await message.reply('Acting like human');
            break;
        case 'speak to me':
            await message.reply('Not Using');
            break;
        case 'developer':
            const media = await MessageMedia.fromUrl('https://i.ibb.co/gr8c3Jc/Screenshot-2024-02-12-192153.png');
            await client.sendMessage(message.from, media);
            break;
        case 'control':
            await message.reply('Welcome to Jickbot');
            break;
        case 'everyone':
            const chat = await message.getChat();
            let text = '';
            let mentions = [];
            for (let participant of chat.participants) {
                mentions.push(`${participant.id.user}@c.us`);
                text += `@${participant.id.user} `;
            }
            await chat.sendMessage(text, { mentions });
            break;
        default:
            // Handle other messages or do nothing
            break;
    }
});

// Initialize the client
client.initialize();

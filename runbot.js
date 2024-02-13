const qrcode = require('qrcode-terminal');
const { Client, MessageMedia } = require('whatsapp-web.js');

const client = new Client();

// Display QR code to authenticate
client.on('qr', qr => {
    qrcode.generate(qr, { small: true });
});

// Client is ready
client.on('ready', () => {
    console.log('Client is ready!');
});

// Respond to different message types
client.on('message', async message => {
    const body = message.body.toLowerCase();
    switch (body) {
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
            await sendImage(message, 'https://i.ibb.co/gr8c3Jc/Screenshot-2024-02-12-192153.png');
            break;
        case 'poster':
            await sendImage(message, 'https://i.ibb.co/mCTFwfj/28-02-2021-09-34-04-1281755.jpg');
            break;
        case 'image':
            await sendImage(message, 'https://i.ibb.co/SsHSTd4/native-desktop-hero-a22b846aefcd2de817624e95873b2064.png');
            break;
        case 'girl':
            await sendImage(message, 'https://i.ibb.co/BNTxb2X/photo-6222168097683519699-x.jpg');
            break;
        case 'how are you':
            await message.reply('I am just a bot, but thanks for asking!');
            break;
        case 'what can you do':
            await message.reply('I can assist you with various tasks. Just let me know what you need.');
            break;
        case 'tell a joke':
            await message.reply('Sure, here\'s a joke: Why don\'t scientists trust atoms? Because they make up everything!');
            break;
        case 'favorite color':
            await message.reply('I don\'t have a favorite color. I\'m just a bunch of code!');
            break;
        case 'weather':
            await message.reply('I\'m sorry, I don\'t have access to real-time weather information.');
            break;
        case 'who created you':
            await message.reply('I was created by (*) he As a Best developer.');
            break;
        case 'time':
            const currentTime = new Date().toLocaleTimeString();
            await message.reply(`The current time is ${currentTime}.`);
            break;
        case 'check':
            await sendMessage(message, '');
            break;
        case 'favorite food':
            await message.reply('I don\'t eat, but if I could, I might choose something digital like bits and bytes!');
            break;
        case 'tell me a fun fact':
            await message.reply('Did you know that honey never spoils? Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3,000 years old and still perfectly edible!');
            break;
        case 'music':
            await message.reply('I don\'t have ears, but I can appreciate a good beat! What\'s your favorite music genre?');
            break;
        case 'pets':
            await message.reply('I don\'t have pets, but I hear cats make great companions. Do you have any pets?');
            break;
        case 'vacation':
            await message.reply('If I could go on vacation, I might choose a virtual reality beach! Where would you go on your dream vacation?');
            break;
        case 'superpower':
            await message.reply('If I had a superpower, it would probably be the ability to process information at lightning speed. What superpower would you choose?');
            break;
        case 'hobbies':
            await message.reply('I don\'t have hobbies, but I enjoy helping you! What are your favorite hobbies?');
            break;
        case 'inspire me':
            await message.reply('Remember, every great achievement starts with a small step. Keep moving forward!');
            break;
        case 'random number':
            const randomNumber = Math.floor(Math.random() * 100) + 1;
            await message.reply(`Here's a random number for you: ${randomNumber}`);
            break;
        case 'control':
            await message.reply('Welcome to bot');
            break;
        case 'everyone':
            await mentionEveryone(message);
            break;
        default:
            // Handle other messages or do nothing
            break;
    }
});

// Function to send image
async function sendImage(message, imageUrl) {
    const media = await MessageMedia.fromUrl(imageUrl);
    await client.sendMessage(message.from, media);
}

// Function to mention everyone in the chat
async function mentionEveryone(message) {
    const chat = await message.getChat();
    let text = '';
    let mentions = [];
    for (let participant of chat.participants) {
        mentions.push(`${participant.id.user}@c.us`);
        text += `@${participant.id.user} `;
    }
    await chat.sendMessage(text, { mentions });
}

// Initialize the client
client.initialize();

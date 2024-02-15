const qrcode = require('qrcode-terminal');
const { Client, MessageMedia } = require('whatsapp-web.js');
const nodemon=require("nodemon");

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
            case 'cat':
    await sendImage(message, 'https://i.ibb.co/PgmBrnK/images.jpg');
    break;
case 'dog':
    await sendImage(message, 'https://i.ibb.co/y0q9gZ8/images.jpg');
    break;
case 'Give a Rose':
    await sendImage(message, 'https://i.ibb.co/2qzt5B9/images.jpg');
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
        case 'Oppo':
            await sendMessage(message, 'vivo');
            break;
            case 'definition of love':
    await message.reply('Love is a complex and multifaceted emotion characterized by deep affection, care, and attachment towards someone or something.');
    break;
case 'romantic gesture':
    await message.reply('A romantic gesture could be anything from a handwritten love letter to a surprise candlelit dinner.');
    break;
case 'ideal date':
    await message.reply('An ideal date varies greatly from person to person, but it often involves spending quality time together in a meaningful or enjoyable setting.');
    break;
case 'signs of true love':
    await message.reply('Signs of true love may include unwavering support, mutual respect, genuine concern for each other\'s well-being, and a deep emotional connection.');
    break;
case 'heartbreak':
    await message.reply('Heartbreak is the profound emotional pain and sadness that accompanies the end of a romantic relationship or the betrayal of trust.');
    break;
case 'long-distance relationship':
    await message.reply('A long-distance relationship is a romantic partnership in which the individuals involved are geographically separated, requiring them to maintain their connection through communication and effort.');
    break;
case 'famous love stories':
    await message.reply('There are many famous love stories throughout history and literature, such as Romeo and Juliet, Lancelot and Guinevere, and Elizabeth Bennet and Mr. Darcy.');
    break;
case 'unrequited love':
    await message.reply('Unrequited love refers to the experience of loving someone who does not reciprocate those feelings, resulting in emotional pain and longing for something unattainable.');
    break;
case 'love languages':
    await message.reply('Love languages are the different ways in which people express and experience love, including acts of service, quality time, words of affirmation, physical touch, and receiving gifts.');
    break;
case 'relationship advice':
    await message.reply('Relationship advice can vary depending on the specific circumstances, but communication, trust, mutual respect, and compromise are often cited as key elements for a healthy and fulfilling partnership.');
    break;
// And so forth...
case 'five pillars of Islam':
    await message.reply('The five pillars of Islam are Shahada (declaration of faith), Salah (prayer), Zakat (charity), Sawm (fasting), and Hajj (pilgrimage to Mecca).');
    break;
case 'meaning of Jihad':
    await message.reply('Jihad, in Islam, refers to the struggle or striving in the way of Allah. It can encompass various forms, including striving for personal betterment, defending one\'s faith, or supporting a just cause.');
    break;
case 'importance of Salah':
    await message.reply('Salah, or prayer, is one of the fundamental acts of worship in Islam. It serves as a direct connection between the individual and Allah, fostering spiritual growth, discipline, and mindfulness.');
    break;
case 'concept of Tawhid':
    await message.reply('Tawhid is the central belief in the oneness of Allah in Islam. It encompasses the belief in the uniqueness, sovereignty, and absolute power of Allah, rejecting any notion of partners or associates with Him.');
    break;
case 'role of women in Islam':
    await message.reply('In Islam, women are regarded as equal in spirituality, dignity, and humanity to men. They have rights and responsibilities prescribed by Islamic teachings, including education, work, and participation in society.');
    break;
case 'Islamic dress code':
    await message.reply('The Islamic dress code, known as hijab, varies among different cultures and communities, but it generally emphasizes modesty and decency in attire for both men and women.');
    break;
case 'importance of Zakat':
    await message.reply('Zakat, or obligatory charity, is one of the five pillars of Islam. It serves as a means of wealth redistribution and social welfare, ensuring that wealth is shared among the less fortunate members of society.');
    break;
case 'Islamic concept of forgiveness':
    await message.reply('Forgiveness is highly encouraged in Islam, both seeking forgiveness from Allah and forgiving others. It is seen as a way to purify the heart, mend relationships, and attain spiritual growth.');
    break;
case 'purpose of fasting in Ramadan':
    await message.reply('Fasting during the month of Ramadan is an obligatory act of worship in Islam. It serves multiple purposes, including spiritual purification, self-discipline, empathy towards the less fortunate, and drawing closer to Allah.');
    break;
case 'Islamic view on social justice':
    await message.reply('Islam places great emphasis on social justice, advocating for the fair treatment of all individuals regardless of their race, religion, or social status. It encourages helping the needy, standing up against oppression, and promoting equality in society.');
    break;
// And so forth...
case 'debugging tips':
    await message.reply('When debugging code, try breaking down the problem into smaller parts, reviewing the error messages, and using debugging tools like console.log statements or breakpoints to identify the issue.');
    break;
case 'optimizing code performance':
    await message.reply('To optimize code performance, consider minimizing repetitive operations, reducing unnecessary function calls, optimizing algorithms and data structures, and utilizing caching and asynchronous operations where possible.');
    break;
case 'version control best practices':
    await message.reply('When using version control systems like Git, adhere to best practices such as committing frequently with meaningful messages, branching for feature development, merging changes cautiously, and regularly pulling and pushing to stay up to date with the remote repository.');
    break;
case 'handling dependencies':
    await message.reply('When managing dependencies in a project, keep them updated to the latest stable versions, minimize unnecessary dependencies, and consider using dependency management tools like npm or yarn to handle installation and updates.');
    break;
case 'security vulnerabilities':
    await message.reply('To address security vulnerabilities in code, regularly scan for vulnerabilities using security tools, follow security best practices such as input validation and output encoding, and keep dependencies patched and up to date to mitigate potential risks.');
    break;
case 'cross-browser compatibility':
    await message.reply('To ensure cross-browser compatibility, test your code across different browsers and versions, use CSS and JavaScript polyfills or fallbacks for unsupported features, and consider using CSS frameworks or libraries that provide built-in compatibility.');
    break;
case 'deployment strategies':
    await message.reply('When deploying applications, consider using continuous integration and continuous deployment (CI/CD) pipelines for automated testing and deployment, utilize containerization technologies like Docker for consistent environments, and implement strategies for rollback and monitoring.');
    break;
case 'code documentation':
    await message.reply('Documenting code is essential for clarity and maintainability. Use descriptive variable and function names, add comments to explain complex logic or edge cases, and generate API documentation using tools like JSDoc or Swagger where applicable.');
    break;
case 'performance profiling':
    await message.reply('To profile code performance, use profiling tools and performance monitoring libraries to identify bottlenecks, measure execution times, and analyze resource usage. Optimize critical code paths based on profiling data to improve overall performance.');
    break;
case 'error handling strategies':
    await message.reply('Implement robust error handling in code by using try-catch blocks for handling exceptions, validating input data to prevent errors, logging error messages with relevant context information, and providing informative error messages to users.');
    break;
// And so forth...
case 'diagnosis tips':
    await message.reply('When diagnosing patients, gather lots of information about their symptoms and history, do tests to confirm, and consider different possibilities.');
    break;
case 'treatment advice':
    await message.reply('When deciding how to treat patients, think about what could help them the most, consider their preferences, and talk to other doctors if needed.');
    break;
case 'talking to patients':
    await message.reply('When talking to patients, listen carefully, explain things clearly, and show you care about how they feel.');
    break;
case 'managing records':
    await message.reply('Keep patient records organized and safe using computers, and share important information with other doctors when needed.');
    break;
case 'handling emergencies':
    await message.reply('During emergencies, act quickly, follow the steps you\'ve been taught, and work with others to help the patient.');
    break;
case 'ethics in practice':
    await message.reply('When faced with tough choices, think about what\'s best for the patient, talk to others if you\'re unsure, and always be honest.');
    break;
case 'balancing work and life':
    await message.reply('Make sure to take breaks, spend time with loved ones, and do things you enjoy outside of work to stay happy and healthy.');
    break;
case 'learning new things':
    await message.reply('Keep learning about medicine by going to classes, reading articles, and talking to other doctors about what\'s new.');
    break;
case 'teaching patients':
    await message.reply('Help patients understand their health by using simple words, pictures, and examples to explain things.');
    break;
case 'helping everyone':
    await message.reply('Work to make sure everyone, no matter who they are, has access to good healthcare and gets treated fairly.');
    break;
// And so on...


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
            case 'hi there':
                await message.reply('Hello!');
                break;
            case 'good day':
                await message.reply('Good day to you too!');
                break;
            case 'what\'s up?':
                await message.reply('Not much, just here to assist you!');
                break;
            case 'got any plans?':
                await message.reply('No plans, just ready to help!');
                break;
            case 'thank you':
                await message.reply('You\'re welcome!');
                break;
            case 'much appreciated':
                await message.reply('Glad to be of help!');
                break;
            case 'keep up the good work':
                await message.reply('Thanks for the encouragement!');
                break;
            case 'catch you later':
                await message.reply('Sure, talk to you later!');
                break;
                case 'yes':
    await message.reply('Great!');
    break;
case 'ok':
    await message.reply('Okay!');
    break;
case 'sure':
    await message.reply('Sure thing!');
    break;
case 'absolutely':
    await message.reply('Absolutely!');
    break;
case 'no problem':
    await message.reply('No problem!');
    break;
case 'of course':
    await message.reply('Of course!');
    break;
case 'definitely':
    await message.reply('Definitely!');
    break;
case 'indeed':
    await message.reply('Indeed!');
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

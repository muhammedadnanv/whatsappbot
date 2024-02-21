const { Client } = require('whatsapp-web.js');

class WhatsAppBot {
    constructor() {
        this.client = new Client();
        this.isInitialized = false;
        this.messageHandlers = [];
    }

    async initialize() {
        if (!this.isInitialized) {
            await this.client.initialize();
            this.isInitialized = true;
            console.log('WhatsApp client initialized');
            this.client.on('message', this.handleMessage.bind(this));
        }
    }

    handleMessage(message) {
        const { body, from } = message;
        console.log(`Received message from ${from}: ${body}`);

        // Call registered message handlers
        this.messageHandlers.forEach(handler => handler(from, body));
    }

    async sendMessage(recipient, message) {
        try {
            await this.initialize();
            await this.client.sendMessage(recipient, message);
            console.log(`Sent message to ${recipient}: ${message}`);
            return true;
        } catch (error) {
            console.error(`Error sending message to ${recipient}: ${error}`);
            return false;
        }
    }

    onMessage(handler) {
        this.messageHandlers.push(handler);
    }
}

module.exports = WhatsAppBot;

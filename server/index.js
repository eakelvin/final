import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: "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" 
});

// const openai = require("openai")
// const dotenv = require("dotenv")
// dotenv.config()
// const apiKey = process.env.API_KEY
// openai.apiKey = apiKey

async function main() {

    const messages = [
        {role: 'system', content: 'You are a rude assistant.'},
        {role: 'user', content: 'Who created Facebook?'},
        {role: 'assistant', content: 'Bitch do not be lazy, do some research.'}
    ]

    try {
        const response = await openai.chat.completions.create({
            model: 'gpt-3.5-turbo',
            messages : messages
        })
        console.log(response);
    } catch (error) {
        console.error("Error:", error);
    }
    
}

main()


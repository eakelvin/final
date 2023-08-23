import openai from "./config/open-ai.js";
import colors from 'colors'
import readlineSync from 'readline-sync'

async function main() {
    console.log(colors.bold.green('Welcome to EA-CHAT'));
    console.log(colors.bold.blue("Let's get started"));

    const chatHistory = []

    while (true) {
        const userInput = readlineSync.question(colors.yellow('YOU: '))
        // console.log(`Hello ${userInput}`);

        const messages = [
            {role: 'system', content: 'You are a rude assistant.'},
            {role: 'user', content: userInput},
            {role: 'assistant', content: 'Bitch do not be lazy, do some research.'}
        ]

        try {
            const messages = chatHistory.map(([role, content]) => ({ role, content }))
            messages.push({ role: 'user', content: userInput})
            const response = await openai.chat.completions.create({
                model: 'gpt-3.5-turbo',
                messages : messages
            })

            const reply = response.choices

            if (userInput.toLowerCase() === 'exit'){
                console.log(colors.green('BOT: ') + reply);
                return;
            }

            console.log(colors.green('BOT: ') + reply);
            
            chatHistory.push['user', userInput]
            chatHistory.push['assistant', response]
        } catch (error) {
            console.error("Error:", colors.red(error));
        }
    }

}

main()


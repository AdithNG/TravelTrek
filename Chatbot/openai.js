const openai = require('openai');

// Replace with your actual API key
openai.apiKey = 'YOUR_API_KEY';

async function sendPrompt(prompt) {
    try {
      const response = await openai.completion.create({
        model: 'davinci',
        prompt,
        temperature: 0.7,
        max_tokens: 256,
      });
      return response.data.choices[0].text;
    } catch (error) {
      console.error(error);
    }
}

function handleUserInput(userMessage) {
    // Preprocess the user message here (e.g., remove special characters)
    const cleanMessage = userMessage.trim();
  
    // Build the prompt for ChatGPT
    return `User: ${cleanMessage}\n\nChatGPT:`;
}

async function generateAndDisplayResponse(prompt) {
    const chatbotMessage = await sendPrompt(prompt);
  
    // Update the chat history with the response
    const chatHistoryElement = document.getElementById('chat-history');
    const chatbotResponseElement = document.createElement('div');
    chatbotResponseElement.classList.add('chat-message', 'chatbot-message');
    chatbotResponseElement.innerText = chatbotMessage;
    chatHistoryElement.appendChild(chatbotResponseElement);
}

const messageInputField = document.querySelector('.message-history');
const sendButton = document.getElementById('send-button');

messageInputField.addEventListener('keyup', async (event) => {
  if (event.key === 'Enter') {
    const userMessage = messageInputField.value;
    const prompt = handleUserInput(userMessage);
    await generateAndDisplayResponse(prompt);
    messageInputField.value = '';
  }
});

sendButton.addEventListener('click', async () => {
  const userMessage = messageInputField.value;
  const prompt = handleUserInput(userMessage);
  await generateAndDisplayResponse(prompt);
  messageInputField.value = '';
});


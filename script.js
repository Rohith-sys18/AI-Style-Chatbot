document.addEventListener('DOMContentLoaded', () => {
    const chatMessages = document.getElementById('chat-messages');
    const userInput = document.getElementById('user-input');
    const sendBtn = document.getElementById('send-btn');

    // Function to append a message to the chat
    function appendMessage(text, sender) {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message', sender === 'user' ? 'user-message' : 'bot-message');

        const contentDiv = document.createElement('div');
        contentDiv.classList.add('message-content');
        contentDiv.textContent = text;

        messageDiv.appendChild(contentDiv);
        chatMessages.appendChild(messageDiv);

        // Scroll to the bottom
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    // Function to get bot response based on keywords
    function getBotResponse(input) {
        const lowerInput = input.toLowerCase();

        if (lowerInput.includes('how are you')) {
            return "Hi, I am ok! What about you?";
        } else if (lowerInput.includes('thank you') || lowerInput.includes('thanks') || lowerInput.includes('thanku') || lowerInput.includes('thank u')) {
            return "Thank you! Feel free to ask anything else.";
        } else if (lowerInput.includes('hello') || lowerInput.includes('hi') || lowerInput.includes('hey')) {
            return "Hello! How can I help you today?";
        } else if (lowerInput.includes('name')) {
            return "I am a simple AI chatbot built using JavaScript.";
        } else if (lowerInput.includes('price') || lowerInput.includes('cost')) {
            return "Our pricing starts from ₹999. You can check our website for more details.";
        } else if (lowerInput.includes('course') || lowerInput.includes('classes')) {
            return "We offer Web Development and AI training courses. Which one interests you?";
        } else if (lowerInput.includes('help') || lowerInput.includes('support')) {
            return "You can ask me about our courses, prices, or my name!";
        } else {
            return "Sorry, I didn't quite catch that. I am a simple bot, try typing exact keywords like 'price', 'course', or 'hello'!";
        }
    }

    // Function to handle sending a message
    function handleSend() {
        const text = userInput.value.trim();
        if (text === '') return;

        // Display user message
        appendMessage(text, 'user');

        // Clear input field
        userInput.value = '';

        // Simulate a slight delay for the bot response
        setTimeout(() => {
            const response = getBotResponse(text);
            appendMessage(response, 'bot');
        }, 500);
    }

    // Event listener for the send button
    sendBtn.addEventListener('click', handleSend);

    // Event listener for the Enter key
    userInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            handleSend();
        }
    });

    // Optional: focus input on load
    userInput.focus();
});

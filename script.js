// Sentiment Analysis Form Submission
document.getElementById('sentimentForm').onsubmit = async (e) => {
    e.preventDefault();
    const userInput = document.getElementById('userInput').value;
    const response = await fetch('/analyze', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ text: userInput })
    });
    const result = await response.json();
    const resultDiv = document.getElementById('result');
    resultDiv.innerText = `Sentiment: ${result.sentiment}`;
    resultDiv.classList.add('fade-in');
};

// AI Chat Message Submission
async function sendMessage() {
    const userMessage = document.getElementById('userMessage').value;
    const response = await fetch('/chat', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ message: userMessage })
    });
    const result = await response.json();
    const messagesDiv = document.getElementById('messages');
    messagesDiv.innerHTML += `<div class="message fade-in"><strong>You:</strong> ${userMessage}</div>`;
    messagesDiv.innerHTML += `<div class="message fade-in"><strong>AI:</strong> ${result.response}</div>`;
    document.getElementById('userMessage').value = '';
    messagesDiv.scrollTop = messagesDiv.scrollHeight; // Auto-scroll to the latest message
}
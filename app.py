from flask import Flask, render_template, request, jsonify
import openai
import os

app = Flask(__name__)

# OpenAI API Key
openai.api_key = os.getenv('OPENAI_API_KEY')

# Home Route
@app.route('/')
def home():
    return render_template('index.html')

# Sentiment Analysis Route (Example)
@app.route('/analyze', methods=['POST'])
def analyze():
    user_input = request.json.get('text')
    sentiment = "positive"  # Replace with actual sentiment analysis logic
    return jsonify({'sentiment': sentiment})

# Meditation Route
@app.route('/meditation')
def meditation():
    return render_template('meditation.html')

# Breathing Route
@app.route('/breathing')
def breathing():
    return render_template('breathing.html')

# AI Chat Route
@app.route('/chat', methods=['POST'])
def chat():
    user_message = request.json.get('message')
    response = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",
        messages=[
            {"role": "system", "content": "You are a helpful and empathetic mental health support assistant."},
            {"role": "user", "content": user_message}
        ]
    )
    return jsonify({'response': response['choices'][0]['message']['content']})

# Run the app
if __name__ == '__main__':
    app.run(debug=True)
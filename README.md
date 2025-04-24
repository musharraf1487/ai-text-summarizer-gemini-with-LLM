# Gemini Text Summarizer

## Description
A smart web-based tool to summarize text using Google's Gemini API. Users can input long content and get a concise summary in various tones (Neutral, Formal, Casual).

## Technologies Used
- React (Frontend)
- Node.js + Express (Backend)
- Gemini API (Google Generative AI)
- Tailwind CSS for styling (optional)

## How to Run Locally
1. Clone the repository
2. Copy `.env.example` to `.env` and replace it with your actual Gemini API key:
   ```bash
   cp .env.example .env
   # Then open .env and paste your Gemini API key
   ```
3. Run backend:
   ```
   cd server
   npm install
   node index.js
   ```
4. Run frontend:
   ```
   cd client
   npm install
   npm run dev
   ```

## Features
- Input text and get a summarized output
- Choose tone of summary: Neutral, Formal, Casual
- Responsive UI and clean experience

## Screenshot
*(Include one or two screenshots of the app in action)*

## License
MIT

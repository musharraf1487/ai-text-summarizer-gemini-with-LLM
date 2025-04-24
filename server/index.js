const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors());

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

app.post('/summarize', async (req, res) => {
  const { text, tone = 'neutral' } = req.body;

  try {
    const response = await axios.post(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${GEMINI_API_KEY}`,
      {
        contents: [
          {
            parts: [
              {
                text: `Summarize the following text in a ${tone} tone:\n\n${text}`
              }
            ]
          }
        ]
      }
    );

    const summary = response.data.candidates?.[0]?.content?.parts?.[0]?.text;
    res.send({ summary });
  } catch (error) {
    res.status(500).json({ error: 'Summarization failed.' });
  }
});

app.listen(3001, () => console.log('Server listening on http://localhost:3001'));

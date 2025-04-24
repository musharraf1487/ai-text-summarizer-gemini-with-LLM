import { useState } from 'react';
import axios from 'axios';

export default function App() {
  const [input, setInput] = useState('');
  const [summary, setSummary] = useState('');
  const [loading, setLoading] = useState(false);
  const [tone, setTone] = useState('neutral');

  const summarize = async () => {
    setLoading(true);
    try {
      const res = await axios.post('http://localhost:3001/summarize', { text: input, tone });
      setSummary(res.data.summary);
    } catch (err) {
      setSummary('Something went wrong.');
    }
    setLoading(false);
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Gemini Text Summarizer</h1>
      <textarea
        className="w-full border p-2 mb-4"
        rows="8"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Paste text here..."
      />
      <select className="mb-4 p-2 border" value={tone} onChange={(e) => setTone(e.target.value)}>
        <option value="neutral">Neutral</option>
        <option value="formal">Formal</option>
        <option value="casual">Casual</option>
      </select>
      <button onClick={summarize} className="bg-blue-600 text-white px-4 py-2 rounded">
        Summarize
      </button>
      {loading && <p className="mt-4">Summarizing...</p>}
      {summary && (
        <div className="mt-4 p-4 border bg-gray-50 rounded">
          <h2 className="font-semibold mb-2">Summary:</h2>
          <p>{summary}</p>
        </div>
      )}
    </div>
  );
}

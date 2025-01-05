import React, { useState } from 'react';

const ShortenUrl = () => {
  const [longUrl, setLongUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ longUrl }),
      });

      const data = await response.json();
      setShortUrl(data.shortUrl);
    } catch (err) {
      console.error('Error shortening URL:', err);
    }
  };

  return (
    <div className="shorten-form">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={longUrl}
          onChange={(e) => setLongUrl(e.target.value)}
          placeholder="Enter a long URL"
          required
        />
        <button type="submit">Shorten URL</button>
      </form>

      {shortUrl && (
    <div className="result">
        <p>
            Your short URL:{" "}
            <a
                href={`http://localhost:5000/api/${shortUrl}`}
                target="_blank"
                rel="noopener noreferrer"
            >
                {`http://localhost:5000/api/${shortUrl}`}
            </a>
        </p>
    </div>
)}

    </div>
  );
};

export default ShortenUrl;

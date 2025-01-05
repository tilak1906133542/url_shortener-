import { nanoid } from 'nanoid';


let urls = []; // Array to store URLs temporarily

// Controller to create a short URL
export const createUrl = (req, res) => {
  const { longUrl } = req.body;
  const shortUrl = nanoid(6); // 6 characters for short URL

  const newUrl = { longUrl, shortUrl };
  urls.push(newUrl);

  res.status(201).json(newUrl);
};

// Controller to handle redirection
export const getUrl = (req, res) => {
  const { shortUrl } = req.params;
  const url = urls.find((u) => u.shortUrl === shortUrl);

  if (!url) {
    return res.status(404).json({ message: 'URL not found' });
  }

  res.redirect(url.longUrl); // Redirect to original URL
};

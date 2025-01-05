import express from 'express'; 
import cors from 'cors';
import urlRoutes from './routes/urlRoutes.js';
const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api', urlRoutes);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

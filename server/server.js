
import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import connectDB from './configs/mongodb.js';

// App config
const PORT = process.env.PORT || 3000;
const app = express();

// Connect to MongoDB
await connectDB();

// Init Middleware
app.use(express.json());
app.use(cors());

// API routes
app.get('/', (req, res) => res.send('API Working'));

// Start server
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
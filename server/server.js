// import 'dotenv/config';
// import express from 'express';
// import cors from 'cors';
// import connectDB from './configs/mongodb.js';

// // App config 
// const PORT = process.env.PORT || 3000
// const app = express()
// await connectDB()

// //nit Middleware 
// app.use(express.json())
// app.use(cors())

// //API routes

// app.get('/', (req, res) => res.send("API Working"))
// app.listen(PORT, () => console.log("Server is running on port" + PORT))
import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import connectDB from './configs/mongodb.js';

const app = express();
app.use(express.json());
app.use(cors());

app.get('/', async (req, res) => {
    try {
        await connectDB();  // Ensure DB is connected
        res.status(200).json({ message: "API Working" });
    } catch (error) {
        res.status(500).json({ error: "Database connection error" });
    }
});

// Export for Vercel (NO `app.listen()`)
export default app;

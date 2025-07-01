import { configDotenv } from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

const app = express();
configDotenv(); // ✅ Load environment variables from .env file
mongoose.set('strictQuery', true); // ✅ Use strictQuery option

// ✅ No deprecated options used
mongoose.connect(process.env.MONGO,)
  .then(() => {
    console.log('✅ Connected to MongoDB');

    app.listen(3000, () => {
      console.log('🚀 Server is running on port 3000');
    });
  })
  .catch((err) => {
    console.error('❌ MongoDB connection error:', err);
  });

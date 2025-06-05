import app from './app.js';
import dotenv from 'dotenv';

// Configure dotenv to load environment variables from .env file
dotenv.config();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV || 'development'} mode on port ${PORT}`);
});
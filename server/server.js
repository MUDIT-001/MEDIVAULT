// server.js
const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors');

const connectDB = require('./config/db');
const authRoutes = require('./routes/authroutes.js');

dotenv.config();
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// DB Connection
connectDB();

// Routes
app.use('/api/auth', authRoutes);

app.use((req, res, next) => {
  console.log(`➡️ Incoming ${req.method} request to ${req.url}`);
  next();
});


// Server Listen
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});

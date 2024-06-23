require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const generateImageRouter = require('./routes/generateImage')


const app = express()

// middlewares
app.use(express.json())
app.use(cors())

// routes
// app.use('/', (req, res) => (
//     res.json({ message: 'Welcome to my API' })
// ))
app.use('/generate-image', generateImageRouter)
// CONNECT TO db
const DB_URL = process.env.DB_URI
const PORT = process.env.PORT || 4000

mongoose.connect(DB_URL)
  .then(() => app.listen(PORT, () => console.log(`Connected and running on: http://localhost:`, PORT)))
  .catch((error) => console.log(`Error:`, error.message))

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

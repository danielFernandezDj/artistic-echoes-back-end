const express = require('express')
const app = express();
const PORT = process.env.PORT || 4000;
const axios = require('axios')
require('dotenv').config()

// CONFIGURATION / MIDDLEWARE
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// Museum API
const MUSEUM_URL_BASE = axios.get('https://collectionapi.metmuseum.org/public/collection/v1/objects')

app.get('/', (req, res) => {
  res.send('Hello, you are in the main root. ')
})

app.listen(PORT, () => {
  try {
    console.log(`Server running at 🙊 🙉 🙈 http://localhost:${PORT}/`);
  } catch (error) {
    console.error(`The ${PORT} is not working 🙊 🙉 🙈, ${error}`)
  }
});

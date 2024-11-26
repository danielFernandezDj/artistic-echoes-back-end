const express = require('express');
const axios = require('axios')
const pLimit = require('p-limit')
require('dotenv').config()

const app = express();
const PORT = process.env.PORT || 4000;

const limit = pLimit(1)

// CONFIGURATION / MIDDLEWARE
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// Function to fetch data with rate limiting
async function fetchData() {
  const URL_BASE = ('https://collectionapi.metmuseum.org/public/collection/v1/objects')

  try {
    const response = await limit(() => axios.get(URL_BASE))
    return response.data
  } catch (error) {
    console.error('Error Fetching Data', error.message)
    return null
  }
}


// Root
app.get('/api', async (req, res) => {
  try {
    const data = await fetchData
    res.json(data)
  } catch (error) {
    console.error('Error fetching API data', error.message)
    res.status(500).send('Internal Server Error')
  }
})

app.listen(PORT, () => {
  console.log(`Server running at 🙊 🙉 🙈 http://localhost:${PORT}/`);
});

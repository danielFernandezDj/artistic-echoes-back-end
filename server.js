const express = require('express');
const axios = require('axios');
const pLimit = require('p-limit');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 4000;
const API_BASE_URL = "https://collectionapi.metmuseum.org/public/collection/v1/objects";
const RATE_LIMIT = 60; // Limit of 60 requests per second

const limit = pLimit(RATE_LIMIT);

// Filtering the Data to get only the one that have the word paper in 'medium'.
async function fetchObjectData(objectId) {
  try {
    const response = await axios.get(`${API_BASE_URL}/${objectId}`);
    const data = response.data;
    if (data.medium && data.medium.includes('paper')) {
      return {
        id: data.objectID,
        title: data.title || 'Unknown Title',
        image: data.primaryImage || 'No Image Available',
        medium: data.medium
      };
    }
  } catch (error) {
    console.error(`Error fetching object ${objectId}:`, error);
  }
  return null;
}

async function getPaper(objectIds) {
  const paperList = [];
  const promises = objectIds.map(objectId => limit(() => fetchObjectData(objectId)));
  const results = await Promise.all(promises);

  results.forEach(result => {
    if (result) {
      paperList.push(result);
    }
  });

  return paperList
}

app.get('/api/paper-list', async (req, res) => {
  try {
    const response = await axios.get(`${API_BASE_URL}?limit=1000`);
    const objectIds = response.data.objectIds;
    const paperList = await getPaperList(objectIds)
    res.json(paperList)
  } catch (error) {
    res.status(500).json({ error: 'Error fetching frescoes' })
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
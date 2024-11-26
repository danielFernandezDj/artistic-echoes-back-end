import express from "express"
const axios = require('axios');
const pLimit = require('p-limit');

const router = express.Router()


// Define routes
router.get('/api', (req, res) => {
  try {
    res.status(200).send('Start Routes Point')
  } catch (error) {
    console.error('Error fetching routs:', error.message)
    res.status(500).send('Internal server error')
  }
})



module.exports = router;
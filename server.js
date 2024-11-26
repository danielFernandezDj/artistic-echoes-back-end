const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;

// CONFIGURATION / MIDDLEWARE
require('dotenv').config()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// Root
app.get('/', (req, res) => {
  try {
    res.status(200).json({
      message: 'Welcome to the Tour API'
    })
  } catch (error) {
    console.error('Error to get:', error.message)
    res.status(500).send('Internal Server Error!')
  }
})

//  Download_Data Controller
// const downloadData = require('./controllers/download_data.js')
// app.use('/data', downloadData)

app.listen(PORT, () => {
  console.log(`Server running at 🙊 🙉 🙈 http://localhost:${PORT}/`);
});

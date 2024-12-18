const express = require('express')
const axios = require('axios')

const app = express()

// CONFIGURATION / MIDDLEWARE
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// Set pug has the view engine 
app.set('view engine', 'pug')
app.set('views', './views')

// Routs
app.get('/', (req, res) => {
  res.render('index')
})

module.exports = app
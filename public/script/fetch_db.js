const axios = require('axios')
require('dotenv').config()

const MUSEUM_URL_BASE = axios.get('https://collectionapi.metmuseum.org/public/collection/v1/objects')

async function FetchData() {
    const data = MUSEUM_URL_BASE
}
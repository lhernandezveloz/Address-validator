const axios = require('axios');

// axios instance to set config
const axiosInstance = axios.create({
    baseURL: process.env.API_URL,
    headers: {
        'Content-Type': 'application/json'
    }
});

module.exports = axiosInstance;;
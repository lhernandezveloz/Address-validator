#!/usr/bin/env node
require('dotenv').config();
const checkAddress = require('./utils/checkAddress');

// get the input from the console
const inputValue = process.argv[2];
console.log(inputValue);
checkAddress(inputValue);
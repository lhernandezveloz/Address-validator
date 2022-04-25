const fs = require('fs');
const validateAddress = require('../api/validateAddress');
const handleResponse = require('./handleResponse');

const checkAddress = async (file) => {
    // check if the file is .csv or no
    if (file?.endsWith('.csv')) {
        // read the .csv file
        let data = fs.readFileSync(file, 'utf-8').toLocaleString().split('\r\n');
        // remove the element last from data array
        data.pop();
        // remove the element first from data array
        data.shift();

        data.map(async (item) => {
            // sepate the address 
            const [address, city, zip] = item.split(',');
            // call the function to validate address
            const data = await validateAddress(address, city, zip);
            // print the final result
            console.log("tested");
            console.log(handleResponse(`${address}, ${city}, ${zip}`, data));
        });
    } else {
        // this use when the user type an address in the console
        const [address, city, zip] = file.split(',');
        // call the function to validate address
        const data = await validateAddress(address, city, zip);
        // print the final result
        console.log(handleResponse(file, data));
    }
}

module.exports = checkAddress;


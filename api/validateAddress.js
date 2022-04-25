
const axiosInstance = require('./axiosInstance');

// function that call the api endpoint to validate an address
const validateAddress = async (streetAddress, city, zipCode) => {
    // concatenate parameters
    const parameter = `StreetAddress=${streetAddress}&City=${city}&PostalCode=${zipCode}&CountryCode=us&Geocoding=true&APIKey=${process.env.API_KEY}`;
    return await axiosInstance.get(`/verify?${parameter}`).then(res => {
        return res.data;
    }).catch(error => {
        // Handle error when happend
        console.log('error', error);
        return error.error;
    });
}

module.exports = validateAddress;
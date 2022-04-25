const axiosInstance = require('./axiosInstance');
const validateAddress = require('./validateAddress');
const { suspectAddress, failAddress, successAddress } = require('../testData');
require('dotenv').config();

jest.mock('./axiosInstance');

test('test a valid address', async () => {
    axiosInstance.get.mockResolvedValue(successAddress);
    return await validateAddress("7007 Pondhawk Dr", "Katy", "77493").then(data => {
        return expect(data).toEqual(successAddress.data)
    });
});

test('test an invalid address', async () => {
    axiosInstance.get.mockResolvedValue(failAddress);
    return await validateAddress("7007 Pondhawkrr", "44322").then(data => {
        return expect(data).toEqual(failAddress.data)
    });
});

test('test a suspect address', async () => {
    axiosInstance.get.mockResolvedValue(suspectAddress);
    return await validateAddress("7007 Pondhawk", "77493").then(data => {
        return expect(data).toEqual(suspectAddress.data)
    });
});



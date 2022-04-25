const axiosInstance = require('../api/axiosInstance');
const checkAddress = require('./checkAddress');
const { successAddress } = require('../testData');
require('dotenv').config();

jest.mock('../api/axiosInstance');

test('test a sigle address', async () => {
    axiosInstance.get.mockResolvedValue(successAddress);
    console.log = jest.fn();
    await checkAddress("7007 pondhawk Dr, Katy, 77493");
    expect(console.log).toHaveBeenLastCalledWith('7007 pondhawk Dr, Katy, 77493 -> 7007 Pondhawk Dr, Katy, 77493-3929');
});

test('test a csv of address', async () => {
    axiosInstance.get.mockResolvedValue(successAddress);
    const logSpy = jest.spyOn(console, 'log');
    await checkAddress("./Addresses.csv");
    expect(logSpy).toHaveBeenCalledWith('7007 pondhawk Dr, Katy, 77493 -> 7007 Pondhawk Dr, Katy, 77493-3929');
});
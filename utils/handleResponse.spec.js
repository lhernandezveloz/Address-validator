const handleResponse = require('./handleResponse');
require('dotenv').config();
const { successAddress, failAddress, suspectAddress } = require('../testData');

test('test a valid formatted response', async () => {
    const response = handleResponse("7007 Pondhawk, 77493", successAddress.data);
    return expect(response).toEqual("7007 Pondhawk, 77493 -> 7007 Pondhawk Dr, Katy, 77493-3929");
});

test('test a fail formatted response', async () => {
    const response = handleResponse("7007 Pondhawkrr, 44322", failAddress.data);
    return expect(response).toEqual("7007 Pondhawkrr, 44322 -> Invalid Address");
});

test('test a suspec formatted response', async () => {
    const response = handleResponse("7007 Pondhawk, 77493", suspectAddress.data);
    return expect(response).toEqual("7007 Pondhawk, 77493 -> Suspect Address: 7007 Pondhawk Dr, Katy, 77493-3929");
});
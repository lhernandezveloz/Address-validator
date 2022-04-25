// this function return the value that will be printed in the console base on the api response
const handleResponse = (orginalInput, { status, addressline1, city, postalcode }) => {
    switch (status) {
        case "VALID":
            return `${orginalInput} -> ${addressline1}, ${city}, ${postalcode}`;
        case "INVALID":
            return `${orginalInput} -> Invalid Address`;
        case "SUSPECT":
            return `${orginalInput} -> Suspect Address: ${addressline1}, ${city}, ${postalcode}`;
        default:
            return `Something went wrong: ${status}`;
    }
}

module.exports = handleResponse;
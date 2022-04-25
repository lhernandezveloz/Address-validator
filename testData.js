const successAddress = {
    data: {
        "status": "VALID",
        "ratelimit_remain": 99,
        "ratelimit_seconds": 300,
        "cost": 1.5,
        "formattedaddress": "7007 Pondhawk Dr,Katy TX 77493-3929",
        "addressline1": "7007 Pondhawk Dr",
        "addresslinelast": "Katy TX 77493-3929",
        "street": "Pondhawk Dr",
        "streetnumber": "7007",
        "postalcode": "77493-3929",
        "city": "Katy",
        "state": "TX",
        "country": "US",
        "county": "Harris",
        "diagnostics": "ward",
        "rdi": "R",
        "type": "S",
        "latitude": 29.839960,
        "longitude": -95.869180
    }
}

const failAddress = {
    data: {
        "status": "INVALID",
        "ratelimit_remain": 96,
        "ratelimit_seconds": 198,
        "cost": 1.5,
        "formattedaddress": "7007 Pondhawkrr Dr,\"\" 77493",
        "addressline1": "7007 Pondhawkrr Dr",
        "addresslinelast": "\"\" 77493",
        "street": "Pondhawkrr Dr",
        "streetnumber": "7007",
        "supplement": "77493",
        "country": "US",
        "diagnostics": "pcod city bldg"
    }
};

const suspectAddress = {
    data: {
        "status": "SUSPECT",
        "ratelimit_remain": 99,
        "ratelimit_seconds": 299,
        "cost": 1.5,
        "formattedaddress": "7007 Pondhawk Dr,Katy TX 77493-3929",
        "addressline1": "7007 Pondhawk Dr",
        "addresslinelast": "Katy TX 77493-3929",
        "street": "Pondhawk Dr",
        "streetnumber": "7007",
        "postalcode": "77493-3929",
        "city": "Katy",
        "state": "TX",
        "country": "US",
        "county": "Harris",
        "diagnostics": "ward city",
        "rdi": "R",
        "type": "S",
        "latitude": 29.839960,
        "longitude": -95.869180
    }
}



module.exports = {
    suspectAddress,
    failAddress,
    successAddress
};
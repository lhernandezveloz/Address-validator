# Address Validator App

Let's get the App ready to Run

1. Make sure that you have node js installed in your computer:
    Chek if you have it running: ```node -v```
    - No I don't have it: Go to:
    ```bash
    https://nodejs.org/en/download/
    ```
    - Yes I have it: Move to step 2

2. Let's setup the app:
    - Open your terminal/command prompt.
    - Move to ```address-validator``` directory.
    - Run ```npm install``` to install all the dependecies.

3. Api key setup:
    - Go to ```https://www.address-validator.net/``` and get your api key.
    - Open the .env file.
    - Replace ```PASTE_YOUR_API_KEY_HERE``` for your api key and save it.

4. How run the app:
    * Validating a single address:
        - Run: ```npm run start "addres, city, zip code"```
        - Example: ```npm run start "21540 provincial blvd, katy, 77450"```
    * Validatind a list of address from a csv file:
        - Run: ```npm run start FILE_PATH```
        - Example: ```npm run start ./Addresses.csv```

5. Run Tests:
    - Run: ```npm run test```

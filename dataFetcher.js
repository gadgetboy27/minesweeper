
const axios = require('axios');

// Fetch historical data using asciichart
async function fetchHistoricalData() {
    try {
        const symbol = 'bitcoin';
        const currency = 'usd';
        const days = 30;
        const interval = 'daily';

        const apiUrl = `https://api.coingecko.com/api/v3/coins/${symbol}/market_chart?vs_currency=${currency}&days=${days}&interval=${interval}`;
        const response = await axios.get(apiUrl);

        if (response.status === 200) {
            const historicalData = response.data.prices;
            console.log('Historical Data01:', historicalData);
            return historicalData;
        } else {
            console.error('Error fetching data:', response.statusText);
            return null;
        }
    } catch (error) {
        console.error('Error:', error.message);
        return null;
    }
}

// Call the fetchHistoricalData function
module.exports = { fetchHistoricalData };

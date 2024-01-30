// dataFetcher.js

const axios = require('axios');

async function fetchHistoricalData(symbol, currency, days) {
    const apiUrl = `https://api.coingecko.com/api/v3/coins/${symbol}/market_chart?vs_currency=${currency}&days=${days}`;

    try {
        const response = await axios.get(apiUrl);
        const data = response.data;
        const historicalData = data.prices.map(entry => entry[1]);
        return historicalData;
    } catch (error) {
        console.error('Error fetching data:', error);
        return null;
    }
}

// Export the function to be used in other files
module.exports = { fetchHistoricalData };

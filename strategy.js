const axios = require('axios');
const { fetchHistoricalData } = require('./dataFetcher.js');
const asciichart = require('asciichart');

// Example function to calculate MVRV Z-score
async function calculateRisk() {
    try {
        // Obtain market capitalization (replace with actual API endpoint)
        const marketCapResponse = await axios.get('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd&include_market_cap=true');
        const marketCap = await marketCapResponse.data.bitcoin.usd;
        // Obtain realized value (replace with actual API endpoint)
        // const realizedValueResponse = await fetch('https://api.example.com/realized-value');
        // const realizedValueData = await realizedValueResponse.json();
        // const realizedValue = realizedValueData.value;
        // As of June 2023 cost to mine 1BTC = CapEx + electricity + other OpEx per Bitcoin = $14,300 + $10,200 + $2,000 = $26,500
        const realizedValue = (26500) // As of June 2023 and fixed pricing for electricity of $0.05c/kWh
        // Calculate MVRV Z-score
        const mvrvZScore = (marketCap - realizedValue) / marketCap;

        // Log the result
        console.log('marketCap', marketCap);
        console.log('realizedValue:', realizedValue);
        console.log('mvrvZScore:', mvrvZScore);
        // Update the content of the HTML elements

        return mvrvZScore;
    } catch (error) {
        console.error('Error:', error);
        return null;
    }
}

// Sample function to execute the trading strategy based on calculated risk
async function executeStrategy() {
    try {
        // Calculate risk based on historical data
    const risk = await calculateRisk();
    const x = 100; // Example: Buy amount per DCA interval
    const y = 1 / 10; // Example: Sell 1/10th total BTC held by the user

    if (risk >= 0 && risk < 0.1) {
        console.log(`Buy 5x: Risk is ${risk}`);
        // Implement your buy logic here
    } else if (risk >= 0.1 && risk < 0.2) {
        console.log(`Buy 4x: Risk is ${risk}`);
        // Implement your buy logic here
    } else if (risk >= 0.2 && risk < 0.3) {
        console.log(`Buy 3x: Risk is ${risk}`);
        // Implement your buy logic here
    } else if (risk >= 0.3 && risk < 0.4) {
        console.log(`Buy 2x: Risk is ${risk}`);
        // Implement your buy logic here
    } else if (risk >= 0.4 && risk < 0.5) {
        console.log(`Buy ${x}: Risk is ${risk}`);
        // Implement your buy logic here
    } else if (risk >= 0.5 && risk < 0.6) {
        console.log(`Do nothing: Risk is ${risk}`);
        // Implement your do nothing logic here
    } else if (risk >= 0.6 && risk < 0.7) {
        console.log(`Sell ${y}: Risk is ${risk}`);
        // Implement your sell logic here
    } else if (risk >= 0.7 && risk < 0.8) {
        console.log(`Sell 2y: Risk is ${risk}`);
        // Implement your sell logic here
    } else if (risk >= 0.8 && risk < 0.9) {
        console.log(`Sell 3y: Risk is ${risk}`);
        // Implement your sell logic here
    } else if (risk >= 0.9 && risk <= 1.0) {
        console.log(`Sell 4y: Risk is ${risk}`);
        // Implement your sell logic here
    }
    } catch (error) {
        console.error('Error:', error);
    }
}

executeStrategy()

// Fetch historical data using asciichart
async function main() {
    try {
        const historicalData = fetchHistoricalData;
            
        if (historicalData) {
        console.log('Historical Data', historicalData);
        
        calculateRisk(historicalData);
        executeStrategy(currentRisk);
        }
    } catch (error) {
        console.error('Error:', error.message);
        return null;
    }
}

// Call the fetchHistoricalData function
main();


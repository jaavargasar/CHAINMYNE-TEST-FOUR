// populateDatabase.js

const mongoose = require('mongoose');
const CryptocurrencyPrice = require('../models/cryptocurrencyPrice');

const seedData = [
    {
        symbol: 'BTC',
        name: 'Bitcoin',
        date: new Date('2024-09-01'),
        price: {
            open: Math.random() * (30000 - 25000) + 25000, // Random value between 25000 and 30000
            high: Math.random() * (31000 - 27000) + 27000, // Random value between 27000 and 31000
            low: Math.random() * (25000 - 22000) + 22000, // Random value between 22000 and 25000
            close: Math.random() * (29000 - 26000) + 26000, // Random value between 26000 and 29000
        },
        volume: Math.floor(Math.random() * (2000000 - 1000000) + 1000000), // Random volume between 1000000 and 2000000
        market_cap: Math.floor(
            Math.random() * (600000000000 - 400000000000) + 400000000000
        ), // Random market cap between 400000000000 and 600000000000
    },
    {
        symbol: 'ETH',
        name: 'Ethereum',
        date: new Date('2024-09-01'),
        price: {
            open: Math.random() * (2000 - 1500) + 1500, // Random value between 1500 and 2000
            high: Math.random() * (2100 - 1600) + 1600, // Random value between 1600 and 2100
            low: Math.random() * (1500 - 1300) + 1300, // Random value between 1300 and 1500
            close: Math.random() * (1900 - 1600) + 1600, // Random value between 1600 and 1900
        },
        volume: Math.floor(Math.random() * (1500000 - 800000) + 800000), // Random volume between 800000 and 1500000
        market_cap: Math.floor(
            Math.random() * (250000000000 - 150000000000) + 150000000000
        ), // Random market cap between 150000000000 and 250000000000
    },
    {
        symbol: 'ADA',
        name: 'Cardano',
        date: new Date('2024-09-01'),
        price: {
            open: Math.random() * (0.6 - 0.4) + 0.4, // Random value between 0.40 and 0.60
            high: Math.random() * (0.65 - 0.45) + 0.45, // Random value between 0.45 and 0.65
            low: Math.random() * (0.4 - 0.35) + 0.35, // Random value between 0.35 and 0.40
            close: Math.random() * (0.6 - 0.45) + 0.45, // Random value between 0.45 and 0.60
        },
        volume: Math.floor(Math.random() * (600000 - 300000) + 300000), // Random volume between 300000 and 600000
        market_cap: Math.floor(
            Math.random() * (30000000000 - 10000000000) + 10000000000
        ), // Random market cap between 10000000000 and 30000000000
    },
    {
        symbol: 'SOL',
        name: 'Solana',
        date: new Date('2024-09-01'),
        price: {
            open: Math.random() * (60 - 40) + 40, // Random value between 40 and 60
            high: Math.random() * (70 - 45) + 45, // Random value between 45 and 70
            low: Math.random() * (40 - 30) + 30, // Random value between 30 and 40
            close: Math.random() * (65 - 45) + 45, // Random value between 45 and 65
        },
        volume: Math.floor(Math.random() * (800000 - 400000) + 400000), // Random volume between 400000 and 800000
        market_cap: Math.floor(
            Math.random() * (80000000000 - 40000000000) + 40000000000
        ), // Random market cap between 40000000000 and 80000000000
    },
    {
        symbol: 'DOT',
        name: 'Polkadot',
        date: new Date('2024-09-01'),
        price: {
            open: Math.random() * (10 - 8) + 8, // Random value between 8 and 10
            high: Math.random() * (12 - 9) + 9, // Random value between 9 and 12
            low: Math.random() * (8 - 7) + 7, // Random value between 7 and 8
            close: Math.random() * (11 - 9) + 9, // Random value between 9 and 11
        },
        volume: Math.floor(Math.random() * (400000 - 200000) + 200000), // Random volume between 200000 and 400000
        market_cap: Math.floor(
            Math.random() * (20000000000 - 10000000000) + 10000000000
        ), // Random market cap between 10000000000 and 20000000000
    },
];

const DATABASE_URL = 'mongodb://localhost:27017/cryptocurrency_db';

async function populateDatabase() {
    try {
        await mongoose.connect(DATABASE_URL);

        console.log('Connected to MongoDB');

        // Clear existing data
        await CryptocurrencyPrice.deleteMany({});

        console.log('Existing data cleared');

        // Insert sample data
        await CryptocurrencyPrice.insertMany(seedData);

        console.log('Seed data inserted');

        await mongoose.disconnect();
    } catch (error) {
        console.error('Error populating database:', error);
    }
}

populateDatabase();

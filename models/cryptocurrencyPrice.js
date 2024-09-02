const mongoose = require('mongoose');

const priceSchema = new mongoose.Schema(
    {
        open: { type: Number, required: true },
        high: { type: Number, required: true },
        low: { type: Number, required: true },
        close: { type: Number, required: true },
    },
    { _id: false }
);

const cryptocurrencyPriceSchema = new mongoose.Schema({
    symbol: { type: String, required: true },
    name: { type: String, required: true },
    date: { type: Date, required: true },
    price: { type: priceSchema, required: true },
    volume: { type: Number, required: true },
    market_cap: { type: Number, required: true },
});

// Create an index on symbol and date for efficient querying
cryptocurrencyPriceSchema.index({ symbol: 1, date: -1 });
cryptocurrencyPriceSchema.index({ date: -1 });

const CryptocurrencyPrice = mongoose.model(
    'CryptocurrencyPrice',
    cryptocurrencyPriceSchema
);

module.exports = CryptocurrencyPrice;

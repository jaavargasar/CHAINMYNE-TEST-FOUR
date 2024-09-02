const mongoose = require('mongoose');
const dbDebugger = require('debug')('app:db');

const connectDatabase = async () => {
    try {
        console.log('Trying to connect');
        await mongoose.connect('mongodb://localhost/cryptocurrency_db'); // It goes to settings config
        console.log('Connected to Mongodb');
    } catch (error) {
        console.log('Database is not been set yet', error);
    }
};

module.exports = {
    connectDatabase,
};

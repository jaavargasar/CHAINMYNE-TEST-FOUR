const express = require('express');
const helmet = require('helmet');

const app = express();
const { connectDatabase } = require('./middleware/mongoConnection');

app.use(express.json());

//Database
connectDatabase();

// PORT
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port} ...`));

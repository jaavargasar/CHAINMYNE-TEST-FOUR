This application was built with Node Js as the engine and Express Js as the framework:

Node version: 20.15.1
Npm version: 10.7.0

I use the library called Mongoose to be able to connect with the mongo database. So if we are building a restful api, Mongoose would allow us to store and query information so easily.

Inside the folder middleware is the code how we connect to the database

Database name: cryptocurrency_db

Inside the folder Migration there is a script called populateDatabase.js. There you can find the seed data and how we insert the first values into the database.

Inside the folder models you can find the schema how I am building the historical cryptocurrency price data. I create two schemas One is called priceSchema which has the prices values and cryptoCurrencyPriceSchema who has the whole object information. priceSchema is embedded inside cryptocurrencyPriceSchema. That means when we do queries it would be easily for us to retrieve the whole information, so it will be fast. The cons about this is that we will spend more memory when storing data into the database.

Before everything please check and verify that you have mongo server in your computer and that actually is running

To run the server type the following command in your console terminal

For windows: mongod
For MAC: mongodb

And check that actually it runs well without issues

To be able to run this project please do this

npm install

To get the dependencies and then do

node index.js
OR
node .\index.js

To run the application If you would like just to see if you have a good connection with the database. the database name is cryptocurrency_db and if it does not exists yet it will be created as the first time.

Additionally to be able to populate the database please go inside the folder migrations and run the script like

node populateDatabase.js
OR
node .\populateDatabase.js

This will insert the seedData into the database.

I use the client called MongoDBCompass to be able to see the databases, the information inserted. You can use this or other third party

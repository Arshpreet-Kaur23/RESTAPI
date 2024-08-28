require('dotenv').config();
const connectDB = require('./db/connect');
const Product = require('./models/product');
const ProductJson = require('./products.json');

const start = async () => {
    try {
        await connectDB(process.env.MONGODB_URL);
        console.log("Connected to DB");

        // Insert the product data into the database
        await Product.insertMany(ProductJson);
        console.log("Products inserted successfully");

        process.exit(0); // Exit the process with success code
    } catch (error) {
        console.error(error);
        process.exit(1); // Exit the process with a failure code
    }
};

start();

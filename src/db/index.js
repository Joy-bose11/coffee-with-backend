const mongoose = require("mongoose");
const { DB_NAME } = require("../constants");
require("colors");
require("dotenv").config();

const connectDB = async () => {
  try {
    await await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    console.log("Connected to MongoDB".bgGreen);
  } catch (error) {
    console.error(`Error connection to MongoDB: ${error.message}`.bgRed);
    process.exit(1)
  }
};

module.exports = connectDB;

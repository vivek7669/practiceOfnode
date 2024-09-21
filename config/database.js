require("dotenv").config();
const mongoose = require("mongoose");

const dbConnector = async () => {
  try {
    let db = await mongoose.connect(process.env.DATABASE_URL);
    if (db) {
      console.log("DataBase Is Connected.");
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = dbConnector;

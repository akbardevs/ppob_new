const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');
const dbLocal = config.get('mongoURILocal');
const connectDB = async () => {
  try {
    await mongoose.connect(
        dbLocal,

      {
        useNewUrlParser: true,
        useUnifiedTopology: true
      }
    );

    console.log('MongoDB is Connected...');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
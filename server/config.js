const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  mongoURI: process.env.MONGO_URI,
  port: process.env.PORT || 5000,
};

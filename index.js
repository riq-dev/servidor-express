const dotenv = require('dotenv');

const connecToDatabase = require('./src/database/connect.js');

dotenv.config();

connecToDatabase();
require("./modules/express")
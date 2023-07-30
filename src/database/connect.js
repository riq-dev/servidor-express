const mongoose = require('mongoose');

const connectToDatabase = async () => {
    try {
        await mongoose.connect(
            `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@cluster0.imyebvm.mongodb.net/`, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connected to the database!');
    } catch (error) {
        console.error('Error connecting to the database:', error);
    }
}

module.exports = connectToDatabase;
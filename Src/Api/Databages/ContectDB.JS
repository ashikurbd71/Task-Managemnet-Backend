const mongoose = require('mongoose');
// require('dotenv').config();

const connectURL = () => {
    const uri = "mongodb+srv://taskmanager:taskmanager123@cluster0.mtnypra.mongodb.net/?retryWrites=true&w=majority";

    return uri;
}


// ? here is the connection of mongodb bro yo yo
const connectDB = async () => {

    console.log('db is connecting...')

    const uri = connectURL();
    await mongoose.connect(uri, { dbName: 'tast-managementDB' });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");

}

module.exports = connectDB;
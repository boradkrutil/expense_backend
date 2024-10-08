const mongoose = require('mongoose');

const mongo_url = process.env.MONGO_CONN;

const Connection = async() =>{
    try {
        await mongoose.connect(process.env.MONGO_CONN)
        console.log('MongoDB Connected...');
    } catch (error) {
        console.log('MongoDB Connection Error: ', error);
    }
}

module.exports = Connection;

// mongoose.connect(mongo_url)
//     .then(() => {
//         console.log('MongoDB Connected...');
//     }).catch((err) => {
//         console.log('MongoDB Connection Error: ', err);
//     })
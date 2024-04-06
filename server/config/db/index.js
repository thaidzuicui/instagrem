const mongoose = require('mongoose')

require('dotenv').config()
const mongoUri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_USERNAME}.9ftudqn.mongodb.net/instagrem?retryWrites=true&w=majority&appName=${process.env.DB_USERNAME}`

async function connect() {
    try {
        mongoose.set('strictQuery', false)
        await mongoose.connect(mongoUri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB Connected ... :')
    } catch (error) {
        console.log(`Connect failure !!!\n${error.message}`)
    }
}

module.exports = { connect };

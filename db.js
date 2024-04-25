const mongoose = require('mongoose')

const dbUri = 'mongodb+srv://admin:RakkXoCnoZQ6z5Ea@cluster1.cxkoaxs.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1'

module.exports = () => {
    return mongoose.connect(dbUri)
}


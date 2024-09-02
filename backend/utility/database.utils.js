const mongoose = require('mongoose')

async function mongooseConnection (){
 await mongoose.connect(process.env.MONGO_URL)
        .then(() => {
            console.log("Connected successfully")
        })
        .catch((err) => {
            console.log("Something went wrong",err)

        })
}
module.exports = mongooseConnection
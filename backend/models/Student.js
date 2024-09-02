const mongoose = require('mongoose')
const StudentSchema = new mongoose.Schema({
    name: {
        type:String
    },
    contact_number : {
        type: String
    },
    email: {
        type: String
    },
    course : {
        type:String
    }
})

const Student = mongoose.model("Student", StudentSchema)

module.exports = Student
const Student = require("../models/Student")
async function addStudent(req, res) {
    const reqBody = req.body

    const student = await Student.create(reqBody)

    return res.status(201).json({
        hasError: false,
        student
    })

}

async function getAllstudent(req, res) {
    const student = await Student.find()

    return res.status(200).json(student)
}

async function filterStudent(req, res) {
    if (req.params.name) {
        const name = req.params.name
        const student = await Student.find({ name: name })

        if (student) {
            return res.status(200).json(    student
                
            )
        }
        else {
            return res.status(404).json({
                message: "Student not found"
            })
        }
    }
}

module.exports = {
    addStudent,
    getAllstudent,
    filterStudent
}
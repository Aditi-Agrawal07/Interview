const express = require("express")
const { addStudent,getAllstudent , filterStudent} = require("../controllers/student.controller")
const router = express.Router()

router.post("/addStudent", addStudent)

router.get("/getStudent", getAllstudent)

router.get("/filter/:name", filterStudent)

module.exports = router
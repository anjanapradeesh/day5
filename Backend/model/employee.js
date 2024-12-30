const mongoose = require("mongoose")
var schema = mongoose.Schema({         // ivide function aan athond maathram schema capital aan
    Name: String,
    Age: Number,
    Dept: String,
    Sal: Number
})
var employeemodel = mongoose.model("employee", schema)  //employee is model name
module.exports = employeemodel   // exporting the model

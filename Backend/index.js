//1.import express
const express = require('express')
require("./connection")
var empmodel = require("./model/employee")
var cors = require('cors')

//2.initialize
const app = express()

//middleware
app.use(express.json())
app.use(cors())


//3.Api creation
app.get('/', (req, res) => { 
    res.send("Hello World")
})

app.get('/trial', (req, res) => {
    res.send("This is a trial message")
})

//add api
app.post("/add", async (req, res) => {
    try {
        await empmodel(req.body).save()
        res.send({ message:"data added"})
    } catch (error) {
        console.log(error)
    }
})
 
app.get("/view", async (req, res) => {
    try {
        var data =await empmodel.find()
        res.send( data )
    } catch (error) {
        console.log(error)

    }
})

app.delete("/remove/:id", async (req, res) => {
    try {
        await empmodel.findByIdAndDelete(req.params.id)
        res.send({message:"data deleted"})
    } catch (error) {
        console.log(error)
        
    }
})

app.put("/update/:id", async (req, res) => {
    try {
        await empmodel.findByIdAndUpdate(req.params.id,req.body)
        res.send({ message: "data updated" })
    } catch (error) {
        console.log(error)

    }
})

//4.Port setting
app.listen(3004, () => {
    console.log("server is running on port 3004")
})
 
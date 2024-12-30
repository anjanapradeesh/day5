const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://anjanapradeesh:anjanamongo123@cluster0.93gov.mongodb.net/providence?retryWrites=true&w=majority&appName=Cluster0")
    .then(
        () => {
            console.log("Connected to MongoDB")
        })
    .catch((err)=> {
    console.log(err)
    })
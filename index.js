const express = require('express')
const app = express()
const mongoose = require('mongoose')

//database create work - design model imported...
const registrationModel = require('./models/registrationModel')

// middleware to convert all strings into objects/json
app.use(express.json())

// Database connection code...
mongoose.connect('mongodb+srv://shahin_db_user:BaoxjkvRUjnlT6DW@clustershahin.nicn5ni.mongodb.net/?appName=ClusterShahin').then(() => {
    console.log('Database Connected');

})

// database create work starts...
app.post('/registration', async (req, res) => {
    // frontend er value aner process...req.body
    const { myname, myemail, mypassword } = req.body
    const userData = new registrationModel({
        username: myname,
        email: myemail,
        password: mypassword,
    })
    // database e save korar jonno...
    userData.save();

    res.send(userData)

})

app.listen(5000, () => {
    console.log('server running');

})

// database e save korar jonno... variableName.save()
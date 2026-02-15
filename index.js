const express = require('express')
const app = express()
const mongoose = require('mongoose')

app.use(express.json())

mongoose.connect('mongodb+srv://shahin_db_user:BaoxjkvRUjnlT6DW@clustershahin.nicn5ni.mongodb.net/?appName=ClusterShahin').then(() => {
    console.log('Database Connected');

})

app.post('/reg', (req, res) => {
    console.log(req.body);

})

app.listen(5000, () => {
    console.log('server running');

})


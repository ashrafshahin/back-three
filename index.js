const express = require('express')
const app = express()

app.use(express.json())

app.post('/reg', (req, res) => {
    console.log(req.body);
    
})

app.listen(5000, () => {
    console.log('server running');
    
})
const { mongoose } = require('mongoose')
// const { Schema } = mongoose
// best practice to write
const { Schema } = mongoose.Schema()


const registrationModel = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    // list: [{
    //     type: String,
    // }],
    // // list e object akare thakte pare
    // list: [{
    //     studentName: String,
    //     studentAddress: String,
    // }]
})

module.exports = mongoose.model("User", registrationModel)


// its an object, .schema k destructure kore upore likha hoise mongoose.Schema()

// here 'User' will give you new Collection in your Database...
// Model will tell the Data collection Scheme or Design / format / pattern of the data to Database... 
// DB Schema is a high confiqured Security as well... 

// please note..
// Schema in capital, is a constructor... it must be {Schema}
// TypeError: mongoose.Shahin is not a constructor
// TypeError: mongoose.schema is not a constructor
const { mongoose } = require('mongoose');

const ContactSchema =new mongoose.Schema(
    {
        name:{
            type:String,
            required:true
        },
        email:{
            type:String,
            require:true
        },
        mobile:{
            type:String,
            require:true
        },
        city:{
            type:String,
            require
        }       
    }
)

const contact=new mongoose.model("contacts",ContactSchema)
module.exports=contact;
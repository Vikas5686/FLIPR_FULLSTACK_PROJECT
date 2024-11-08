const { mongoose } = require('mongoose');

const EmailSchema =new mongoose.Schema(
    {
      
        email:{
            type:String,
            require:true
        }    
    }
)

const email=new mongoose.model("Emails",EmailSchema)
module.exports=email;
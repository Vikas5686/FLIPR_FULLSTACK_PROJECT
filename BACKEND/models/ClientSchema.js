const { mongoose } = require('mongoose');

const ClientSchema =new mongoose.Schema(
    {
        name:{
            type:String,
            required:true
        },
        image:{
            type:String,
            require:true
        },
        discription:{
            type:String,
            require:true
        },
        desiganation:{
            type:String,
            require
        }       
    }
)

const CLIENT=new mongoose.model("happyclient",ClientSchema)
module.exports=CLIENT;
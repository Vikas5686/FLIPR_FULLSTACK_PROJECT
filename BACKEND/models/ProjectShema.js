const { mongoose } = require('mongoose');

const ProjectShema=new mongoose.Schema(
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
        readmore:{
            type:String,
            require
        }       
    }
)

const OUR_PROJECT=new mongoose.model("OUR_PROJECTS",ProjectShema)
module.exports=OUR_PROJECT;
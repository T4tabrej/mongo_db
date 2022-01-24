const mongoose=require("mongoose")
// console.log(mongoose);
mongoose.connect("mongodb://localhost:27017/demo1").then(()=>{
    console.log("connected....");
}).catch((err)=>{
    console.log(err);
})
//for declaring the schema
const playListSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    ctype:String,
    videos:Number,
    active:Boolean,

    date:{
        type:Date,
        default:Date.now
    }
})

// collection creation with the help of schema and modal class 
// const className=new mongoose.model("collection name in singular",schema name);
const playList=new mongoose.model("playlist",playListSchema);
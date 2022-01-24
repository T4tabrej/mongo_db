const mongoose=require("mongoose")
// console.log(mongoose);
mongoose.connect("mongodb://localhost:27017/demo1").then(()=>{
    console.log("connected....");
}).catch((err)=>{
    console.log(err);
})
//for declaring the schema
const studentSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    phone_no:String,
    std:Number,
    active:Boolean,

    date:{
        type:Date,
        default:Date.now
    }
})

const student=new mongoose.model("student",studentSchema)
// in this method we actually dont know wheather data is inserted or not so we can use assync function to see the result
// now inserting multiple data at student scema using model class student
/*
const studentList=new student({
    name:"glrej",
    phone_no:"9204667729",
    std:10,
    active:true
})


studentList.save();//returns a promise  so we can use assync function to see the result
console.log("Data inserted....");*/
const createDocument=async ()=>{
    try {
        const studentList0=new student({
            name:"yusa",
            phone_no:"9204667729",
            std:10,
            active:true
        })
        const studentList1=new student({
            name:"zaid",
            phone_no:"9204667729",
            std:12,
            active:true
        })
        const studentList2=new student({
            name:"arslan",
            phone_no:"9204667729",
            std:10,
            active:true
        })
        const studentList3=new student({
            name:"naira",
            phone_no:"9204667729",
            std:11,
            active:true
        })

        // const res=await studentList.save();for single data
        const res=await student.insertMany([studentList0,studentList1,studentList2,studentList3]);//insert many data at once
        console.log(res);
    } catch (error) {
        console.log(error);
    }
}

//if we want to insert more data then we will call this function
createDocument();


// for delete the data from database
const deleteData=async()=>{
    try {
        // const res=await student.deleteMany({ std: 10 })//delete all document with std:10
        // const res=await student.deleteOne({ std: 10 })//delete only one document with std:10
        const res=await student.deleteMany({})//delete all document 

        console.log(res);
        
    } catch (error) {
        console.log(error);
    }
}
// calling the function
    // deleteData()



    // for updata the data 

const updatData=async ()=>{
    try {
        // const res=await student.updateOne({name:"yusa"},{$set:{std:12}})//update the std of yusa

          /*    const res=await student.updateMany({active:{$eq:true}},   //for updateMany data at a time
            {std:9}
            )*/

         /*   const res=await student.replaceOne({name:"rounaque"},  //it replace the data
            {
                name:"rameez",
                marks:90
             
            })*/

        console.log(res);
    } catch (error) {
        console.log(error);
    }
    
}

    // updatData();



// for read data from database


const readData=async ()=>{
  try {
        // const res=await student.find(); if we want to print a all data
   const res=await student
   .find()
//    .find({name:{$in:["yusa","arslan"]}})//print the values from databse if name contains yusa or arslan  .find({name:{$nin:["yusa","arslan"]}})print all the data except of these two
//    .find({active:true})
    // .find({std:{$gt:10}})//it will  show only the name of std gretaerthan 10 {{$gte}} for greater than equalto {{$lte}} for less than equalto
   .select({name:1})//it will shows all the name which is active:true
   //.limit(1)//it will set the limit of data from top 
//    .count()
     .sort({name:1})//it will sort the data from asc to desc order
    console.log(res);
      
  } catch (error) {
      console.log(error);
  }
}

// calling the function

readData();
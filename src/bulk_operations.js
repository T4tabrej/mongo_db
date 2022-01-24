const mongoose=require("mongoose")

mongoose.connect("mongodb://localhost:27017/demo1").then(()=>{
console.log("Connected");
}).catch((err)=>{
console.log(err);
})
const collection="info_data"

const bulk_acton=async ()=>{
    try {
        collection.characters.bulkWrite(
           [
              { insertOne :
                 {
                    "document" :
                    {
                       "_id" : 4, "char" : "Dithras", "class" : "barbarian", "lvl" : 4
                    }
                 }
              },
              { insertOne :
                 {
                    "document" :
                    {
                       "_id" : 5, "char" : "Taeln", "class" : "fighter", "lvl" : 3
                    }
                 }
              },
              { updateOne :
                 {
                    "filter" : { "char" : "Eldon" },
                    "update" : { $set : { "status" : "Critical Injury" } }
                 }
              },
              { deleteOne :
                 { "filter" : { "char" : "Brisbane" } }
              },
              { replaceOne :
                 {
                    "filter" : { "char" : "Meldane" },
                    "replacement" : { "char" : "Tanys", "class" : "oracle", "lvl" : 4 }
                 }
              }
           ]
        );
     }
     catch (e) {
        console.log(e);
     }
}






// bulk_acton()
const mongoose = require ("mongoose");
const Listing = require("../models/listings.js");
const initdata= require ("./data.js");


const MONGO_URL ="mongodb://127.0.0.1:27017/suhana_safar";
main().then(()=>{
        console.log("connection is successful");
})
.catch(err => console.log(err));
async function main(){
    await mongoose.connect(MONGO_URL);
}

const initDB = async () =>{
    await Listing.deleteMany({});
    await Listing.insertMany(initdata.data);
    console.log("data was saved");
}

initDB();
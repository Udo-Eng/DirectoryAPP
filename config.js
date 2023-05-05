const mongoose = require('mongoose');


function connectToDataBase(){

    let dbUrl;
    dbUrl =  process.env.mongoAltas;
    // if(process.env.NODE_ENV === "production"){
    //    dbUrl =  process.env.mongoAltas;
    // }else{
    //     dbUrl = process.env.dbUri;
    // }
    mongoose.connect(dbUrl).then(()=>{
        console.log(`Connected to ${dbUrl} sucessfully ....`);
    }).catch((err)=>{
        console.error(`Connection to ${dbUrl}  failed. \n Error : ${err.message}`);
    });
}

module.exports = connectToDataBase;
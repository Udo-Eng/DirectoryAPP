const mongoose = require('mongoose');


function connectToDataBase(){
    const dbUrl = process.env.dbUri;
    mongoose.connect(dbUrl).then(()=>{
        console.log(`Connected to ${dbUrl} sucessfully ....`);
    }).catch((err)=>{
        console.error(`Connection to ${dbUrl}  failed. \n Error : ${err.message}`);
    });
}

module.exports = connectToDataBase;
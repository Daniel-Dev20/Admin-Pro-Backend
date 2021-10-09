
require('dotenv').config();

const mongoose = require('mongoose');

const dbConnection = async () => {

    try{

        await mongoose.connect(process.env.DB_CNN, {

            useNewUrlParser:true,
            useUnifiedTopology:true,
            //useCreateIndex:true
        });

        console.log("DB ONLINE")
    }catch(err){

        console.log(err);
        throw new Error('Error al inicar la BD');
    }
    
  
}

module.exports = {

    dbConnection
}

//zkoxrTLUkOrCss9k
//'mongodb+srv://main_user:zkoxrTLUkOrCss9k@cluster0.4ot2c.mongodb.net/hospitaldb'
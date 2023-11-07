import mongoose from "mongoose";



let isConnected = false;

export const connectToDB = async () => {

    mongoose.set('strictQuery', true);

    if(isConnected) {
        console.log("MongoDb is conneted");
        return; 
    }

    try{

        await mongoose.connect(process.env.MONGODB_URI, {
            dbName : "Share_prompt",
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        isConnected = true;

    }
    catch(error) {
        concole.log("fail to connect to MongoDB")
    }

}


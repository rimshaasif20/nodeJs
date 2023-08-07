const MONGO_URL="mongodb+srv://rimshaasif873:rimsha7890_@cluster0.zkfvqyy.mongodb.net/"

import mongoose from 'mongoose';

const connectMongo= async()=>{
    
    try{
        const { connection }= await mongoose.connect(MONGO_URL)

        if(connection.readyState==1){
            console.log("Database Connected")
        }
    } catch(errors){
   return Promise.reject(errors)
    }
}
export default  connectMongo;
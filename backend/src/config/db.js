import mongoose from "mongoose"

export const connectDB = async () => {
    try{
        await mongoose.connect("mongodb+srv://abonjoks_db_user:5GEtwRC3Yw9kjsCt@cluster0.j0m9zcx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
        console.log("MONGODB CONNECTED SUCCESSFULLY!");
    } catch(error){
        console.error("Error connecting to MONGODB", error);
    }
}
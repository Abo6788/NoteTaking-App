import express from "express";
import notesRoutes from "./routes/notesRoutes.js"
import {connectDB} from "./config/db.js";
import dotenv from "dotenv"

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

//An endpoints is a combination of a URL + HTTP method that lets the client
//interact with a specific resource.

//middleware that we add
app.use(express.json())

app.use("/api/notes",notesRoutes)

connectDB().then(() => {        //Once the database is connected then we start the server

    app.listen(PORT, () => {
        console.log("Server started on PORT:", PORT); 
    });
});


// mongodb+srv://abonjoks_db_user:5GEtwRC3Yw9kjsCt@cluster0.j0m9zcx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
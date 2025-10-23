import express from "express";
import notesRoutes from "./routes/notesRoutes.js"
import {connectDB} from "./config/db.js";
import dotenv from "dotenv"
import cors from 'cors'

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

//An endpoints is a combination of a URL + HTTP method that lets the client
//interact with a specific resource.

//middleware that we add
app.use(express.json())
app.use(cors())

app.use(notesRoutes)

connectDB().then(() => {        //Once the database is connected then we start the server

    app.listen(PORT, () => {
        console.log("Server started on PORT:", PORT); 
    });
});


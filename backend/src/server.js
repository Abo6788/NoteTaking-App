import express from "express";
import notesRoutes from "./routes/notesRoutes.js"
import {connectDB} from "./config/db.js";

const app = express();

connectDB();

//An endpoints is a combination of a URL + HTTP method that lets the client
//interact with a specific resource.

app.use("/api/notes",notesRoutes)

app.listen(5001, () => {
    console.log("Server started on PORT: 5001");
});

// mongodb+srv://abonjoks_db_user:5GEtwRC3Yw9kjsCt@cluster0.j0m9zcx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
import express from "express";
import notesRoutes from "./routes/notesRoutes.js"

const app = express();

//An endpoints is a combination of a URL + HTTP method that lets the client
//interact with a specific resource.

app.use("/api/notes",notesRoutes)

app.listen(5001, () => {
    console.log("Server started on PORT: 5001");
});
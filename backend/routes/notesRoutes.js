import express from "express"

const router = express.Router();

router.get("/",(req,res)=>{
    res.send("You just fetched the notes.")
});

router.post("/",(req,res) => {
    res.status(201).json({message: "Note created successfully!"})
})

router.post("/", (req,res) =>{
    res.status(201).json({message:"Note created successfully!"})
})

router.put("/", (req,res) =>{
    res.status(200).json({message:"Note updated successfully!"})
})

router.delete("/:id", (req,res) =>{
    res.status(200).json({message:"Note deleted successfully!"})
})



export default router







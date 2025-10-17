import Note from "../models/Note.js"

export async function getAllNotes(req,res){
    try {
        const notes = await Note.find().sort({createdAt: -1}) //Gives us every single note in descending order
        res.status(200).json(notes) //returns all of the notes
    } catch (error) {
        console.error("Error in getAllNotes controller", error)
        res.status(500).json({message:"Internal server error"})
    }
};

export async function getNoteById(req,res){
    try {
        const {title,content} = req.body;
        const note = await Note.findById(req.params.id)
        res.status(200).json(note)
    } catch (error) {
        console.error("Error in getNoteById controller", error)
        res.status(500).json({message:"Internal server error"})
    }
}

export async function createNote(req,res){
    try {
        const {title,content} = req.body //we retrieve the title and the content from the body of the request
        const note = new Note({title:title, content:content}) //create a new "Note" using title and content from request body

        const savedNote = await note.save() //save note
        res.status(201).json(savedNote);    //return created note
    } catch (error) {
        console.error("Error in createNote controller", error)
        res.status(500).json({message:"Internal server error"})
    }
    
}

export async function updateNote(req,res){
    try {
        const {title,content} = req.body; 
        const updatedNote = await Note.findByIdAndUpdate(  //Use built in method to find and update Note
            req.params.id,
            {title,content},
            {
                new: true,
            }
        );
        if(!updatedNote) return res.status(404),json({message: "Note not found"})

        res.status(200).json(updatedNote)
    } catch (error) {
        console.error("Error in updateNote controller", error)
        res.status(500).json({message:"Internal server error"})
    }
    
}

export async function deleteNote(req,res){
    try {
        const {title,content} = req.body;
        await Note.findByIdAndDelete(req.params.id,{title,content}) //Use built in method to find and delete Note
        if(!deletedNote) return res.status(404).json({message: "Note not found"});
        res.status(200).json({message:"Note deleted successfully!"})
    } catch (error) {
        console.error("Error in deleteNote controller", error)
        res.status(500).json({message: "Internal server error"})
    }
    
}
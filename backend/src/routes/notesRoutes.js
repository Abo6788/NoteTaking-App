import express from "express"
import {getNoteById, createNote, deleteNote, getAllNotes, updateNote} from "../controllers/notesController.js"

const router = express.Router();

router.get("/api/notes/:id",getNoteById);
router.get("/api/notes",getAllNotes);
router.post("/api/notes", createNote);
router.put("/api/notes/:id", updateNote);
router.delete("/api/notes/:id", deleteNote);



export default router







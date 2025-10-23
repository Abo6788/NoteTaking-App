import {useState} from 'react'
import React, { useEffect } from 'react'
import NavBar from '../components/NavBar'
import toast from 'react-hot-toast'
import axios from 'axios'

const HomePage = () => {

  const [notes,setNotes] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {

    const fetchNotes = async() => {
      try {
        const res = await axios.get("http://localhost:5001/api/notes");
        console.log(res.data);
        setNotes(res.data);
      } catch (error) {
        console.log("Error fetching notes",error);
        toast.error("Failed to load notes");
        
      }
      finally{
        setLoading(false);
      }
    };

    fetchNotes();
  },[]);

  return (
    <div className='min-h-screen'>
        <NavBar/>
    </div>
  )
}

export default HomePage

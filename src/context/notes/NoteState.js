import React, { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const notesInitial = [
    {
      "_id": "63372a6a76d1c05f5d28bdl75",
      "user": "6335d861f700350027f68158",
      "title": "My Title",
      "description": "All Done",
      "tag": "personal",
      "date": "2022-09-30T17:42:02.396Z",
      "__v": 0
    },
    {
      "_id": "633889429bsd051548ada1al352f",
      "user": "6335d861f700350027f68158",
      "title": "My Title",
      "description": "All Done",
      "tag": "personal",
      "date": "2022-10-01T18:38:58.353Z",
      "__v": 0
    },
    {
      "_id": "6338894l29b0515s48ada1a352f",
      "user": "6335d861f700350027f68158",
      "title": "My Title",
      "description": "All Done",
      "tag": "personal",
      "date": "2022-10-01T18:38:58.353Z",
      "__v": 0
    },
    {
      "_id": "633889429b0515s48ada1a3l52f",
      "user": "6335d861f700350027f68158",
      "title": "My Title",
      "description": "All Done",
      "tag": "personal",
      "date": "2022-10-01T18:38:58.353Z",
      "__v": 0
    },
    {
      "_id": "633889429b051lg548ada1a352f",
      "user": "6335d861f700350027f68158",
      "title": "My Title",
      "description": "All Done",
      "tag": "personal",
      "date": "2022-10-01T18:38:58.353Z",
      "__v": 0
    },
    {
      "_id": "63388942l9gb051548ada1a352f",
      "user": "6335d861f700350027f68158",
      "title": "My Title",
      "description": "All Done",
      "tag": "personal",
      "date": "2022-10-01T18:38:58.353Z",
      "__v": 0
    },
    {
      "_id": "633889429b051sl548ada1a352f",
      "user": "6335d861f700350027f68158",
      "title": "My Title",
      "description": "All Done",
      "tag": "personal",
      "date": "2022-10-01T18:38:58.353Z",
      "__v": 0
    },
  ]

  const [notes, setnotes] = useState(notesInitial);

  // Add a note
  const Addnote = (title,description,tag)=>{
     console.log("Adding a new Note");

     const note = {
      "_id": "633889429b051sl548ada1a352f",
      "user": "6335d861f700350027f68158",
      "title": title,
      "description": description,
      "tag": tag,
      "date": "2022-10-01T18:38:58.353Z",
      "__v": 0
    };

    setnotes(notes.concat(note));
  }

  // Delete a note
   const deleteNote = (id) =>{
       console.log("Deleting the note with id:"+id);
       const newNotes = notes.filter((note)=>{return note._id!==id});
       setnotes(newNotes);
   }

  // Update a note

  return (
    <NoteContext.Provider value={{notes,Addnote,deleteNote}}>
        {props.children}
    </NoteContext.Provider> 
  )
}

export default NoteState;
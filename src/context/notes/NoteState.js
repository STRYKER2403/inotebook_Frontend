import React, { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const notesInitial = [
    {
      "_id": "63372a6a76d1c05f5d28bd75",
      "user": "6335d861f700350027f68158",
      "title": "My Title",
      "description": "All Done",
      "tag": "personal",
      "date": "2022-09-30T17:42:02.396Z",
      "__v": 0
    },
    {
      "_id": "633889429b051548aa1a352f",
      "user": "6335d861f700350027f68158",
      "title": "My Title",
      "description": "All Done",
      "tag": "personal",
      "date": "2022-10-01T18:38:58.353Z",
      "__v": 0
    }
  ]

  const [notes, setnotes] = useState(notesInitial);

  return (
    <NoteContext.Provider value={{notes,setnotes}}>
        {props.children}
    </NoteContext.Provider> 
  )
}

export default NoteState;
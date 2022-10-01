import React, { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
   const a = {
    "name":"Swap",
    "Class":"BY"
   }
   
   const [State, setState] = useState(a);
   const update=()=>{
    setTimeout(() => {
        setState({
            "name":"Swappy",
            "Class":"BX"
           })
    }, 1000);
   }

  return (
    <NoteContext.Provider value={{State,update}}>
        {props.children}
    </NoteContext.Provider> 
  )
}

export default NoteState;
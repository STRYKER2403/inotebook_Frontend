import React, { useContext ,useEffect} from 'react'
import noteContext from '../context/notes/noteContext'


const About = () => {
  const a = useContext(noteContext)

  useEffect(() => {
    
    a.update();
    // eslint-disable-next-line
  }, []);


  return (
    <div>
      this  is about {a.State.name} of Batch {a.State.Class}
    </div>
  )
}

export default About

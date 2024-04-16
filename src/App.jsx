import React, { useState, useEffect } from "react";
import axios from "axios";
import NoteChange from "./NoteChange";
import NoteDisp from "./NoteDisp";

const baseUrl = 'http://localhost:3001/api/notes';

const App = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    axios.get(baseUrl).then((response) => {
      setNotes(response.data);
    });
  }, []);

  return (
    <div>
      <h1 style={{
        fontSize: '36px',        // Sets a large font size
        fontFamily: 'Arial, sans-serif',  // Uses Arial or a fallback sans-serif font
        color: '#4A90E2',        // Sets a pleasant blue color
        textShadow: '2px 2px 8px rgba(0,0,0,0.5)'  // Adds a subtle shadow for depth
      }}>Notes</h1>
      <NoteDisp notes={notes} />
      <NoteChange baseUrl={baseUrl} setNotes={setNotes} />
    </div>
  );

};

export default App;
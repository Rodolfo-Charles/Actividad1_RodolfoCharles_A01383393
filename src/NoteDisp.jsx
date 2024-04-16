import React from "react";

const NoteDisp = ({ notes }) => {
  return (
    <ul style={{
      listStyleType: 'none', 
      padding: '0',
      margin: '0'
    }}>
      {notes.map((note) => (
        <li key={note.id} style={{
          backgroundColor: '#f4f4f4', 
          padding: '10px 15px',        
          margin: '5px 0',           
          borderRadius: '5px',       
          boxShadow: '0 2px 5px rgba(0,0,0,0.1)'  
        }}>
          {note.content}
        </li>
      ))}
    </ul>
  );

};

export default NoteDisp;
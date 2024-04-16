import { useState } from "react";
import axios from "axios";


const NoteChange = ({ baseUrl, setNotes }) => {
    // useState para gestionar el contenido del campo de entrada de la nueva nota.
    // newNote mantiene el valor actual del campo de entrada.
    const [newNote, setNewNote] = useState("");

    const handleNoteChange = (event) => {
        console.log(event.target.value); // Salida del valor de entrada para propósitos de depuración.
        setNewNote(event.target.value); // Actualiza newNote con el valor actual de la entrada.
    };
    
    const addNote = (event) => {
        event.preventDefault(); // Evita que el formulario cause una recarga de la página.
        const noteObject = {
          content: newNote,
          important: Math.random() < 0.5, // Decide aleatoriamente si la nota es importante.
          date: new Date().toISOString(), // Utiliza el formato ISO para la fecha para asegurar la compatibilidad.
        };
    
        // Publica de manera asíncrona la nueva nota en el servidor.
        axios.post(baseUrl, noteObject)
          .then((response) => {
            console.log(response); // Salida de la respuesta para propósitos de depuración.
            setNotes(notes => [...notes, response.data]); // Agrega la nueva nota al estado.
            setNewNote(""); // Limpia el campo de entrada después de enviar.
          });
    };

    return (
      <form onSubmit={addNote} style={{
        display: 'flex',
        alignItems: 'center',
        gap: '10px'
      }}>
          <input 
            value={newNote} 
            onChange={handleNoteChange}
            style={{
              flex: 1,
              padding: '10px',
              fontSize: '16px',
              borderRadius: '4px',
              border: '1px solid #ccc'
            }}
          />
          <button type="submit" style={{
            padding: '10px 20px',
            fontSize: '16px',
            backgroundColor: '#4A90E2',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            boxShadow: '0 2px 5px rgba(0,0,0,0.2)'
          }}>Guardar</button>
      </form>
    );

}

export default NoteChange;

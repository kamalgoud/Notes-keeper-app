import React, { useState } from 'react'

export default function CreateArea(props) {

    const [note,setNote] = useState({
        title:"",
        content:""
    });
    function fun1(event){
        const newValue = event.target.value;
        const name=event.target.name;
        setNote(prev => {
            return {
                ...prev,
                [name]:newValue
            }
        })
    }

    function submitNote(event){
        props.onAdd(note);
        setNote({
            title:"",
            content:""
        })
        event.preventDefault();
    }

  return (
    <div><form>
        <input name="title" onChange={fun1} value={note.title} placeholder="Title" />
        <hr></hr>
        <textarea name="content" onChange={fun1} value={note.content} placeholder="Take a note..." rows="3" />
        <button onClick={submitNote} >+</button>
    </form>
  </div>
  )
}

import React, { useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import Note from './Note'
import CreateArea from './CreateArea'

export default function App() {

  const [items, setItems] = useState([])

  function addItem(inputText) {
    setItems(prev => {
      return [...prev,inputText]
    })
  }

  function deleteFun(id){
    setItems(prev => {
      return prev.filter((pitem,index)=>{
        return index!==id;
      })
    })
  }
  

  return (
    <div>
        <Header></Header>
        <CreateArea onAdd={addItem} /> 
        {items.map((note,index) => {
          return <Note key={index} id={index} onDelete={deleteFun} title={note.title} content={note.content}/>
        })}
        <Footer></Footer>
    </div>
  )
}

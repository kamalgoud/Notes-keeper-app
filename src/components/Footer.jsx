import React from 'react'

export default function Footer() {
    const d=new Date();
    const v=d.getFullYear();
  return (
    <div>
        <footer> 
            <p>copyright &copy;  {v}</p> 
        </footer>
    </div>
  )
}



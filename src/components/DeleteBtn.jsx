import React from 'react'
import  './DeleteBtn.css'

export default function DeleteBtn({id, userData}) {
    const handleDelete = (id)=>{
     userData.filter((item)=>  item.id !== id)
    }
  return (
    <button className='deleteBtn' onClick={handleDelete}>Delete</button>
  )
}

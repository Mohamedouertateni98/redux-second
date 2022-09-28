import {useDispatch } from 'react-redux'
import { handlechange, handleshow, Delete, checkboxclicked } from '../slice'
import Checkbox from '@mui/material/Checkbox';
import React, { useState } from 'react'

function Component({ id, checked, Title, show}) {

  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
  const dispatch = useDispatch()
  const [text,setText] =useState("")
  const handleEdit = () =>{

    text !==""? dispatch(handlechange([text,id])):alert("Your Todo is empty")
  }

  return (
    <div class="container5" >
      {
      !show &&
       <input autoFocus id="Input" 
       onKeyDown={(e) => e.keyCode === 13 ? dispatch(handleshow(id)) : NaN} 
       onChange={(e) => setText( e.target.value ) } 
       placeholder={Title}></input>
       }
      {show && <p style={checked === true ? { textDecoration: "line-through" } : null}>{Title}</p>}
      <Checkbox size="large" onClick={() => dispatch(checkboxclicked(id))} checked={checked} {...label} />

      <button onClick={() => dispatch(handleshow(id))} type="button" >
        {show && <i class="bi bi-pencil text-light"></i>}
        {!show && <i class="bi bi-plus text-light" onClick={() => {handleEdit()}}></i>}
      </button>
      <button onClick={() => dispatch(Delete(id))} type="button" >
        <i class="bi bi-trash text-light"></i>

      </button>

    </div>
  )
}

export default Component

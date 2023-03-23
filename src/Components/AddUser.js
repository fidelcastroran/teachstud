import React, { useState } from 'react'
import BaseApp from '../Core/Base'


function AddUser  ({user,setUser})  {

    const [name, setName] = useState("")
    const [id, setId] = useState("")
    const [email, setEmail] = useState("")
    const [experience, setExperience] = useState("")
    const [batch, setBatch] = useState("")
    
    const addNewUser = () =>{
        const newUser={
            id,
            name,
            email,
            batch,
            experience
        }
        setUser([...user, newUser])
    }
  return (
   <BaseApp title = { "Add A New user"}>
    <div>
        <input placeholder='id' value = {id} onChange={(e)=>setId(e.target.value)} />
        <input placeholder='name' value = {name} onChange={(e)=>setName(e.target.value)} />
        <input placeholder='email' value = {email} onChange={(e)=>setEmail(e.target.value)} />
        <input placeholder='experience' value = {experience} onChange={(e)=>setExperience(e.target.value)} />
        <input placeholder='batch' value = {batch} onChange={(e)=>setBatch(e.target.value)} />
        <button onClick={addNewUser}>Add</button>
        </div>
   </BaseApp>
  )
}

export default AddUser
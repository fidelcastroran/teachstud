import React, { useEffect, useState } from 'react'
import BaseApp from '../Core/Base'


function AddUser  ({user,setUser})  {

    const [name, setName] = useState("")
    const [id, setIdx] = useState("")
    const [email, setEmail] = useState("")
    const [experience, setExperience] = useState("")
    const [batch, setBatch] = useState("")

    useEffect(() => {
        setIdx(selectedUser.id)
        setName(selectedUser.name)
        setEmail(selectedUser.email)
        setExperience(selectedUser.experience)
        setBatch(selectedUser.batch)
    })

    
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
        <input placeholder='id' value = {id} onChange={(e)=>setIdx(e.target.value)} />
        <input placeholder='name' value = {name} onChange={(e)=>setName(e.target.value)} />
        <input placeholder='email' value = {email} onChange={(e)=>setEmail(e.target.value)} />
        <input placeholder='experience' value = {experience} onChange={(e)=>setExperience(e.target.value)} />
        <input placeholder='batch' value = {batch} onChange={(e)=>setBatch(e.target.value)} />
        <button onClick={addNewUser}>Add</button>
        </div>
   </BaseApp>
  )
}
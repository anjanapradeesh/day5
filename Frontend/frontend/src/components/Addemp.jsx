import { Button, TextField } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const Addemp = (props) => {
  var [input, setinput] = useState({ Name: "", Age: "", Dept: "", Sal: "" })
  var navigate = useNavigate()
  var location = useLocation()
  console.log("a", location.state)
  
  const inputHandler = (e) => {
    setinput({ ...input, [e.target.name]: e.target.value })
    console.log(input)
  }
  const addHandler = () => {
    if (location.state !== null) {
      axios.put("http://localhost:3004/update/" + location.state.val._id, input)
        .then((res) => {
          alert(res.data.message)
          navigate('/view')
        })
    }

    else {
      axios.post("http://localhost:3004/add", input)
        .then((res) => {
          alert(res.data.message)
          navigate('/view')
        })
    }
  }

useEffect(() => { 
    if (location.state !== null)
      setinput(
        {
          ...input,
          Name:location.state.val.Name,
          Age:location.state.val.Age,
          Dept:location.state.val.Dept,
          Sal:location.state.val.Sal
        }
      )
  },[])
  return (
      <div>
          <h1>Add Employee Details</h1>
          <TextField label="name" variant='outlined' name='Name' value={input.Name} onChange={inputHandler}/><br /><br />
      <TextField label="age" variant='outlined' name='Age' value={input.Age} onChange={inputHandler} /><br /><br />
      <TextField label="dept" variant='outlined' name='Dept' value={input.Dept} onChange={inputHandler} /><br /><br />
      <TextField label="sal" variant='outlined' name='Sal' value={input.Sal} onChange={inputHandler} /><br /><br />
      <Button variant='contained' onClick={addHandler}>SUBMIT </Button>
      </div>
  )
}

export default Addemp 
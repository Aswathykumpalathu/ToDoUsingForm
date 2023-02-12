import { Button, TextField, Typography } from '@mui/material'
import React from 'react'
import useForm from './todoform'

const ToDoNew = () => {
    
  
var [todos,settodos] = useForm({title:"",quantity:"",description:""})
  return (
    <div>
      <Typography>To Do App</Typography>
      <TextField  label="ENTER Title"  value={todos.title} name="title" onChange={settodos} margin='normal' fullWidth variant='outlined'></TextField>
      <TextField  label="Enter Quantity" value={todos.quantity} name="quantity"  onChange={settodos} margin='normal' fullWidth variant='outlined'></TextField>
      <TextField  label=" Enter Description" value={todos.description} name="description" onChange={settodos}  margin='normal' fullWidth variant='outlined'></TextField>
      <Button variant='contained'> Submit</Button>
      <br></br>
      <Typography varient="h5">{todos.title}</Typography>
      <Typography varient="h5">{todos.quantity}</Typography>
      <Typography varient="h5">{todos.description}</Typography>
    </div>
  )
}

export default ToDoNew

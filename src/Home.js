import React from 'react'
import TextField from '@mui/material/TextField';
import { Email } from '@mui/icons-material';

const Home = () => {
    function email () {
        Email("")
    }
  return (
    <div>   
        {/* <button>click</button> */}
        <TextField 
        value={email}
      label="Name" 
      variant="outlined" />

    </div>
  )
}

export default Home

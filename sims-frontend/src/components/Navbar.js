import React from 'react'
import {AppBar, Toolbar, Typography} from '@mui/material'
const Navbar = () => {
  return (
        <AppBar position='static'>
            <Toolbar>
                <Typography variant='h5'>Student Management System</Typography>
            </Toolbar>
        </AppBar>
  )
}
export default Navbar
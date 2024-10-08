import React from 'react'
import './Global.style.css'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { IconButton } from '@mui/material';

function Sidebar() {
  return (
    <div className='Side-bar'>
      <div className='sb-header'>
        <IconButton>
          <AccountCircleIcon/>
        </IconButton>
      </div>
      <div className='sb-search'>Header</div>
      <div className='sb-chat'>Header</div>
    </div>
  )
}

export default Sidebar

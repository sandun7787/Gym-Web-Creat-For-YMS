import { Button } from 'bootstrap'
import React from 'react'
import { Navigate } from 'react-router-dom'

function Profice() {
  return (
    <div>
      <h1>profile</h1>
      <Button onClick={()=> Navigate(-1)}>
        Back
      </Button>
      
      
    </div>
  
  )
}

export default Profice

import React from 'react'
import { Link } from 'react-router-dom'

function home() {
  return (
    <div>
      <Link to="/Profice">go to profile page</Link>
      <Link to="/About">go to about page</Link>
    </div>
  )
}

export default home

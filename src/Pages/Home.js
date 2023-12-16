import React from 'react'
import TopicBox from '../Components/TopicBox'
import Content from '../Components/Content'
import {Link} from 'react-router-dom'

export default function Home (){
    return(
        <div>
            <h1>this is the home page</h1>
            <Link to="/About">go to the about page</Link>
            <Link to="/Contact">go the the Contact page</Link>
        
        </div>
    )
    
}
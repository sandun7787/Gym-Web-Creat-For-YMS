import React from 'react'
import './App.css'
import Accordion from 'react-bootstrap/Accordion';

function buttonClick(){
    console.log("Button is click")
    alert("Button is clicked")
}
function App(){
    return(
        <div>
            <h1>
                React event handeling
            </h1>
           <br></br><hr></hr>

           <button onClick={buttonClick}>click hear</button>

        </div>
    )
}
    

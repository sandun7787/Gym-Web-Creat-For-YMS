import React from 'react'
import './topicbox.css'

export default function TopicBox(props) {
    
   
  

    return(
        <div>
            <div ClassName="TopicBox">
                <span className='paka'>my favourite food is koththu{props.food} the price is {props.price}</span>
            </div>
        </div>
    )
    


}
import React from 'react'
import './Actor.css'
import { imageURL } from '../api'

function Actor({pic, name}) {
    return (
        <div className="actor">
            <img src={`${imageURL}${pic}`}></img>
            
                <h4>{name}</h4>
    
        </div>
    )
}

export default Actor

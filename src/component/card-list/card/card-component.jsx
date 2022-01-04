import React from 'react';
import './card-style.css'

export const Card = (props) => (
    <div className='card-container'>
        <img src={`https://robohash.org/${props.monster.id}?set=set9&180x180`}
            alt="monsters" />
        <h2>{props.monster.name}</h2>
        <p>{ props.monster.email}</p>
    </div>
)
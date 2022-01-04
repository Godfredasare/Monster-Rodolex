import React from 'react';
import './searchBox.css'

export const SearchBox = ({ placeholder, handleChange }) => (
    
        <input
            className='search'
            type='search'
            name='monters-seacrch'
            placeholder={placeholder}
        onChange={(handleChange)} />
    
)
import React, { Component } from 'react'
import './style.css'


const Form = ({ name, value, onChange, placeholder, onClick }) => {
    return (
        <div className="form-wrapper">

            <h2 className="header">Google Books</h2>
            <form>
                <input
                    autoComplete="off"
                    value={value}
                    name={name}
                    onChange={onChange}
                    placeholder={placeholder} 
                    type="text" />

                <button type="submit"className="submit-btn" onClick={onClick}>Search</button>
            </form>


        </div>
    )
}


export default Form
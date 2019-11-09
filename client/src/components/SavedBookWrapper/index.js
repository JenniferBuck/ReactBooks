import React, { Component } from 'react'
import './style.css'

class SavedBookWrapper extends Component {


    render() {
        const {handleClick, _id, authors, title, description, link, image } = this.props

        return (

            <div key={_id} className="book-wrapper">
                <div>
                    <h1>{title} Written By : {authors}</h1>
                    <h3>Synopsis : {description}</h3>
                </div>
                <div>

                    <h2><img alt={title + "image"} src={image}></img></h2>
                    <h2><a className="link" href={link}>Link to Book</a></h2>
                    <h2><button className="delete-btn" onClick={() => handleClick(_id)}>Delete Book</button></h2>
            
                </div>
            </div>

        )

    }

}





export default SavedBookWrapper
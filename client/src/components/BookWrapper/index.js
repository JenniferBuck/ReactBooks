import React,{Component} from 'react'
import './style.css'
import API from '../../api'

class BookWrapper extends Component{

    state = {
        message :""
    }

    saveArticle = (book) =>{
        API.saveBook(book)
        this.setState({message:"This Book Has Been Saved! "})

    }

    handleClick = (book) => {
  
        this.saveArticle(book)
    }


render()
{
    const {authors,title,description,link,image} = this.props
  
    return(
        <div className="book-wrapper">
            <div>
            <h1>{title} Written By : {authors}</h1>
            <h3>Synopsis : {description}</h3>
           
            </div>
            <div>
            
            <h2><img alt={title +"image"} src={image}></img></h2>
            <h2><a className="link" href={link}>Link to Book</a></h2>
            <h2><button className="save-btn" onClick={()=> this.handleClick(this.props)}>Save Book</button></h2>
            <h2>{this.state.message}</h2>
            </div>
        </div>
    )
}

}

export default BookWrapper
import React,{Component} from 'react'
import './style.css'
import API from '../../api'

class BookWrapper extends Component{

    saveArticle = (book) =>{
        API.saveBook(book)

    }

    handleClick = (book) => {
  
        let bookObj = {
            title:book.title,
            authors: book.authors,
            description: book.description,
            image: book.image,
            link: book.link,

        }
      
        this.saveArticle(bookObj)
    }


render(){
    const {authors,title,description,link,image} = this.props
  
    return(
        <div className="book-wrapper">
            <div>
            <h1>{title} Written By : {authors}</h1>
            <h3>Synopsis :{description}</h3>
            </div>
            <div>
            
            <h2><img ref="image" src={image}></img></h2>
            <h2><a className="link" href={link}>Link to Book</a></h2>
            <button className="save-btn" onClick={()=> this.handleClick(this.props)}>Save Book</button>
            </div>
        </div>
    )
}

}

export default BookWrapper
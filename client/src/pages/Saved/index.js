import React,{Component} from 'react'
import SearchWrapper from '../../components/SearchWrapper'
import SearchResultsWrapper from '../../components/SearchResultsWrapper'
import NoResults from '../../components/NoResults'
import SavedBookWrapper from '../../components/SavedBookWrapper'
import API from '../../api/index'
import './style.css';

class Saved extends Component{

    state = {
        savedbooks: []
    }

    componentDidMount = () => {
        this.findSavedBooks()
    }

    findSavedBooks = async () =>{
        let {data:savedBooks} = await API.findSavedBooks()
        this.setState({savedbooks:savedBooks},()=>console.log(this.state.savedbooks))
    } 

    handleClick = async id => {
        await API.deleteSavedBook(id)
        this.findSavedBooks()     
    }  

    render(){
        return(
            <SearchWrapper>
            <div className="header-wrapper">
            <h2 className="header">Saved Books</h2>
            </div>
            
        
             <SearchResultsWrapper>
                {this.state.savedbooks && this.state.savedbooks.length > 0 ? 
                
                this.state.savedbooks.map(book =>(
                    <SavedBookWrapper
                    key={book._id}
                    _id={book._id}
                    authors={book.authors ? book.authors : ["No Author Available"]}
                    title={book.title}
                    description={book.description ? book.description : "No Description Available"}
                    link={book.link}
                    image={book.image ? book.image : "#"}
                    handleClick={this.handleClick}
                   
                     />
                ))
                
                : <NoResults />}
                 
            </SearchResultsWrapper>   
      

            </SearchWrapper>
            
        )
    }
}

export default Saved
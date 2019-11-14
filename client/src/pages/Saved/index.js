import React,{useState} from 'react'
import SearchWrapper from '../../components/SearchWrapper'
import SearchResultsWrapper from '../../components/SearchResultsWrapper'
import NoResults from '../../components/NoResults'
import SavedBookWrapper from '../../components/SavedBookWrapper'
import API from '../../api/index'
import './style.css';


const Saved = () => {

    const [books,setBooks] = useState([])

        const componentDidMount = () => {
        findSavedBooks()
    }

    const findSavedBooks = async () =>{
        const {data:savedBooks} = await API.findSavedBooks()
        setBooks(savedBooks)
    } 

    const handleClick = async id => {
        await API.deleteSavedBook(id)
        findSavedBooks()     
    }  
    componentDidMount()

        return(
            <SearchWrapper>
            <div className="header-wrapper">
            <h2 className="header">Saved Books</h2>
            </div>
            
        
             <SearchResultsWrapper>
                {books && books.length > 0 ? 
                
                books.map(book =>(
                    <SavedBookWrapper
                    key={book._id}
                    _id={book._id}
                    authors={book.authors ? book.authors : ["No Author Available"]}
                    title={book.title}
                    description={book.description ? book.description : "No Description Available"}
                    link={book.link}
                    image={book.image ? book.image : "#"}
                    handleClick={handleClick}
                   
                     />
                ))
                
                : <NoResults />}
                 
            </SearchResultsWrapper>   
      

            </SearchWrapper>
            
        )

}

// class Saved extends Component{

//     state = {
//         savedbooks: []
//     }



//     render(){
//         return(
//             <SearchWrapper>
//             <div className="header-wrapper">
//             <h2 className="header">Saved Books</h2>
//             </div>
            
        
//              <SearchResultsWrapper>
//                 {this.state.savedbooks && this.state.savedbooks.length > 0 ? 
                
//                 this.state.savedbooks.map(book =>(
//                     <SavedBookWrapper
//                     key={book._id}
//                     _id={book._id}
//                     authors={book.authors ? book.authors : ["No Author Available"]}
//                     title={book.title}
//                     description={book.description ? book.description : "No Description Available"}
//                     link={book.link}
//                     image={book.image ? book.image : "#"}
//                     handleClick={this.handleClick}
                   
//                      />
//                 ))
                
//                 : <NoResults />}
                 
//             </SearchResultsWrapper>   
      

//             </SearchWrapper>
            
//         )
//     }
// }

export default Saved
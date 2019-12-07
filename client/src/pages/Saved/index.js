import React,{useContext,useEffect} from 'react'
import SearchWrapper from '../../components/SearchWrapper'
import SearchResultsWrapper from '../../components/SearchResultsWrapper'
import NoResults from '../../components/NoResults'
import SavedBookWrapper from '../../components/SavedBookWrapper'
import API from '../../api/index'
import './style.css';
import {SavedBooksContext} from '../../Hooks'





const Saved = () => {

const [savedbooks,setSavedBooks] = useContext(SavedBooksContext)
    
    useEffect(() => {
        findSavedBooks()
        
      },[]);

    const findSavedBooks = async () =>{
        const {data:savedBooks} = await API.findSavedBooks()
        console.log(savedBooks)
        setSavedBooks(savedBooks)
    } 


    const handleClick = async id => {
        await API.deleteSavedBook(id)
        findSavedBooks()     
    }  


        return(
            <SearchWrapper>
            <div className="header-wrapper">
            <h2 className="header">Saved Books</h2>
            </div>
            
        
             <SearchResultsWrapper>
                {savedbooks && savedbooks.length > 0 ? 
                
                savedbooks.map(book =>(
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

// class Saved extends React.Component{

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
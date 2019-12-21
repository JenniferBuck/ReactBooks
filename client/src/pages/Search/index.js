import React, { useContext } from 'react'
import SearchWrapper from '../../components/SearchWrapper'
import Form from '../../components/Form'
import SearchResultsWrapper from '../../components/SearchResultsWrapper'
import BookWrapper from '../../components/BookWrapper'
import API from '../../api'
import NoResults from '../../components/NoResults'
import Hooks from '../../Hooks'
import {QueryContext,SearchBooksContext} from '../../Hooks'


const Search = () => {

    const [query, setQuery] = useContext(QueryContext)
    const [books, searchBooks] = useContext(SearchBooksContext)

    let handleInputChange = event => {
                const {value} = event.target
                setQuery(value)
        
            }
        
        
    let handleFormSearch = async event => {
                event.preventDefault()
        
                let { data: results } = await API.searchBooks(query)
                searchBooks(results.items)
                console.log(books)
                setQuery("")
             
            }
        
            
                return (
                    <SearchWrapper>
                        <Form
                            name="query"
                            value={query}
                            onChange={handleInputChange}
                            onClick={handleFormSearch}
                        />
                        <SearchResultsWrapper>
        
                            {books && books.length > 0 ? books.map(book => (
                                <Hooks>
                                <BookWrapper
                                    key={book.id}
                                    authors={book.volumeInfo.authors ? book.volumeInfo.authors : ["No Author Available"]}
                                    title={book.volumeInfo.title}
                                    description={book.volumeInfo.description ? book.volumeInfo.description : "No Description Available"}
                                    link={book.volumeInfo.infoLink}
                                    image={book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : "#"}
                                />
                                </Hooks>
        
                            )) : <NoResults />}
        
        
        
        
                        </SearchResultsWrapper>
        
        
        
                    </SearchWrapper>
                )
            

}

// class Search extends Component {

//     state = {
//         query: "",
//         books: [],
//     }


//     handleInputChange = event => {
//         const { name, value } = event.target

//         this.setState({
//             [name]: value
//         })

//     }


//     handleFormSearch = async event => {
//         event.preventDefault()

//         let { data: results } = await API.searchBooks(this.state.query)
//         this.setState({
//             books: results.items,
//             query: ""
//         })

//     }

//     render() {
//         return (
//             <SearchWrapper>
//                 <Form
//                     name="query"
//                     value={this.state.query}
//                     onChange={this.handleInputChange}
//                     placeholder="Type Here To Search For A Book"
//                     onClick={this.handleFormSearch}
//                 />
//                 <SearchResultsWrapper>

//                     {this.state.books && this.state.books.length > 0 ? this.state.books.map(book => (
//                         <BookWrapper
//                             key={book.id}
//                             authors={book.volumeInfo.authors ? book.volumeInfo.authors : ["No Author Available"]}
//                             title={book.volumeInfo.title}
//                             description={book.volumeInfo.description ? book.volumeInfo.description : "No Description Available"}
//                             link={book.volumeInfo.infoLink}
//                             image={book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : "#"}
//                         />

//                     )) : <NoResults />}




//                 </SearchResultsWrapper>



//             </SearchWrapper>
//         )
//     }
// }

export default Search
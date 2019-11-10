import React, { Component } from 'react'
import SearchWrapper from '../../components/SearchWrapper'
import Form from '../../components/Form'
import SearchResultsWrapper from '../../components/SearchResultsWrapper'
import BookWrapper from '../../components/BookWrapper'
import API from '../../api'
import NoResults from '../../components/NoResults'



class Search extends Component {

    state = {
        query: "",
        books: [],
        message:""
    }


    handleInputChange = event => {
        const { name, value } = event.target

        this.setState({
            [name]: value
        })

    }


    handleFormSearch = async (event) => {
        event.preventDefault()

        let { data: results } = await API.searchBooks(this.state.query)
        this.setState({
            books: results.items,
            query: ""
        })

    }

    render() {
        return (
            <SearchWrapper>
                <Form
                    name="query"
                    value={this.state.query}
                    onChange={this.handleInputChange}
                    placeholder="Type Here To Search For A Book"
                    onClick={this.handleFormSearch}
                />
                <SearchResultsWrapper>

                    {this.state.books && this.state.books.length > 0 ? this.state.books.map(book => (
                        <BookWrapper
                            key={book.id}
                            authors={book.volumeInfo.authors ? book.volumeInfo.authors : ["No Author Available"]}
                            title={book.volumeInfo.title}
                            description={book.volumeInfo.description ? book.volumeInfo.description : "No Description Available"}
                            link={book.volumeInfo.infoLink}
                            image={book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : "#"}
                        />

                    )) : <NoResults />}




                </SearchResultsWrapper>



            </SearchWrapper>
        )
    }
}

export default Search
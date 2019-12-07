import React, { useState } from 'react';
export const MessageContext = React.createContext("")
export const SearchBooksContext = React.createContext("")
export const QueryContext = React.createContext("")
export const SavedBooksContext = React.createContext("")

const Hooks = ({ children }) => {

    const [message, setMessage] = useState("")
    const [searchbooks, setSearchedBooks] = useState([])
    const [query, setQuery] = useState("")
    const [savedbooks, setSavedBooks] = useState([])

    return (
        <MessageContext.Provider value={[message, setMessage]}>
            <SearchBooksContext.Provider value={[searchbooks, setSearchedBooks]}>
                <QueryContext.Provider value={[query, setQuery]}>
                    <SavedBooksContext.Provider value={[savedbooks, setSavedBooks]}>
                        {children}
                    </SavedBooksContext.Provider>
                </QueryContext.Provider>
            </SearchBooksContext.Provider>
        </MessageContext.Provider>
    )
}

export default Hooks
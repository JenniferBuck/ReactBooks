import React from 'react'
import './style.css'

const SearchResultsWrapper = props =>{

    return(
        <div className="search-results-wrapper">{props.children}</div>
    )
}

export default SearchResultsWrapper
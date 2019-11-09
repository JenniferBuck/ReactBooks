import React from 'react'
import './style.css'

const SearchWrapper = props =>{
    return(
        <div className="search-wrapper">{props.children}</div>
    )
}

export default SearchWrapper
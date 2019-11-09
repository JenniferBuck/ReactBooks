import React from 'react'

const headerstyled = {
    textAlign:"center"
}
const NoResults = () =>{
    return(
        <div style={headerstyled} className="no-results-wrapper"><h1>No Books To Display</h1></div>
    )
}

export default NoResults
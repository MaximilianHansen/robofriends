import React from "react";

const SearchBox = ({searchChange}) => {
    return(
        <input className = "pa2 ma3" type = "search" placeholder = "Search Friends List" onChange = {searchChange}/> 
    )
}

export default SearchBox;

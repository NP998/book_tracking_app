import React from 'react';

const Searcharea=(props)=>{
    return(
        <div className="search-area" >
            <form onSubmit={props.searchBook} action="" style={{display:'flex',alignItems:'center'}}>
                <input onChange={props.handleSearch} type="text"/>
                <button type="submit">Search</button>
            </form>
        </div>
    )
}
export default Searcharea;
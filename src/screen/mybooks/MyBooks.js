import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import Books from '../../components/books/Books';
const MyBooks=()=>{
    return(
        <div className="book-container">
            <div className="navbar">
              <Navbar/>
            </div>
            <div className="books">
               <Books/>
            </div>
        </div>
    )
}
export default MyBooks
import React from 'react';

const AddNewBooks=()=>{
    return(
        <div className="addnewbooks">
            <div className="about-books">
            <h3>Add New Books</h3>
            <input placeholder="title"/><br></br>
            <input placeholder="authors"/><br></br>
            <input placeholder="categary"/><br></br>
            <input placeholder="pagecount"/><br></br>
            <button>Add Book</button>
            </div>
        </div>
    )
}
export default AddNewBooks;
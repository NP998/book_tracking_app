import React from 'react';
import Card from '../../components/card/Card';
const Booklist=(props)=>{

    return(
        <>
        {/* <div className="list"> */}
        <div className="container-fluid mb-5 ">
        <div className="row">
          <div className=" col-10 mx-auto">
              <div className="row gy-4 book-con">
           {
               props.books.map((book,index)=>{
                       return <Card
                                key={index}
                                image={book.volumeInfo.imageLinks.thumbnail}
                                title={book.volumeInfo.title}
                                author={book.volumeInfo.authors}
                                categories={book.volumeInfo.categories}
                                pageCount={book.volumeInfo.pageCount}
                          />

               })
           }
        {/* </div> */}
        </div>
        </div>
    </div>
    </div>
    </>
    )
}

export default Booklist;
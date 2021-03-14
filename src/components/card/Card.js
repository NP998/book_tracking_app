import React from 'react'

const Card=(props)=>{
    return(
        // <div className="card-container">
        //     <img src={props.image} alt="image"/>
        //     <p>{props.categories}</p> 
        //     <p>{props.pageCount}</p> 
        //     <div className="desc">
        //         <p>{props.title}</p>
        //         <p>{props.author}</p>
        //     </div>
   <>
            {/* <div className="col-md-4 col-10 mx-auto main-card"> */}
                          <div className="card">
                             
                                   <img className="card-img-top" src={props.image} alt="Card image"/>
                                   <div className="card-body">
                                    <h5 className="card-title font-weight-bold">{props.title}</h5>
                                    <p className="card-text">{props.author}</p>
                                    <p className="card-text"> ({props.pageCount}) </p>
                                    <p>{props.categories}</p>
                                </div>
                          </div>
                  {/* </div> */}

        </>
    )
}

export default Card;


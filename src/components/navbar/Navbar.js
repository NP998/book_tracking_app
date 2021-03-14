import React from 'react';
import {FaEllipsisH} from 'react-icons/fa';
import {AiOutlineAppstore} from 'react-icons/ai';
import {AiOutlineAlignCenter} from 'react-icons/ai';
import {FiSearch} from 'react-icons/fi';
//import Searcharea from '../searcharea/Searcharea';
//import Books from '../books/Books';
const Navbar=(props)=>{
    return(
        <div className="container-navbar">
            <div className="nav-left">
                <p>Book Library</p>
                <FaEllipsisH style={{color:"gray",marginTop:"10px"}}/>
                
            </div>
            <div className="nav-right">
               <AiOutlineAppstore/>
               <AiOutlineAlignCenter/>
               <FiSearch/>
               {/* <div className="cards">
               <Books/>
               </div>  */}
            </div>   
        </div>
    )
}
export default Navbar
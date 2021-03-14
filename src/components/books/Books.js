import React,{Component} from 'react';
import Searcharea from "../../components/searcharea/Searcharea";
import request from 'superagent';
import Booklist from "../booklist/Booklist";


//use superagent for request the api
class Books extends Component{

    constructor(props){
        super();
         this.state={
             books:[],
             searchField:""
          }
       }
  
       searchBook=(e)=>{
            e.preventDefault();
           request
            .get("https://www.googleapis.com/books/v1/volumes")
            .query({q:this.state.searchField})
            .then((data)=>{
                this.setState({books:[...data.body.items]})
            })
       }

       handleSearch=(e)=>{
          this.setState({searchField:e.target.value})
       }
    render(){
        
       
        return(
            <div>
                <div className="search-box">
               <Searcharea searchBook={this.searchBook} handleSearch={this.handleSearch}/>
               </div>
               <Booklist books={this.state.books}/>
            </div>
        )
    }
}

export default Books;
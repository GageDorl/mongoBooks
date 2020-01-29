import React, {Component} from "react";
import SearchBooks from "../../components/SearchBooks"
import SearchBar from "../../components/SearchBar";
import axios from "axios"

class Search extends Component{
    constructor(props){
        super(props);
        this.state={
            books:""
        }
    }
    componentDidMount(){
        // this.searchBooks();
    }
    searchBooks=(query)=>{
        axios.get("https://www.googleapis.com/books/v1/volumes", { params: { q: "title:" + query } }).then((res)=>{
            this.setState({books:res.data.items});
            console.log(res)
        })
    }
    saveBook=(bookStuff)=>{
        axios.post("/api/books",bookStuff).then((res)=>console.log(res))
    }
    render(){
        return(
            <div>
                <div className="container">
                  <SearchBar search={this.searchBooks} />
                    <div className="bunchOfBooks" >
                        {this.state.books?
                        (this.state.books.map(book=>(
                            <SearchBooks book={book} save={this.saveBook} />
                        ))):"Search to have results"}
                    </div>
                    
                </div>
            </div>
        )
    }
}
export default Search;
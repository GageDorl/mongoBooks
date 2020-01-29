import React, {Component} from "react";
import Book from "../../components/Book"
import axios from "axios";

class Saved extends Component{
    constructor(props){
        super(props);
        this.state={
            books:""
        }
    }
    componentDidMount(){
        this.getBooks();
    }
    getBooks(){
        axios.get("/api/books").then((res)=>{
            this.setState({books:res.data})
            console.log(res)
        })
    }
    render(){
        return(
            <div>
                <div className="container">
                <div className="bunchOfBooks" >
                    {this.state.books?this.state.books.map(book=>
                        (<Book book={book} />)
                    ):"No saved books yet"}
                </div>
                </div>
            </div>
        )
    }
}
export default Saved;
import React from 'react';
import "./style.css"

function Book(props){
    return(
        <div>
            <div className="bookContainer" onClick={()=>console.log("click")}>
                <div className="row"><h1>{props.book.volumeInfo.title}</h1></div>
                
                <div className="row">
                    <div className="col-md-2">
                        {props.book.volumeInfo.imageLinks?<img className="bookImage" src={props.book.volumeInfo.imageLinks.thumbnail} />:""}
                    </div>
                    
                    <div className="col-md-10">
                        <div className="descriptions"  ><h4>{props.book.volumeInfo.authors}</h4>{props.book.volumeInfo.description}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Book;
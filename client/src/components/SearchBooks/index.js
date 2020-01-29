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
                    
                    <div className="col-md-9">
                        <div className="descriptions"  ><h4>{props.book.volumeInfo.authors}</h4>{props.book.volumeInfo.description}</div><br /> <a href={props.book.volumeInfo.infoLink}>Click here to view book page!</a>
                    </div>
                    <div className="col-md-1">
                        <button className="btn btn-danger" onClick={()=>props.save((props.book.volumeInfo.imageLinks.thumbnail?{
                            title:props.book.volumeInfo.title,
                            authors: props.book.volumeInfo.authors,
                            description:props.book.volumeInfo.description,
                            image:props.book.volumeInfo.imageLinks.thumbnail,
                            link:props.book.volumeInfo.infoLink,
                            id:props.book.id
                        }:
                        {
                            title:props.book.volumeInfo.title,
                            authors: props.book.volumeInfo.authors,
                            description:props.book.volumeInfo.description,
                            link:props.book.volumeInfo.infoLink,
                            id:props.book.id   
                        }))}>Save book</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Book;
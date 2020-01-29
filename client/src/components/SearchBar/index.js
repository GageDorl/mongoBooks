import React from "react";


 function SearchBar(props){
     return(
         <div>
             <div className="row" style={{marginBottom:"10px"}}>
                 <div className="col-sm-10">
                     <input type="text" id="searchParam" className="form-control" />
                 </div>
              <div className="col-sm-2">
                  <button className="btn btn-lg btn-primary" onClick={()=>props.search(document.getElementById("searchParam").value)}>Search</button>
              </div>
        </div>
         </div>
     )
 }
 export default SearchBar;
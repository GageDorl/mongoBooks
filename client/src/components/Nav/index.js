import React from 'react';
import {NavLink} from "react-router-dom"
 import "./style.css";

function Nav(){
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <a className="navbar-brand" href="/">
                BookSearch
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
    
                <div className="navbar-nav">
                    <NavLink exact to="/" className="nav-link" activeClassName="hidden">Saved</NavLink>
                    <NavLink exact to="/search" className="nav-link" activeClassName="hidden">Search</NavLink>
                </div>       
                
            </div>
        </nav>
    )
}
export default Nav;
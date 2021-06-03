import React, {Component } from 'react';
import { Link } from 'react-router-dom';


export default class Navbar extends Component {

    render(){
        return(

            <nav class="navbar navbar-dark bg-dark navbar-expand-lg">
              <div class="container-fluid">
              
                <Link to="/" className="navbar-brand">Exercise Tracker</Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
               
                <div className = "collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav mr-auto">
                    <li className = "navbar-item">
                    <Link to="/" className="nav-link">Exercises</Link>
                    </li>
                    <li className = "navbar-item">
                    <Link to="/create" className="nav-link">Create Exercise Log</Link>
                    </li>
                    <li className = "navbar-item">
                    <Link to="/user" className="nav-link">Create User</Link>
                    </li>

                </ul>
                </div>
                </div>
        </nav>
        );

    }

        
}
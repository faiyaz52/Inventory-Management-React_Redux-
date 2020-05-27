import React, { Component } from 'react'
import {Link} from 'react-router-dom'
export default class Navbar extends Component {
    render() {
        return (
            <div>
                <nav  className="navbar shadow fixed-top navbar-expand-sm navbar-dark bg-primary">
                    <div className="container">
                        <Link to="/" className="navbar-brand">
                            Invendry Mangement
                        </Link>
                        <div>
                            <Link to="/Anvantory/add"  className="btn btn-light ml-auto">
                            Add Invendry
                            </Link>
                        </div>
                    </div> 
                </nav>
            </div>
        )
    }
}

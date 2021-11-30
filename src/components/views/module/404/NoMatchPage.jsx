import React, { Component } from 'react'
import { Link } from 'react-router-dom';


export class NoMatchPage extends Component {
    render() {
        return (
            <div className="text-center mt-5">
                <h1>404</h1>
                <h3 className="h2 mb-3"><i className="fa fa-warning"></i> Oops! Page not found!</h3>
                <p className="h4 font-weight-normal">The page you requested was not found.</p>
                <Link to="/dashboard" className="btn btn-primary mt-4">Back to Home</Link>
            </div>
        )
    }
}

export default NoMatchPage

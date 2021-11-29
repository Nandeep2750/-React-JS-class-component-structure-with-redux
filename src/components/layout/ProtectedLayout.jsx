import React, { Component } from 'react'
import Header from '../views/common/Header.jsx'
// import Sidebar from '../views/common/Sidebar.jsx'

class ProtectedLayout extends Component {

    render() {
        return (
            <div className="">
                <Header />
                {/* <Sidebar /> */}
                {this.props.children}
            </div>
        )
    }
}

export default ProtectedLayout
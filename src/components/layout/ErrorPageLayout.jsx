import React, { Component } from 'react'

class AdminLayout extends Component {

    render() {
        return (
            <div className="">
                {this.props.children}
            </div>
        )
    }
}

export default AdminLayout
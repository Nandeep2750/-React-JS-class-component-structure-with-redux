import React, { Component } from 'react'

class GuestLayout extends Component {

    render() {
        return (
            <div className="">
                {this.props.children}
            </div>
        )
    }
}

export default GuestLayout
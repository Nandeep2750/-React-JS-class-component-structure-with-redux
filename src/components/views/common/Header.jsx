import React, { Component } from "react";
// import { Link } from "react-router-dom";
// import { Dropdown } from "react-bootstrap";
// import { connect } from "react-redux";

// import { Logo } from "../../image.jsx";
// import { userActions } from '../../redux/actions/user.actions'

class Header extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
        this.state = {};
    }

    // logout = () => {
    //     this.props.logout();
    // }

    render() {
        return (
            <div className="">
                Header
            </div>
        );
    }
}

// const mapStateToProps = (state) => ({
//     token: state.authentication.token,
//     userData: state.authentication.userData
// })

// const mapDispatchToProps = {
//     logout: userActions.logout
// }

export default Header;
// export default connect(mapStateToProps, mapDispatchToProps)(Header);
import React, { Component } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import FeatherIcon from 'feather-icons-react';

import { userActions } from '../../redux/actions/user.actions'
import { Logo } from "../../image"
import { connect } from "react-redux";
class Header extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
        this.state = {};
    }

    logout = () => {
        this.props.logout();
    }

    render() {
        return (
            <>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="/dashboard">
                            <img
                                alt=""
                                src={Logo}
                                width="30"
                                height="30"
                                className="d-inline-block align-top"
                            />
                            React Js
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="ml-auto">
                                <NavDropdown title={<FeatherIcon icon="user" />} id="collasible-nav-dropdown">
                                    <NavDropdown.Item href="#">Profile</NavDropdown.Item>
                                    <NavDropdown.Item href="#">Change Password</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#" onClick={this.logout}>Logout</NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </>
        );
    }
}

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = {
    logout: userActions.logout
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
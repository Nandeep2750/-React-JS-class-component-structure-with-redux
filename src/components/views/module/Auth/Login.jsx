import React, { Component } from 'react'
import SimpleReactValidator from 'simple-react-validator';
import { Card, Form, Button } from 'react-bootstrap'
import { toast } from 'react-toastify';

import { userActions } from '../../../redux/actions/user.actions'

import Api from "../../../helper/Api.js";
import { connect } from 'react-redux';
const api = new Api();
export class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            headers: {
                'Content-Type': 'application/json',
            },
            user: {
                email: 'eve.holt@reqres.in',
                password: 'cityslicka'
            }
        }

        this.validator = new SimpleReactValidator({
            className: 'text-danger',
            autoForceUpdate: this
        });
    }


    handleTextChange = (event) => {
        let name = event.target.name;
        let value = event.target.value;

        let user = this.state.user;
        user[name] = value

        this.setState({ user });
    }

    handleSubmit = (event) => {
        event.preventDefault();

        if (this.validator.allValid()) {
            api.post("/api/login", {
                headers: this.state.headers,
                data: this.state.user
            }).then(res => {
                if (res.status === 200) { 
                    this.props.login(res?.data);
                    this.props.history.push('/dashboard');
                } else {
                    toast.error(res.message);
                }
            })
        } else {
            this.validator.showMessages();
        }
    }


    render() {
        var { user } = this.state
        return (
            <div className="vh-100 d-flex align-items-center">
                <Card style={{ width: '24rem' }} className="mx-auto">
                    <Card.Body>
                        <Card.Title className="text-center">Login</Card.Title>
                        <Form onSubmit={this.handleSubmit} className="mt-3" >
                            <Form.Group className="mb-3">
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    type="email"
                                    name="email"
                                    placeholder="name@example.com"
                                    value={user.email}
                                    onChange={this.handleTextChange}
                                    onBlur={() => this.validator.showMessageFor('email')}
                                />
                                {this.validator.message('email', user.email, 'required|email')}
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                    value={user.password}
                                    onChange={this.handleTextChange}
                                    onBlur={() => this.validator.showMessageFor('password')}

                                />
                                {this.validator.message('password', user.password, 'required')}
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Login
                            </Button>
                        </Form>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    login: userActions.login
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
import React, { Component } from 'react'
import { Switch, Redirect } from 'react-router-dom'
import { Route } from 'react-router'
import LazyLoader from '@loadable/component'
import { connect } from 'react-redux';

// import {BASENAME} from '../config/constants'

// Layouts
import GuestLayout from '../layout/GuestLayout.jsx';
import ProtectedLayout from '../layout/ProtectedLayout';
import ErrorPageLayout from '../layout/ErrorPageLayout.jsx';
import Loader from '../views/common/Loader.jsx'

// Pages
const NoMatchPage = LazyLoader(() => import('../views/module/404/NoMatchPage'), { fallback: <Loader/> })

const Login = LazyLoader(() => import('../views/module/Auth/Login'), { fallback: <Loader/> })
const Dashboard = LazyLoader(() => import('../views/module/Dashboard'), { fallback: <Loader/> })

class Main extends Component {

    componentDidMount () {
    }

    render() {

        const GuestRoute = ({ component: Component, ...rest }) => {
            return (
                <GuestLayout>
                    <Route {...rest} render={props => (
                        // <Component {...props} />
                        this.props.loggedIn ? <Redirect to='/dashboard' /> : <Component {...props} /> 
                    )} />
                </GuestLayout>
            )
        }

        const ProtectedRoute = ({ component: Component, ...rest }) => {
            return (
                <ProtectedLayout>
                    <Route {...rest} render={props => (
                        // <Component {...props} />
                        this.props.loggedIn ? <Component {...props} /> : <Redirect to='/' />
                    )} />
                </ProtectedLayout>
            )
        }

        const ErrorPageRoute = ({ component: Component, ...rest }) => {
            return (
                <ErrorPageLayout>
                    <Route {...rest} render={props => (
                        // <Component {...props} />
                        this.props.loggedIn ? <Component {...props} /> : <Redirect to='/' />
                    )} />
                </ErrorPageLayout>
            )
        }

        return (
            <div>
                <Switch>
                    <GuestRoute exact={true} path='/' component={Login} />

                    <ProtectedRoute exact={true} path='/dashboard' component={Dashboard} />
                    
                    <ErrorPageRoute component={NoMatchPage} />
                </Switch>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { loggedIn: state.authentication.loggedIn }
}

const mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
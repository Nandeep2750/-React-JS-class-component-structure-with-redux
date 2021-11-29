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

// const Profile = LazyLoader(() => import('../views/module/Profile/index.jsx'), { fallback: <Loader/> })
// const Dashboard = LazyLoader(() => import('../views/module/Dashboard/index.jsx'), { fallback: <Loader/> })
// const Admins = LazyLoader(() => import('../views/module/Admins/index.jsx'), { fallback: <Loader/> })
// const Faqs = LazyLoader(() => import('../views/module/Faqs/index.jsx'), { fallback: <Loader/> })

// const Tutors = LazyLoader(() => import('../views/module/Tutors/index.jsx'), { fallback: <Loader/> })
// const Students = LazyLoader(() => import('../views/module/Students/index.jsx'), { fallback: <Loader/> })

// const StaticPages = LazyLoader(() => import('../views/module/StaticPages/index.jsx'), { fallback: <Loader/> })
// const AddEditStaticPage = LazyLoader(() => import('../views/module/StaticPages/AddEditStaticPage.jsx'), { fallback: <Loader/> })

// const ContactUs = LazyLoader(() => import('../views/module/ContactUs/index.jsx'), { fallback: <Loader/> })

// const SubscriptionPackages = LazyLoader(() => import('../views/module/SubscriptionPackages/index.jsx'), { fallback: <Loader/> })
// const PackageDetail = LazyLoader(() => import('../views/module/SubscriptionPackages/PackageDetail.jsx'), { fallback: <Loader/> })

// const Cases = LazyLoader(() => import('../views/module/Cases/index.jsx'), { fallback: <Loader/> })
// const CaseDetail = LazyLoader(() => import('../views/module/Cases/CaseDetail.jsx'), { fallback: <Loader/> })
// const CaseLabs = LazyLoader(() => import('../views/module/Cases/CaseLabs.jsx'), { fallback: <Loader/> })
// const CaseMaterials = LazyLoader(() => import('../views/module/Cases/CaseMaterials.jsx'), { fallback: <Loader/> })

class Main extends Component {

    componentDidMount () {
    }

    render() {

        const GuestRoute = ({ component: Component, ...rest }) => {
            return (
                <GuestLayout>
                    <Route {...rest} render={props => (
                        <Component {...props} />
                        // this.props.loggedIn ? <Redirect to='/dashboard' /> : <Component {...props} /> 
                    )} />
                </GuestLayout>
            )
        }

        const ProtectedRoute = ({ component: Component, ...rest }) => {
            return (
                <ProtectedLayout>
                    <Route {...rest} render={props => (
                        <Component {...props} />
                        // this.props.loggedIn ? <Component {...props} /> : <Redirect to='/' />
                    )} />
                </ProtectedLayout>
            )
        }

        const ErrorPageRoute = ({ component: Component, ...rest }) => {
            return (
                <ErrorPageLayout>
                    <Route {...rest} render={props => (
                        <Component {...props} />
                        // this.props.loggedIn ? <Component {...props} /> : <Redirect to='/' />
                    )} />
                </ErrorPageLayout>
            )
        }

        return (
            <div>
                <Switch>
                    <GuestRoute exact={true} path='/' component={Login} />

                    {/* <ProtectedRoute exact={true} path='/profile' component={Profile} />
                    <ProtectedRoute exact={true} path='/dashboard' component={Dashboard} />

                    <ProtectedRoute exact={true} path='/admins' component={Admins} />
                    <ProtectedRoute exact={true} path='/faqs' component={Faqs} />

                    <ProtectedRoute exact={true} path='/tutors' component={Tutors} />

                    <ProtectedRoute exact={true} path='/students' component={Students} />

                    <ProtectedRoute exact={true} path='/static-pages/' component={StaticPages} />
                    <ProtectedRoute exact={true} path='/add-static-page' component={AddEditStaticPage} />
                    <ProtectedRoute exact={true} path='/edit-static-page/:id' component={AddEditStaticPage} />

                    <ProtectedRoute exact={true} path='/contact-us' component={ContactUs} />

                    <ProtectedRoute exact={true} path='/subscription-packages' component={SubscriptionPackages} />
                    <ProtectedRoute exact={true} path='/subscription-package/:id' component={PackageDetail} />

                    <ProtectedRoute exact={true} path='/cases' component={Cases} />
                    <ProtectedRoute exact={true} path='/case/:id' component={CaseDetail} />
                    <ProtectedRoute exact={true} path='/lab/:id' component={CaseLabs} />
                    <ProtectedRoute exact={true} path='/material/:id' component={CaseMaterials} /> */}
                    
                    <ErrorPageRoute component={NoMatchPage} />
                </Switch>
            </div>
        )
    }
}

// const mapStateToProps = (state) => {
//     return { loggedIn: state.authentication.loggedIn }
// }

export default Main;
// export default connect(mapStateToProps, null)(Main);
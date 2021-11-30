import React, { Component } from 'react'

export class index extends Component {
    render() {
        return (
            <div>

                <div class="container">
                    <div class="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
                        <h1 class="display-4">Pricing</h1>
                        <p class="lead">We are providing different types of IT-related solutions. Here is the pricing for different types of services. Find the best one for you and contact us for any queries.</p>
                    </div>
                    <div class="card-deck mb-3 text-center">
                        <div class="card mb-4 box-shadow">
                            <div class="card-header">
                                <h4 class="my-0 font-weight-normal">Free</h4>
                            </div>
                            <div class="card-body">
                                <h1 class="card-title pricing-card-title">$0 <small class="text-muted">/ mo</small></h1>
                                <ul class="list-unstyled mt-3 mb-4">
                                    <li>1 user included</li>
                                    <li>Email support</li>
                                    <li>Help center access</li>
                                </ul>
                                <a href="https://nandeepbarochiya.com" target="_blank" rel="noreferrer" class="btn btn-lg btn-block btn-outline-primary">Get started</a>
                            </div>
                        </div>
                        <div class="card mb-4 box-shadow">
                            <div class="card-header">
                                <h4 class="my-0 font-weight-normal">Pro</h4>
                            </div>
                            <div class="card-body">
                                <h1 class="card-title pricing-card-title">$15 <small class="text-muted">/ mo</small></h1>
                                <ul class="list-unstyled mt-3 mb-4">
                                    <li>5 users included</li>
                                    <li>Priority email support</li>
                                    <li>Help center access</li>
                                </ul>
                                <a href="https://nandeepbarochiya.com" target="_blank" rel="noreferrer" class="btn btn-lg btn-block btn-primary">Get started</a>
                            </div>
                        </div>
                        <div class="card mb-4 box-shadow">
                            <div class="card-header">
                                <h4 class="my-0 font-weight-normal">Enterprise</h4>
                            </div>
                            <div class="card-body">
                                <h1 class="card-title pricing-card-title">$29 <small class="text-muted">/ mo</small></h1>
                                <ul class="list-unstyled mt-3 mb-4">
                                    <li>10 users included</li>
                                    <li>Phone and email support</li>
                                    <li>Help center access</li>
                                </ul>
                                <a href="https://nandeepbarochiya.com" target="_blank" rel="noreferrer" class="btn btn-lg btn-block btn-outline-primary">Contact us</a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default index

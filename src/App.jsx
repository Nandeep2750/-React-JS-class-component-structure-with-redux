import React, { Component } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import './assets/css/style.css';

import { BASENAME } from './components/config/constants';
import Loader from './components/views/common/Loader'
import Main from './components/container/Main'

class App extends Component {

  constructor(props) {
      super(props);
      this.state = { loading: true };
  }
  
  componentDidMount(){
    //   this.setState({ loading: false })
      setTimeout(() => this.setState({ loading : false }), 500); // simulates an async action, and hides the spinner
  }

  render() {
      const { loading } = this.state;
      let renderlayout = '';

      if (loading) {
          renderlayout =  <Loader /> 
      } else {
          renderlayout = <Main />
      }

      return (
          <div>
              <BrowserRouter basename={BASENAME}>
                  {renderlayout}
                  <ToastContainer autoClose={3000} />
              </BrowserRouter>
          </div>
      )
  }
}

export default App;
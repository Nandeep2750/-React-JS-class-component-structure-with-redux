import React, { Component } from 'react'
import { BrowserRouter } from 'react-router-dom'
import './App.css';
import './assets/css/style.css';
import { ToastContainer } from 'react-toastify';



import Loader from './components/views/common/Loader'
import Main from './components/container/Main'

import { BASENAME } from './components/config/constants';

class App extends Component {

  constructor(props) {
      super(props);
      this.state = { loading: true };
  }
  
  componentDidMount(){
      this.setState({ loading: false })
      setTimeout(() => this.setState({ loading : false }), 1500); // simulates an async action, and hides the spinner
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
                  <ToastContainer autoClose={3000} className="toast-container" />
              </BrowserRouter>
          </div>
      )
  }
}

export default App;
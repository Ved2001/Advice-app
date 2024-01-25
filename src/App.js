import './App.css';
import axios from 'axios';

import React, { Component } from 'react'

class App extends Component {
  state = { advice: '' };
  componentDidMount() {
    this.fetchadvice();
  }
  fetchadvice = () => {
    axios.get('https://api.adviceslip.com/advice')
      .then((response) => {
        const { advice } = response.data.slip;
        this.setState({ advice });
      }).catch((error) => {
        console.log(error.message)
      })
  }
  render() {
    const { advice } = this.state;
    return (
      <>
        <div className="app">
          <div className="card button-85">
            <h1 className='heading'>{advice}</h1>
            <button class="button-85" role="button" onClick={this.fetchadvice}>
              <span>GIVE ME ADVICE!</span>
            </button>
          </div>
        </div>
      </>
    )
  }
}


export default App;

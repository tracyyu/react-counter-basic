import React, { Component } from 'react';
import Header from './Header';
import Counter from './Counter';
import '../styles/styles.scss';

class App extends Component {
  state = {
    title: 'Counter'
  } 

  render() {
    return (
      <div className="App">
        <Header title={this.state.title}/>
        <div className="mt-5">
          <Counter />
      </div>
      </div>
    );
  }
}

export default App;

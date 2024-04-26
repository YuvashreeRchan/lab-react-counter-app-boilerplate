
import React from 'react';
import './App.css'

class CounterApp extends React.Component {
  state = { count: 0,};

  incCount = () => {
    this.setState({ count: this.state.count + 1 });
  };

  decCount = () => {
    if (this.state.count > 0) {
      this.setState({ count: this.state.count - 1 });
    }
  };

  resetCount = () => {
    this.setState({ count: 0 });
  };

  render() {
    return (
      <>
      <div class="container">
        <h1>Counter App</h1>
        <p className="counter">Count: {this.state.count}</p>
        <div>
          <button onClick={this.incCount}>+</button>
          <button onClick={this.decCount}>-</button>
          <button onClick={this.resetCount}>Reset</button>
        </div>
      </div>
      </>
    );
  }
}

export default CounterApp;

import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Counter extends Component {
    state = {
        count: 0
    }

    incrementCount = () => {
        this.setState(prevState => ({
            count: prevState.count + 1
        }));
    }

    decrementCount = () => {
        this.setState(prevState => ({
            count: prevState.count - 1
        }));
        console.log(this.state.count);
    }

    resetCount = () => {
        this.setState({ count: 0 });
    }

    render() {
      return (
        <div className="container-fluid">
            <div className="counter border border-secondary rounded">
                <div className="counter-display d-flex align-items-center bg-light text-secondary">
                    <div className="mx-auto display-1">
                        {this.state.count}
                    </div>
                </div>
                <div className="counter-button-panel d-flex flex-row">
                    <button className="btn btn-danger w-100">
                        <i className="fas fa-minus fa-2x" onClick={this.decrementCount}></i>
                    </button>
                    <button className="btn btn-warning w-100" onClick={this.resetCount}>
                        <i className="fas fa-sync-alt fa-2x"></i>
                    </button>
                    <button className="btn btn-success w-100" onClick={this.incrementCount}>
                        <i className="fas fa-plus fa-2x"></i>
                    </button>
                </div>    
            </div>
        </div>
      );
    }
  }
  
    Counter.propTypes = {
        count: PropTypes.number
    };

  export default Counter;
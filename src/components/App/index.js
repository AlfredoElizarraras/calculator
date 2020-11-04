import React, { Component } from 'react';
import './index.css';
import Display from '../Display';
import ButtonPanel from '../ButtonPanel';
import calculate from '../../logic/calculate';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(buttonName) {
    const { total, next, operation } = calculate(this.state, buttonName);
    this.setState({
      total,
      next,
      operation,
    });
  }

  render() {
    const { total, next, operation } = this.state;
    const result = next && operation
      ? `${total} ${operation} ${next}`
      : `${total}`;
    return (
      <div className="app flex flex-column">
        <Display operationResult={result} />
        <ButtonPanel clickHandler={this.handleClick} />
      </div>
    );
  }
}

export default App;

import React from 'react';
class App extends React.Component {
  constructor(props) {
    super(props);
    console.log('hello constructor');
  }

  componentDidMount(){
    console.log('hello componentDidMount');
  }

  componentDidUpdate(){
    console.log('hello componentDidUpdate');
  }

  componentWillUnmount(){
    console.log('hello componentWillUnmount');
  }

  state = {
    count: 0,
  };

  add = () => {
    this.setState(current => ({
      count: current.count + 1,
    }));
  }

  minus = () => {
    this.setState(current => ({
      count: current.count - 1,
    }));
  };

  render() {
    console.log('hello render');
    return (
      <div>
        <h1>The number is: {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  }
}

export default App;

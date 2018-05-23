import React, {Component} from 'react';
import './App.css';
import FancyMenu from './FancyMenu';

const sketches = require('./sketches');

let optionsArray = [];

class App extends Component {

  constructor(props) {
    super(props);
    for (var key in sketches) {
      optionsArray.push(<option value={key} key={key}>{key}</option>)
    }
    this.state = {
      value: optionsArray[0].key
    };
  }

  handleChange = (event) => {
    this.setState({value: event.target.value});
  }

  render = () => {
    return(<FancyMenu/>)
    /*return (<div className="App">
      <div>
        <select value={this.state.value} onChange={this.handleChange}>
          {optionsArray.map(opt => opt)}
        </select>
      </div>
      <P5Wrapper sketch={sketches[this.state.value]}/>
    </div>);*/
  }
}

export default App;

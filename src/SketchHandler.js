import React, {Component} from 'react';
import './App.css';
import P5Wrapper from 'react-p5-wrapper';

const sketches = require('./sketches');

class SketchHandler extends Component {

  render = () => {
    return (<div>
      {this.props.sketch?<P5Wrapper sketch={sketches[this.props.sketch]}/>:<P5Wrapper sketch={sketches["HelloWorld"]}/>}
      </div>
      );
  }
}

export default SketchHandler;

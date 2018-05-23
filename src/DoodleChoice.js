import React, {Component} from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

export default class DoodleChoice extends Component {

  constructor(props) {
    super(props);
    this.state = {
      choice: this.props.choice
    }
  }

  handleClick = () => this.props.changeChoice(this.state.choice);

  render = () => {
    return (<ListItem button onClick={() => this.handleClick()}>
      <ListItemText primary={this.state.choice}/>
    </ListItem>);
  }
}

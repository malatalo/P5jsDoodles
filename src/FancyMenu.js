import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import DoodleChoice from './DoodleChoice';
import P5Wrapper from 'react-p5-wrapper';

const sketches = require('./sketches');

const drawerWidth = 200;

const styles = theme => ({
  root: {
    flexGrow: 1,
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawerPaper: {
    position: 'relative',
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
    minWidth: 0, // So the Typography noWrap works
  },
  toolbar: theme.mixins.toolbar,
});

class FancyMenu extends Component {

  constructor (props){
    super(props);
    let optionsArray = [];
    for (var key in sketches) {
      optionsArray.push(key)
    }
    this.state={
      sketchChoice: null,
      optionsArray: optionsArray
    }
  }

  changeChoice = (newChoice) => this.setState({sketchChoice: newChoice});

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="absolute" className={classes.appBar}>
          <Toolbar>
            <Typography variant="title" color="inherit" noWrap>
              P5.js doodles - {this.state.sketchChoice?this.state.sketchChoice:"Select one"}
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" classes={{paper: classes.drawerPaper,}}>
          <div className={classes.toolbar} />
          {this.state.optionsArray.map(opt => <DoodleChoice choice={opt} key={opt} changeChoice={this.changeChoice}/>)}
        </Drawer>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <P5Wrapper sketch={sketches[this.state.sketchChoice]}/>
        </main>
      </div>
    );
  }
}

FancyMenu.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FancyMenu);

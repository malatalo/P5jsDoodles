import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import DoodleChoice from './DoodleChoice';
import P5Wrapper from './slin12/P5Wrapper';

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
  button: {
    color: '#ffffff',
  },
  flex: {
    flex:1,
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
    let initSketch = window.location.hostname === 'localhost'?optionsArray[0]:null;
    this.state={
      sketchChoice: initSketch,
      optionsArray: optionsArray,
      sortAlg: "bubble",
      status: "",
    }
  }

  changeChoice = (newChoice) => {
    this.setState({sketchChoice: null}, () => {
      this.workAround(newChoice)
    });
  }

  // Workaround for P5 not unmounting (endless rendering) after sketch change
  workAround = (newChoice) => {
    this.setState({sketchChoice: newChoice});
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="absolute" className={classes.appBar}>
          <Toolbar>
            <Typography variant="title" color="inherit" noWrap>
              P5.js doodles - {this.state.sketchChoice?this.state.sketchChoice:"Select one"}
            </Typography>
            <div className={classes.flex}></div>{/*fugly but works O:)*/}
            <Button onClick={() => window.location.href="https://github.com/alamiikka/P5jsDoodles"} variant="outlined" color="primary" className={classes.button}>
              View on Github
            </Button>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" classes={{paper: classes.drawerPaper,}}>
          <div className={classes.toolbar} />
          {this.state.optionsArray.map(opt => <DoodleChoice choice={opt} key={opt} changeChoice={this.changeChoice}/>)}
        </Drawer>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          {this.state.sketchChoice&&<P5Wrapper sketch={sketches[this.state.sketchChoice]} sortAlg={this.state.sortAlg} status={this.state.status}/>}

          {this.state.sketchChoice === "Sort" ? 
            <div>
              <Button variant="raised" color="primary" onClick={()=>this.setState({sortAlg: "bubble", status: ""})}>
                Bubble
              </Button> &nbsp;
              <Button variant="raised" color="primary" onClick={()=>this.setState({sortAlg: "selection", status: ""})}>
                Selection
              </Button> &nbsp;
              <Button variant="raised" color="primary" onClick={()=>this.setState({sortAlg: "bogo", status: ""})}>
                Bogo
              </Button> &nbsp;
              <br/><br/>
              <Button variant="raised" color="secondary" onClick={()=>this.setState({status: "stop"})}>
                stop
              </Button> &nbsp;
              <Button variant="raised" color="secondary" onClick={()=>this.setState({status: "resume"})}>
                resume
              </Button>
            </div>
            :''
          }

        </main>
      </div>
    );
  }
}

FancyMenu.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FancyMenu);

import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {withRouter} from 'react-router-dom'

class Header extends React.Component {
  handleClick=(actionURL)=> {
    this.props.history.push('/'+actionURL)
  }
  render() {
    return (
      <AppBar position="static">
        <Toolbar>
          <Button onClick={()=>this.handleClick('sample')}>Sample</Button>
        </Toolbar>
      </AppBar>
    )
  }
}

export default withRouter(Header)
import React from 'react';
import history from './history';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {withStyles} from '@material-ui/core/styles';

const styles = (theme) => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  'appBar': {
    position: 'relative',
  },
  'toolbarTitle': {
    flex: 1,
  },
});

function NavBar(props) {
  const {classes} = props;

  return (
    <React.Fragment>
      <AppBar position="static" color="default" className={classes.appBar}>
        <Toolbar>
          <Typography
            variant="h6"
            color="inherit"
            noWrap
            className={classes.toolbarTitle}
          >
            LOUD PACKS
          </Typography>
          <Button onClick={() => history.push('/')}>Home</Button>
          <Button onClick={() => history.push('/browse')}>Browse</Button>
          <Button onClick={() => history.push('/about-us')}>About Us</Button>
          <Button onClick={() => history.push('/ar-view')}>AR</Button>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavBar);

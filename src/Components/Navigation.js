import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
}));

const TopNavigationHeader = (props) => {
  const classes = useStyles();
    const setShowList = props.setShowList;
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            OCR DETECTOR
          </Typography>
          <Button color="inherit" onClick={() => setShowList(false)} >SCAN</Button>
          <Button color="inherit" onClick={() => setShowList(true)}>Show List</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default TopNavigationHeader;

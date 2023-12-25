import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Typography } from '@material-ui/core';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

const useStyles = makeStyles((theme) => ({
  input: {
    display: 'none', // Hide the default input element
  },
  dropzone: {
    minHeight: '200px',
    border: '2px dashed #aaa',
    borderRadius: '4px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    padding: theme.spacing(2),
  },
  uploadIcon: {
    fontSize: '3em',
    marginBottom: theme.spacing(1),
  },
}));

const LargeFileInput = (props) => {
  const classes = useStyles();

  return (
    <label htmlFor="file-upload" className={classes.dropzone}>
      <input
        id="file-upload"
        type="file"
        className={classes.input}
        onChange={(e) => {props.handleFileChange(e)}}
      />
      <CloudUploadIcon className={classes.uploadIcon} />
      <Typography variant="h6">Drag & Drop files here or click to upload</Typography>
      <Button variant="contained" color="primary" component="span">
        Choose File
      </Button>
    </label>
  );
};

export default LargeFileInput;

import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Modal, Typography, Grid, Button } from "@material-ui/core";
import CancelIcon from "@mui/icons-material/Cancel";
import { Edit } from "@material-ui/icons";
import "./DisplayStyles.css";
import CustomTextField from "./CustomTextField";

// Modal styles
const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  cancelIcon: {
    cursor: "pointer",
    borderRadius: "50%",
    backgroundColor: "#ff0000", // Change color as desired
    color: "#ffffff", // Change color as desired
    width: "30px", // Adjust width as needed
    height: "30px", // Adjust height as needed
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  editIcon: {
    cursor: "pointer",
    borderRadius: "50%",
    width: "30px", // Adjust width as needed
    height: "30px", // Adjust height as needed
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "right",
  },
  containerItem: {
    marginLeft: "8px",
  },
  editButton: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText,
    marginTop: "5px",
    "&:hover": {
      backgroundColor: theme.palette.secondary.dark,
    },
  },
}));

const DisplayInfo = (props) => {
  const classes = useStyles();
  const [editMode, setEditMode] = useState(false);
  const { showModal, setShowModal } = props;
  const {
    identification_number,
    name,
    last_name,
    date_of_birth,
    date_of_issue,
    date_of_expiry,
  } = props.idDetails;
  console.log("props in displayInfo", props);
  const err = {
    identification_number: "",
    name: "",
    last_name: "",
    date_of_birth: "",
    date_of_issue: "",
    data_of_expiry: "",
  };
  const [errors, setErrors] = useState(err);

  const handleEditSubmit = () => {}

  const handleEditField = (e) => {};

  const objArr1 = [
    {
      label: "IDENTIFICATION NUMBER",
      value: identification_number,
      onchange: handleEditField,
      error: errors[identification_number],
      editMode,
    },
    {
      label: "NAME",
      value: name,
      onchange: handleEditField,
      error: errors[name],
      editMode,
    },
    {
      label: "LAST NAME",
      value: last_name,
      onchange: handleEditField,
      error: errors[last_name],
      editMode,
    },
  ];

  const objArr2 = [
    {
      label: "DATE OF BIRTH",
      value: date_of_birth,
      onchange: handleEditField,
      error: errors[date_of_birth],
      editMode,
    },
    {
      label: "DATE OF ISSUE",
      value: date_of_issue,
      onchange: handleEditField,
      error: errors[date_of_issue],
      editMode,
    },
    {
      label: "DATE OF EXPIRY",
      value: date_of_birth,
      onchange: handleEditField,
      error: errors[date_of_expiry],
      editMode,
    },
  ];

  const handleClose = () => {
    setShowModal(false);
  };

  const handleEdit = () => {
    setEditMode(true);
  };

  return (
    <div>
      <Modal
        open={showModal}
        onClose={handleClose}
        className={classes.modal}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div className={classes.paper}>
          <Grid container className={classes.container}>
            <Grid item onClick={handleEdit} className={classes.containerItem}>
              <div className={classes.editIcon}>
                <Edit />
              </div>
            </Grid>
            <Grid item onClick={handleClose} className={classes.containerItem}>
              <div className={classes.cancelIcon}>
                <CancelIcon />
              </div>
            </Grid>
          </Grid>
          <Typography variant="h6" id="modal-title">
            RECORD DETAILS
          </Typography>
          <Grid container alignItems="center">
            <Grid item>
              <Grid container direction="row" spacing={2}>
                <Grid item className={classes.idFields}>
                  {objArr1.map((obj) => (
                    <CustomTextField
                      value={obj.value}
                      label={obj.label}
                      onChange={obj.onchange}
                      error={obj.error}
                      editMode={obj.editMode}
                    />
                  ))}
                </Grid>
                <Grid item className={classes.idFields}>
                  {objArr2.map((obj) => (
                    <CustomTextField
                      value={obj.value}
                      label={obj.label}
                      onChange={obj.onchange}
                      error={obj.error}
                      editMode={obj.editMode}
                    />
                  ))}
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          {editMode && (
            <Button
              variant="contained"
              className={classes.editButton}
              onClick={handleEditSubmit}
            >
              Submit
            </Button>
          )}
        </div>
      </Modal>
    </div>
  );
};

export default DisplayInfo;

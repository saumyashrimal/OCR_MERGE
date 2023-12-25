import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextField,
} from "@mui/material";
import DisplayInfo from "./DisplayInfo";

const ListOfIds = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [data, setData] = useState([]);
  const [details, setDetails] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const getDetails = async () => {
    let resp = await fetch("http://localhost:8080/OCR/getOCRDetails").then((resp) => resp.json());
    console.log("resp = ", resp);
    setData(resp?.response);
  };
  useEffect(() => {
    getDetails();
  }, []);

  // Function to filter data based on search term
  const handleOpen = (details) => {
    setShowModal(true);
    setDetails(details);
  };


  return (
    <>
      {data.length && (
        <div>
          {/* Search bar */}
          <TextField
            label="Search by identification_number, name, last name...."
            variant="outlined"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{ margin: 20, width: "80%" }}
          />

          {/* Table */}
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>IDENTIFICATION NUMBER</TableCell>
                  <TableCell>NAME</TableCell>
                  <TableCell>LAST NAME</TableCell>
                  <TableCell>DATE OF BIRTH</TableCell>
                  <TableCell>DATE OF ISSUE</TableCell>
                  <TableCell>DATE OF EXPIRY</TableCell>
                  <TableCell>ACTIONS</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((row) => (
                  <TableRow key={row._id}>
                    <TableCell>{row.identification_number}</TableCell>
                    <TableCell>{row.name}</TableCell>
                    <TableCell>{row.last_name}</TableCell>
                    <TableCell>{row.date_of_birth}</TableCell>
                    <TableCell>{row.date_of_issue}</TableCell>
                    <TableCell>{row.date_of_expiry}</TableCell>
                    <TableCell>
                      <button onClick={(e) => handleOpen(row)}>OPEN</button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          {showModal && <DisplayInfo idDetails={details} showModal={showModal} setShowModal={setShowModal} />}
        </div>
      )}
    </>
  );
};

export default ListOfIds;

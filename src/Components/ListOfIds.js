import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TextField } from '@mui/material';

const ListOfIds = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [data, setData] = useState([
    // Replace this with your data (an array of objects with properties for each column)
    { id: 1, column1: 'Value1', column2: 'Value2', column3: 'Value3', column4: 'Value4', column5: 'Value5', column6: 'Value6', column7: 'Value7' },
    // Add more data as needed
  ]);
  useEffect(() => {
    // fetch details
  }, [])

  // Function to filter data based on search term
  const filteredData = data.filter(item =>
    Object.values(item).some(value =>
      value.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );
  const handleOpen = (identification_number) => {

  }

  return (
    <div>
      {/* Search bar */}
      <TextField
        label="Search by identification_number, name, last name...."
        variant="outlined"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{margin: 20, width: "80%" }}
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
            {filteredData.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.column1}</TableCell>
                <TableCell>{row.column2}</TableCell>
                <TableCell>{row.column3}</TableCell>
                <TableCell>{row.column4}</TableCell>
                <TableCell>{row.column5}</TableCell>
                <TableCell>{row.column6}</TableCell>
                <TableCell>
                    <button onClick={(e) => handleOpen(row.identification_number) }>OPEN</button>
                    <button onClick={(e) => handleOpen(row.identification_number) }>Edit</button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default ListOfIds;
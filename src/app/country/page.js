"use client"
import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import Paper from "@mui/material/Paper";
import axios from "axios";
const Country = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();

  }, [data]);

  const fetchData = async () => {
  try {
    if (search.length > 2) {
      const response = await axios.get(`https://restcountries.com/v3.1/name/${search}`);
      const allData = response.data;

     
      // const filteredData = allData.filter(country => country.name.common.slice(0, 3).toLowerCase() === search.slice(0, 3).toLowerCase());

      setData(response.data);
    } else {
      const response = await axios.get('https://restcountries.com/v3.1/all');
      const records = response.data;
      setData(records); 
    }
  } catch (error) {
    console.error('An error occurred:', error);
  }
};

  const [search, setSearch] = useState("");

  const handleSearch = async (e) => {

    setSearch(e.target.value);
  };
  return (
    <>
      <main className='d-flex justify-content-center py-5'>
        <div style={{ marginLeft: '10px' }}>
          <h1 className="d-flex justify-content-center">Countries List</h1>
          <div className='inner' >
            <TextField
              type='text'
              label='Search by name'
              value={search}
              placeholder='Search by name'
              onChange={handleSearch}
            />
            {/* <div style={{ marginTop: '10px'}} >
        <Button variant='contained' onClick={handleSearch}>Search</Button>
        </div> */}
          </div>
        </div>
        <TableContainer component={Paper}>

          <Table className="min-w-full table-auto">
            <TableHead>
              <TableRow className="bg-gray-800">
                <TableCell className="px-16 py-2">
                  <span className="text-gray-200">Name</span>
                </TableCell>
                <TableCell className="px-16 py-2">
                  <span className="text-gray-200">Code</span>
                </TableCell>
                <TableCell className="px-16 py-2">
                  <span className="text-gray-200">Currency</span>
                </TableCell>
                <TableCell className="px-16 py-2">
                  <span className="text-gray-200">Capital</span>
                </TableCell>
                <TableCell className="px-16 py-2">
                  <span className="text-gray-200">Flag</span>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody className="bg-gray-200">
              {data.map((record, index) => (
                <TableRow key={index} className="bg-gray-50 text-center">
                  <TableCell className="px-16 py-2 flex flex-row items-center">
                    <span className="text-center ml-2 font-semibold">
                      {record.name?.common || "N/A"}
                    </span>
                  </TableCell>
                  <TableCell className="px-16 py-2">
                    <span>{record.cca2 || "N/A"}</span>
                  </TableCell>
                  <TableCell className="px-16 py-2">
                    <span>{record.currencies && Object.values(record.currencies)[0].name}</span>
                  </TableCell>
                  <TableCell className="px-16 py-2">
                    <span>{record.capital?.[0] || "N/A"}</span>
                  </TableCell>
                  <TableCell className="px-16 py-2">
                    <span>

                      <img
                        src={record.flags?.png || ''}
                        alt="Flag"
                        width={30}
                        height={20}
                      />
                    </span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </main>
    </>
  );
};

export default Country;

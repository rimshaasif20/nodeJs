import React from "react";
import { BiEdit, BiTrashAlt } from "react-icons/bi";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, userToBeUpdated } from "../Redux/action";

export default function CustomTable() {
 
  
  const users = useSelector((state) => state.users.users);
 if (!users || users.length ===0) {
    return <p>No users available</p>;
  }
  const dispatch=useDispatch();
debugger;
  const handleDelete=(id)=>{
dispatch(deleteUser(id));
 }
   const handleUpdate = (user) => {
    dispatch(userToBeUpdated(user));
  
  };

 
  return (
    <TableContainer component={Paper}>
      <Table className="min-w-full table-auto">
        <TableHead>
          <TableRow className="bg-gray-800">
            <TableCell className="px-16 py-2">
              <span className="text-gray-200">Name</span>
            </TableCell>
            <TableCell className="px-16 py-2">
              <span className="text-gray-200">Email</span>
            </TableCell>
            <TableCell className="px-16 py-2">
              <span className="text-gray-200">Salary</span>
            </TableCell>
            <TableCell className="px-16 py-2">
              <span className="text-gray-200">Birthday</span>
            </TableCell>
            <TableCell className="px-16 py-2">
              <span className="text-gray-200">Status</span>
            </TableCell>
            <TableCell className="px-16 py-2">
              <span className="text-gray-200">Actions</span>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody className="bg-gray-200">
           {users.map((user) => (
            <TableRow key={user.id} className="bg-gray-50 text-center">
              <TableCell className="px-16 py-2 flex flex-row items-center">
                <span className="text-center ml-2 font-semibold">
                  {user.firstname} 
                </span>
                <span className="text-center ml-2 font-semibold">
                  {user.lastname}
                </span>
                
              </TableCell>
              <TableCell className="px-16 py-2">
                <span>{user.email}</span>
              </TableCell>
              <TableCell className="px-16 py-2">
                <span>{user.salary}</span>
              </TableCell>
              <TableCell className="px-16 py-2">
                <span>{user.date}</span>
              </TableCell>
              <TableCell className="px-16 py-2">
                <Button variant="contained" color="success">
                  {user.status}
                </Button>
              </TableCell>
              <TableCell className="px-16 py-2 flex justify-around gap-5">
                <Button onClick={() => handleUpdate(user)}>
                  <BiEdit size={25} color="rgb(34,197,94)" />
                </Button>
                <Button onClick={() => handleDelete(user.id)}>
                  <BiTrashAlt size={25} color="rgb(244,63,94)" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}


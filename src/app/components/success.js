"use client"
import React from "react";
import { BiCheck } from "react-icons/bi";
import Paper from "@mui/material/Paper";
// import Typography from "@mui/material/Typography";
// import CheckCircleIcon from "@mui/icons-material/CheckCircle";

export default function Success({ message }) {
  return (
    <div className="success container mx-auto">
      <Paper
        elevation={3}
        className="flex justify-center mx-auto border border-yellow-200 bg-yellow-400 w-3/6 text-gray-900 text-md my-4 py-2 text-center"
      >
        {message} <BiCheck size={25} color={"rgb(34,197,94)"} />
      </Paper>
    </div>
  );
}

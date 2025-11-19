import React from "react";
import { Box } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import DashBoard from "./Pages/DashBoard";
import SalesOrder from "./Pages/SalesOrder";
import LeftSide from "./Components/LeftSide";

export default function App() {
  return (
    <Box sx={{ display: "grid", gridTemplateColumns: "0.8fr 3.8fr" }}>
      <LeftSide/>
      <Routes>
        <Route path="/jobs/salesorder" element={<SalesOrder />} />
        <Route path="/" element={<DashBoard />} />
      </Routes>
    </Box>
  );
}

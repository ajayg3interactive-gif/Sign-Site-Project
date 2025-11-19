import React from "react";
import LeftSide from "../Components/LeftSide";
import { Box, Typography } from "@mui/material";
import SearchBar from "../Components/SearchBar";

export default function DashBoard() {
  return (
    <Box>
      <SearchBar />
      <Typography
        sx={{
          fontWeight: "600",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          height: "200px",
          justifyContent: "center",
        }}
      >
        Dashboard
      </Typography>
    </Box>
  );
}

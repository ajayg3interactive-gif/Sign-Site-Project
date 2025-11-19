import { Box, InputAdornment, TextField } from "@mui/material";
import React from "react";
import {
  BellIcon,
  LigthIcon,
  OptionIcon,
  SearchIcon,
} from "../assets/Icons/Menuicons";
import dp from "../assets/man-438081_960_720.png"

export default function SearchBar() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        p: "1rem 1.5rem",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
        <OptionIcon />
        <Box
          sx={{ display: "flex", alignItems: "center", position: "relative" }}
        >
          <Box sx={{ position: "absolute", left: "8px", top: "12px" }}>
            {/* <SearchIcon /> */}
          </Box>
          <TextField
            sx={{
              width: "24.25rem",
              "& .MuiInputBase-root": {
                height: "2.5rem",
                bgcolor: "#F5F6FA",
              },
            }}
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                   <SearchIcon/>
                  </InputAdornment>
                ),
              },
            }}
            //   id=""
            // label="Search"
            placeholder="Search"
            //   value={}
            //   onChange={}
          />
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "1.25rem",
          // mr: "20px",
        }}
      >
        <Box
          sx={{
            bgcolor: "#EBECEF",
            borderRadius: "60px",
            width: "2.5rem",
            height: "2.5rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <LigthIcon />
        </Box>
        <Box
          sx={{
            bgcolor: "#EBECEF",
            borderRadius: "60px",
            width: "2.5rem",
            height: "2.5rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <BellIcon />
        </Box>
        <Box
          sx={{
            bgcolor: "#EBECEF",
            borderRadius: "60px",
            width: "2.5rem",
            height: "2.5rem",
            display: "flex",
            alignItems: "center",
            backgroundImage:`url(${dp})`
          }}
        ></Box>
      </Box>
    </Box>
  );
}

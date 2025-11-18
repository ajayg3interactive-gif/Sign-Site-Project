import { Box, TextField } from "@mui/material";
import React from "react";
import {
  BellIcon,
  LigthIcon,
  OptionIcon,
  SearchIcon,
} from "../assets/Icons/Menuicons";

export default function CenterSection() {
  return (
    <Box>
      <Box sx={{display:"flex"}}>
        <Box sx={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
          <OptionIcon />
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box sx={{ position: "absolute" }}>
              <SearchIcon />
            </Box>
            <TextField
              sx={{ position: "relative" }}
              //   id=""
              //   label=""
              //   value={}
              //   onChange={}
            />
          </Box>
        </Box>
        <Box>
          <Box>
            <LigthIcon />
          </Box>
          <Box>
            <BellIcon />
          </Box>
        </Box>
      </Box>
      <Box sx={{ display: "grid", gridTemplateColumns: "3fr 1fr" }}>
        <Box>1</Box>
        <Box>2</Box>
      </Box>
    </Box>
  );
}

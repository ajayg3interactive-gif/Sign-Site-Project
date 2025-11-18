import { Box } from "@mui/material";
import React from "react";
import LeftSide from "../Components/LeftSide";
import CenterSection from "../Components/CenterSection";
import RightSide from "../Components/RightSide";

export default function Homepage() {
  return (
    <Box sx={{display:"grid", gridTemplateColumns:'0.8fr 3.8fr'}}>
     <LeftSide/>
     <CenterSection/>
    
    </Box>
  );
}

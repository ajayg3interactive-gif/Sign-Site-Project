import {
  Box,
  Button,
  Collapse,
  Tab,
  Tabs,
  TextField,
  Typography,
} from "@mui/material";
import React, { useCallback, useState } from "react";
import {
  DownArrow,
  EyeIcon,
  MenuIcon,
  SmallDownArrow,
} from "../assets/Icons/Menuicons";

export default function ItemCollapse({ isExpand }) {
  const [headTab, setHeadTab] = useState(0);
  const buttonStyle = {
    textTransform: "none",
    bgcolor: "#0071CE1A",
    minWidth: "auto",
    borderRadius: "8px",
  };

  const mainContent = {
    color: "#111827",
    fontWeight: 600,
    fontSize: "1rem",
    fontFamily: "Nunito",
  };
  const content = {
    color: "#111827B2",
    fontSize: "0.875rem",
    fontFamily: "Nunito",
    fontWeight: 500,
  };

  const HeadTab = ["Items", "Jobs"];

  const handleHeadTabChange = useCallback((_, idx) => {
    setHeadTab(idx);
  });

  const headTabContents = [
    <Box
      key={"items"}
      sx={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
    >
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 0.5fr",
          p: "1rem",
          bgcolor: "#F5F6FA",
          borderRadius: "1rem",
        }}
      >
        <Box>Item name</Box>
        <Box>Quantity</Box>
        <Box sx={{ textAlign: "center" }}>Unit Discount</Box>
        <Box sx={{ textAlign: "center" }}>Unit Price</Box>
        <Box>Total Price</Box>
        {/* <Box></Box> */}
      </Box>
      <Box
        sx={{
          p: "1rem",
          borderRadius: "1rem",
          border: "1px solid #D9D9D9 ",
          // alignContent:'center'
        }}
      >
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 0.5fr",
          }}
        >
          <Box>Lorem ip - Apparel</Box>
          <Box>18 Each</Box>
          <Box sx={{ textAlign: "center" }}>10 %</Box>
          <Box sx={{ textAlign: "center" }}>$2500.00</Box>
          <Box>$2500.00</Box>
          <Box sx={{ display: "flex", gap: "0.5rem" }}>
            <Button sx={{ ...buttonStyle }}>
              <DownArrow />
            </Button>
            <Button sx={{ ...buttonStyle, bgcolor: "#0071CE" }}>
              <MenuIcon color={"#fff"} />
            </Button>
          </Box>
        </Box>
        <Box sx={{ display: "flex", gap: "1rem" }}>
          <Button
            sx={{
              ...buttonStyle,
              display: "flex",
              gap: "1rem",
              alignItems: "center",
            }}
          >
            Description
            <SmallDownArrow />
          </Button>
          <Button
            sx={{
              ...buttonStyle,
              display: "flex",
              gap: "1rem",
              alignItems: "center",
            }}
          >
            Price Breakdown
            <SmallDownArrow />
          </Button>
        </Box>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            borderTop: "1px dashed #D9D9D9",
            pt: "1rem",
          }}
        >
          <Box></Box>
          <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "16rem",
                borderBottom: "1px solid #D9D9D9",
                pb: "1rem",
              }}
            >
              <Box
                sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}
              >
                <Typography sx={{ ...content }}>Sub Total:</Typography>
                <Typography sx={{ ...content }}>(0%):</Typography>
                <Typography sx={{ ...content }}>State (8.5%):</Typography>
                <Typography sx={{ ...content }}>Total Tax:</Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                  textAlign: "right",
                }}
              >
                <Typography sx={{ ...mainContent }}>$4,291.30</Typography>
                <Typography sx={{ ...mainContent }}>$0.00</Typography>
                <Typography sx={{ ...mainContent }}>$0.81</Typography>
                <Typography sx={{ ...mainContent }}>$0.00</Typography>
              </Box>
            </Box>
            <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
              <Box>
                <Typography sx={{ ...content }}>Total Tax:</Typography>
              </Box>
              <Box sx={{ textAlign: "right" }}>
                <Typography sx={{ ...mainContent }}>$4,291.30</Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>,
    <Box
      key={"jobs"}
      sx={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
    >
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr",
          p: "1rem",
          bgcolor: "#F5F6FA",
          borderRadius: "1rem",
        }}
      >
        <Box>Item name</Box>
        <Box>Quantity</Box>
        <Box sx={{ textAlign: "center" }}>Item Details</Box>
        <Box>Category</Box>
        <Box>Final Proof</Box>
        <Box>Production Status</Box>
      </Box>
      <Box
        sx={{
          p: "1rem",
          borderRadius: "1rem",
          border: "1px solid #D9D9D9 ",
          // alignContent:'center'
        }}
      >
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr",
            alignItems: "center",
          }}
        >
          <Box>Lorem ip - Apparel</Box>
          <Box>18 Each</Box>
          <Box sx={{ textAlign: "center" }}>
            <EyeIcon />
          </Box>
          <Box>
            <Button
              sx={{ ...buttonStyle, color: "#FF6600", bgcolor: "#F5F6FA" }}
            >
              Drive Board
            </Button>
          </Box>
          <Box>$2500.00</Box>
          <Box>
            <Button
              sx={{ ...buttonStyle, color: "#45B369", bgcolor: "#0080001A" }}
            >
              Completed
            </Button>
          </Box>
        </Box>
      </Box>
      <TextField
        multiline
        rows={3}
        placeholder="Job Description"
        sx={{
          "& .MuiOutlinedInput-root": {
            borderRadius: "0.75rem",
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              border: "1px solid #ccc",
            },
          },
        }}
      ></TextField>
    </Box>,
  ];

  return (
    <Collapse in={isExpand}>
      <Box
        sx={{
          bgcolor: "#fff",
          borderRadius: "12px",
          p: "1.125rem 1.5rem",
          display: "flex",
          flexDirection: "column",
          gap: "1.125rem",
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Tabs
            value={headTab}
            onChange={handleHeadTabChange}
            variant="scrollable"
            scrollButtons="false"
            sx={{
              minHeight: "40px",
              "& .MuiTab-root": {
                // minHeight: '40px',
                textTransform: "none",
                fontSize: "1.5rem",
                color: "#999999",
                fontWeight: 700,
                "&:hover": {
                  color: "#0071CE",
                },
               
                "& .MuiTabs-indicator": {
                  backgroundColor: "#0071CE",
                  height: "3px",
                },
              },
               "& .Mui-selected": {
                  color: "#0071CE"
                },
            }}
          >
            {HeadTab.map((label) => (
              <Tab key={label} label={label} />
            ))}
          </Tabs>
          <Box sx={{ display: "flex", gap: "1rem" }}>
            <Button sx={{ ...buttonStyle }}>Variant History</Button>
            <Button sx={{ ...buttonStyle }}>+ Create Job</Button>
            <Button sx={{ ...buttonStyle, bgcolor: "#0071CE", color: "#fff" }}>
              + Add Items
            </Button>
          </Box>
        </Box>
        <Box>{headTabContents[headTab]}</Box>
      </Box>
    </Collapse>
  );
}

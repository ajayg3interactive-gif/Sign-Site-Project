import {
  Box,
  Button,
  Collapse,
  Divider,
  Tab,
  Tabs,
  TextareaAutosize,
  TextField,
  Typography,
} from "@mui/material";
import React, { useCallback, useState } from "react";
import {
  BellIcon,
  CalenderIcon,
  DownArrow,
  DownloadIcon,
  EditIcon,
  EyeIcon,
  GreenTick,
  LigthIcon,
  MailIcon,
  MenuIcon,
  OptionIcon,
  PenIcon,
  SearchIcon,
  SmallDownArrow,
  UpArrow,
} from "../assets/Icons/Menuicons";
import SearchBar from "./SearchBar";
import MainCollapse from "./MainCollapse";
import ExpandedCollapse from "./ExpandedCollapse";
import ItemCollapse from "./ItemCollapse";

export default function CenterSection() {
  const [isExpand, setIsExpand] = useState(true);
  const [selectedTab, setSelectedTab] = useState(0);

  const buttonStyle = {
    textTransform: "none",
    bgcolor: "#0071CE1A",
    minWidth: "auto",
    borderRadius: "8px",
  };
  const mainHead = {
    fontWeight: 700,
    fontSize: "1.125rem",
    fontFamily: "Nunito",
    color: "#111827",
  };

  const TABS = ["Purchase", "History", "Notes", "Tasks", "Assets", "Related"];

  const handleTabChange = useCallback((_, idx) => {
    setSelectedTab(idx);
  });

  const tabContents = [
    <Box key={"purchase"}>
      <Typography sx={{ ...mainHead, fontSize: "1.8rem", fontWeight: "600" }}>
        Needs Ordering
      </Typography>
      <p style={{ color: "#111827B2" }}>
        These items need purchasing but there's no purchase order associated
        with them yet. If you have some items in stock or the customer provides
        their own garments, you can remove the purchasing requirement for each
        such line item. You can also remove all purchasing requirements for this
        order at once.
      </p>
      <Typography sx={{ ...mainHead, fontSize: "1.8rem", fontWeight: "600" }}>
        Purchased Items
      </Typography>
      <p style={{ color: "#111827B2" }}>No Purchased Items.</p>
    </Box>,
  ];

  return (
    <Box>
      <SearchBar />
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "3fr 1fr",
          gap: "1.25rem 1.5rem",
          bgcolor: "#F5F6FA",
          p: "1.5rem 1.5rem",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "1.5rem",
            overflow: "auto",
            height: "50rem",
          }}
        >
          <Box
            sx={{
              // minWidth: "66rem",
              display: "flex",
              justifyContent: "space-between",
              bgcolor: "#F5F6FA",
            }}
          >
            <Box>
              <Typography sx={{ fontWeight: 700, fontSize: "1.5rem" }}>
                SO #1002: Lorem ipsum
              </Typography>
              <Button
                sx={{
                  ...buttonStyle,
                  color: "#FF0000",
                  bgcolor: "#FF00001A",
                  fontSize: "1rem",
                  p: "0 1rem",
                }}
              >
                #JOB_ID_10100
              </Button>
            </Box>
            <Box sx={{ display: "flex", gap: "1rem", alignItems: "start" }}>
              <Button
                sx={{
                  ...buttonStyle,
                  display: "flex",
                  gap: "0.5rem",
                  alignItems: "center",
                  p: "0.5rem 1rem",
                }}
              >
                <DownloadIcon /> Download PDF
              </Button>
              <Button
                sx={{
                  ...buttonStyle,
                  display: "flex",
                  gap: "0.5rem",
                  alignItems: "center",
                  p: "0.5rem 1rem",
                }}
              >
                <MailIcon />
                Email PDF
              </Button>
              <Button sx={{ ...buttonStyle }}>
                <EditIcon />
              </Button>
              <Button sx={{ ...buttonStyle }}>
                <MenuIcon color={"#0071CE"} />
              </Button>
            </Box>
          </Box>

          <Box
            sx={{
              bgcolor: "#fff",
              borderRadius: "0.75rem",
              p: "1.5rem",
              display: "flex",
              flexDirection: "column",
              gap: "1.5rem",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Box sx={{ display: "flex", gap: "1rem" }}>
                <Box sx={{ position: "relative" }}>
                  <Box
                    sx={{
                      bgcolor: "#0071CE1A",
                      border: "2.3px solid #0071CE",
                      height: "4.25rem",
                      width: "4.25rem",
                      borderRadius: "4.25rem",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      color: "#111827",
                      fontSize: "1.5rem",
                      fontWeight: 700,
                    }}
                  >
                    AB
                  </Box>
                  <Box
                    sx={{ position: "absolute", bottom: "-5.5px", right: "0" }}
                  >
                    <GreenTick />
                  </Box>
                </Box>
                <Typography
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    fontWeight: 600,
                    fontSize: "1.25rem",
                  }}
                >
                  Ajay Binu{" "}
                  <span
                    style={{
                      color: "#111827B2",
                      fontWeight: 500,
                      fontSize: "1rem",
                    }}
                  >
                    Individual
                  </span>
                </Typography>
                <Box>
                  <Button
                    sx={{
                      ...buttonStyle,
                      bgcolor: "#0080001A",
                      color: "#45B369",
                    }}
                  >
                    Approved
                  </Button>
                </Box>
              </Box>
              <Button
                sx={{
                  ...buttonStyle,
                  border: "1px solid #0071CE",
                  borderRadius: "2.375rem",
                  height: "2.5rem",
                  width: "2.5rem",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                onClick={() => setIsExpand(!isExpand)}
              >
                {!isExpand ? <UpArrow /> : <DownArrow />}
              </Button>
            </Box>
            <Divider />

            {/* Main Collaps */}
            <MainCollapse isExpand={isExpand} />

            {/* Expanded Collapse */}
            <ExpandedCollapse isExpand={isExpand} />
          </Box>

          {/* Items and Jobs-------- */}
          <ItemCollapse isExpand={isExpand} />
        </Box>
        <Box
          sx={{
            bgcolor: "#fff",
            borderRadius: "12px",
            display: "flex",
            flexDirection: "column",
            // p: "1.5rem",
            width: "30rem",
          }}
        >
          <Tabs
            value={selectedTab}
            onChange={handleTabChange}
            variant="scrollable"
            scrollButtons="auto"
            sx={{
              borderBottom: "1px solid #e0e0e0",
              minHeight: "40px",
              "& .MuiTab-root": {
                // minHeight: '40px',
                textTransform: "none",
                fontSize: "1rem",
                color: "#111827",
                padding: "1.5rem",
                fontWeight: 600,
                "&:hover": {
                  color: "#0071CE",
                },
                "& .Mui-selected": {
                  color: "#0071CE !important",
                },
              },
            }}
          >
            {TABS.map((label) => (
              <Tab key={label} label={label} />
            ))}
          </Tabs>
          <Box sx={{ display: "flex", flexDirection: "column", p: "1.5rem" }}>
            {tabContents[selectedTab]}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

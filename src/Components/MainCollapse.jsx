import { Box, Collapse, Typography } from "@mui/material";
import React from "react";
import { CalenderIcon } from "../assets/Icons/Menuicons";

export default function MainCollapse({ isExpand }) {
  const mainHead = {
    fontWeight: 700,
    fontSize: "1.125rem",
    fontFamily: "Nunito",
    color: "#111827",
  };
  const subHead = {
    color: "#111827",
    fontWeight: 700,
    fontSize: "1rem",
    fontFamily: "Nunito",
  };
  const content = {
    color: "#111827B2",
    fontSize: "0.875rem",
    fontFamily: "Nunito",
    fontWeight: 500,
  };
  return (
    <Collapse in={isExpand}>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr 1fr",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Box sx={{ ...mainHead, mb: "1.5rem" }}>Customer</Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "0.375rem",
              }}
            >
              <Typography sx={{ ...content }}>Primary Contact</Typography>
              <Typography sx={{ ...subHead }}>Not set</Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "0.375rem",
              }}
            >
              <Typography sx={{ ...content }}>Invoice Contact</Typography>
              <Typography sx={{ ...subHead }}>Not set</Typography>
            </Box>
          </Box>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Box sx={{ ...mainHead, mb: "1.5rem" }}>Status</Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "0.375rem",
              }}
            >
              <Typography sx={{ ...content }}>Status</Typography>
              <Typography sx={{ ...subHead }}>New</Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "0.375rem",
              }}
            >
              <Typography sx={{ ...content }}>Invoiced</Typography>
              <Typography sx={{ ...subHead }}>No</Typography>
            </Box>
          </Box>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Box sx={{ ...mainHead, mb: "1.5rem" }}>Team Assignment</Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "0.375rem",
              }}
            >
              <Typography sx={{ ...content }}>Sales Rep</Typography>
              <Typography sx={{ ...subHead }}>Not set</Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "0.375rem",
              }}
            >
              <Typography sx={{ ...content }}>Production Manager</Typography>
              <Typography sx={{ ...subHead }}>Not set</Typography>
            </Box>
          </Box>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Box sx={{ ...mainHead, mb: "1.5rem" }}>Dates</Box>
          <Box sx={{ display: "flex", position: "relative" }}>
            <Box
              sx={{
                borderRight: "2px dashed #D9D9D9",
                position: "absolute",
                height: "40px",
                left: "18px",
                top: "30px",
              }}
            ></Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
              }}
            >
              <Box sx={{ display: "flex", gap: "1rem" }}>
                <Box
                  sx={{
                    bgcolor: "#0071CE1A",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "2.5rem",
                    width: "2.5rem",
                    borderRadius: "20px",
                  }}
                >
                  <CalenderIcon />
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.375rem",
                  }}
                >
                  <Typography sx={{ ...content }}>Quote Date</Typography>
                  <Typography sx={{ ...subHead }}>
                    Saturday, 15-02-2025
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ display: "flex", gap: "1rem" }}>
                <Box
                  sx={{
                    bgcolor: "#0071CE1A",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "2.5rem",
                    width: "2.5rem",
                    borderRadius: "20px",
                  }}
                >
                  <CalenderIcon />
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.375rem",
                  }}
                >
                  <Typography sx={{ ...content }}>Due Date</Typography>
                  <Typography sx={{ ...subHead }}>
                    Monday, 24-02-2025
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Collapse>
  );
}

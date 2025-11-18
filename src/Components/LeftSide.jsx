import { Box } from "@mui/material";
import React from "react";
import symbol from "../assets/signsite 1.png";
import {
  ClientsIcon,
  ArrowKey,
  HomeIcon,
  JobIcon,
  ProductsIcon,
  ReportIcon,
  SettingsIcon,
  UsersIcon,
  WorkFlow,
} from "../assets/Icons/Menuicons";
export default function LeftSide() {
  const menu = [
    {
      icon: <HomeIcon />,
      name: "DashBoard",
    },
    {
      icon: <JobIcon />,
      name: "Jobs",
    },
    {
      icon: <WorkFlow />,
      name: "Workflow",
    },
    {
      icon: <ClientsIcon />,
      name: "Clients",
    },
    {
      icon: <ProductsIcon />,
      name: "Products",
    },
    {
      icon: <UsersIcon />,
      name: "Users",
    },
    {
      icon: <ReportIcon />,
      name: "Reports",
    },
    {
      icon: <SettingsIcon />,
      name: "Setting",
    },
  ];
  return (
    <Box sx={{ p: "1rem 1.5rem" }}>
      <Box
        sx={{
          backgroundImage: `url(${symbol})`,
          backgroundRepeat: "no-repeat",
          height: "4.5rem",
        //   width: "19.5rem",
          borderBottom:'1px solid #EBECEF'
        }}
      />
      <Box>
        {menu.map((item, index) => (
          <Box key={index}>
            <Box  sx={{ display: "flex", justifyContent: "space-between",alignItems:"center", gap:"0.5rem" }}>
              <Box sx={{display:'flex',alignItems:"center",gap:"0.75rem", p:"0.625rem 0.75rem "}}>
                <Box>{item.icon}</Box>
                <Box>{item.name}</Box>
              </Box>
              <Box>
                <ArrowKey />
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

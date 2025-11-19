import { Box, Button, Typography, useScrollTrigger } from "@mui/material";
import React, { Children, useState } from "react";
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
import { useNavigate } from "react-router-dom";
export default function LeftSide() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeSubIndex, setActiveSubIndex] = useState(0);
  const [expanded, setExpanded] = useState(null);
  const naviagte = useNavigate();

  const toggleExpand = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  const buttonStyle = {
    textTransform: "none",
    bgcolor: "#0071CE1A",
    minWidth: "auto",
    borderRadius: "8px",
  };
  const menu = [
    {
      icon: (isActive) => <HomeIcon fill={isActive ? "#fff" : "#4B5563"} />,
      name: "DashBoard",
      url: "/",
    },
    {
      icon: (isActive) => <JobIcon fill={isActive ? "#fff" : "#4B5563"} />,
      name: "Jobs",
      url: "/job",
      Children: [
        { name: "Quotes" },
        { name: "Tasks" },
        { name: "Invoices" },
        { name: "Sales Orders", url: "/jobs/salesorder" },
        { name: "Purchase Orders" },
      ],
    },
    {
      icon: (isActive) => <WorkFlow fill={isActive ? "#fff" : "#4B5563"} />,
      name: "Workflow",
      url: "/workflow",
    },
    {
      icon: (isActive) => <ClientsIcon fill={isActive ? "#fff" : "#4B5563"} />,
      name: "Clients",
      url: "/clients",
    },
    {
      icon: (isActive) => <ProductsIcon fill={isActive ? "#fff" : "#4B5563"} />,
      name: "Products",
      url: "/products",
    },
    {
      icon: (isActive) => <UsersIcon fill={isActive ? "#fff" : "#4B5563"} />,
      name: "Users",
      url: "/users",
    },
    {
      icon: (isActive) => <ReportIcon fill={isActive ? "#fff" : "#4B5563"} />,
      name: "Reports",
      url: "/reports",
    },
    {
      icon: (isActive) => <SettingsIcon fill={isActive ? "#fff" : "#4B5563"} />,
      name: "Setting",
      url: "/setting",
    },
  ];
  return (
    <Box>
      <Box
        sx={{
          backgroundImage: `url(${symbol})`,
          backgroundRepeat: "no-repeat",
          backgroundPositionY: "center",
          backgroundPositionX: "1.5rem",
          height: "4.5rem",
          //   width: "19.5rem",
          borderBottom: "1px solid #EBECEF",
          borderRight: "1px solid #EBECEF",
        }}
      />
      <Box
        sx={{
          p: "0.75rem 1rem",
          display: "flex",
          flexDirection: "column",
          gap: "0.5rem",
        }}
      >
        {menu.map((item, index) => {
          const isActive = index === activeIndex;
          const isExpanded = expanded === index;
          return (
            <Box key={index}>
              <Button
                fullWidth
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  ...buttonStyle,
                  bgcolor: isActive ? "#0071CE" : "#fff",
                  borderRadius: "0.5rem",
                  cursor: "pointer",
                }}
                onClick={() => {
                  setActiveIndex(index);
                  if (item.Children) {
                    toggleExpand(index);
                  } else {
                    naviagte(item.url);
                  }
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                  }}
                >
                  <Box>{item.icon(isActive)}</Box>
                  <Typography sx={{ color: !isActive ? "#4B5563" : "#fff" }}>
                    {item.name}
                  </Typography>
                  {console.log(activeIndex)}
                </Box>
                <Box>
                  {item.Children && (
                    <ArrowKey fill={!isActive ? "#4B5563" : "#fff"} />
                  )}
                </Box>
                {/* SUB MENU ITEMS */}
              </Button>
              {item.Children && isExpanded && (
                <Box sx={{ ml: 4, mt: 1 }}>
                  {item.Children.map((child, subIdx) => (
                    <Button
                      key={subIdx}
                      fullWidth
                      sx={{
                        justifyContent: "flex-start",
                        textTransform: "none",
                        color: "#4B5563",
                        fontSize: "1rem",
                        bgcolor:
                          activeIndex === index && activeSubIndex === subIdx
                            ? "#0071CE1A"
                            : "#fff",
                      }}
                      onClick={() => {
                        setActiveIndex(index);
                        setActiveSubIndex(subIdx);
                        naviagte(child.url);
                      }}
                    >
                      • {child.name}
                    </Button>
                  ))}
                </Box>
              )}
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}

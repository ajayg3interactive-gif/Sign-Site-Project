import {
  Box,
  Button,
  Collapse,
  Divider,
  Tab,
  Tabs,
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

export default function CenterSection() {
  const [isExpand, setIsExpand] = useState(true);
  const [selectedTab, setSelectedTab] = useState(0);
  const [headTab, setHeadTab] = useState(0);
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

  const TabStyle = {
    color: "#111827",
    fontWeight: "600",
    fontSize: "1rem",
    textTransform: "none",
    "&:hover": {
      color: "#0071CE",
    },
  };
  const TABS = ["Purchase", "History", "Notes", "Tasks", "Assets", "Related"];
  const HeadTab = ["Items", "Jobs"];

  const handleTabChange = useCallback((_, idx) => {
    setSelectedTab(idx);
  });

  const handleHeadTabChange = useCallback((_, idx) => {
    setHeadTab(idx);
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
        <Box>Unit Discount</Box>
        <Box>Unit Price</Box>
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
          <Box>10 %</Box>
          <Box>$2500.00</Box>
          <Box>$2500.00</Box>
          <Box sx={{ display: "flex", gap: "1rem" }}>
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
      <Box sx={{ display: "flex", justifyContent: "end" }}>
        <Box sx={{ display: "grid", gridTemplateColumns:"1fr 1fr" }}>
          <Box sx={{ }}>
            <Typography>Sub Total:</Typography>
            <Typography>(0%):</Typography>
            <Typography>State (8.5%):</Typography>
            <Typography>Total Tax:</Typography>
          </Box>
          <Box sx={{ textAlign: "right" }}>
             <Typography>Sub Total:</Typography>
            <Typography>(0%):</Typography>
            <Typography>State (8.5%):</Typography>
            <Typography>Total Tax:</Typography>
          </Box>
        </Box>
      </Box>
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
          // overflow: "auto",
          // maxHeight: "100vh",
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
                SO #1002: Lorem ipsum{" "}
              </Typography>
            </Box>
            <Box sx={{ display: "flex", gap: "1rem" }}>
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
                      <Typography sx={{ ...content }}>
                        Primary Contact
                      </Typography>
                      <Typography sx={{ ...subHead }}>Not set</Typography>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "0.375rem",
                      }}
                    >
                      <Typography sx={{ ...content }}>
                        Invoice Contact
                      </Typography>
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
                      <Typography sx={{ ...content }}>
                        Production Manager
                      </Typography>
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
                          <Typography sx={{ ...content }}>
                            Quote Date
                          </Typography>
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

            <Collapse in={!isExpand}>
              <Box sx={{ display: "grid", gridTemplateColumns: "2fr 1fr" }}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "2.5rem",
                  }}
                >
                  <Box>
                    <Box sx={{ ...mainHead, mb: "1rem" }}>Customer</Box>
                    <Box
                      sx={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          gap: "0.375rem",
                        }}
                      >
                        <Typography sx={{ ...content }}>
                          Primary Contact <PenIcon />
                        </Typography>
                        <Typography sx={{ ...subHead }}>
                          Eric Hoffman Jerome
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          gap: "0.375rem",
                        }}
                      >
                        <Typography sx={{ ...content }}>
                          Invoice Contact
                          <PenIcon />
                        </Typography>
                        <Typography sx={{ ...subHead }}>David James</Typography>
                      </Box>
                    </Box>
                  </Box>
                  <Box>
                    <Box sx={{ ...mainHead, mb: "1rem" }}>Status</Box>
                    <Box
                      sx={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr",
                        gap: "1.719rem",
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          gap: "0.375rem",
                        }}
                      >
                        <Typography sx={{ ...content }}>
                          Status
                          <PenIcon />
                        </Typography>
                        <Typography sx={{ ...subHead }}>Approved</Typography>
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          gap: "0.375rem",
                        }}
                      >
                        <Typography sx={{ ...content }}>
                          Ordered / Invoiced
                        </Typography>
                        <Typography sx={{ ...subHead }}>No/No</Typography>
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          gap: "0.375rem",
                        }}
                      >
                        <Typography sx={{ ...content }}>
                          Job Status
                          <PenIcon />
                        </Typography>
                        <Typography sx={{ ...subHead }}>In Process</Typography>
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          gap: "0.375rem",
                        }}
                      >
                        <Typography sx={{ ...content }}>
                          Assigned Department
                          <PenIcon />
                        </Typography>
                        <Typography sx={{ ...subHead }}>Production</Typography>
                      </Box>
                    </Box>
                  </Box>
                  <Box>
                    <Box sx={{ ...mainHead, mb: "1rem" }}>Team Assignments</Box>
                    <Box
                      sx={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr",
                        gap: "1.719rem",
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          gap: "0.375rem",
                        }}
                      >
                        <Typography sx={{ ...content }}>
                          Sales Rep
                          <PenIcon />
                        </Typography>
                        <Typography sx={{ ...subHead }}>
                          Dianne Reachel
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          gap: "0.375rem",
                        }}
                      >
                        <Typography sx={{ ...content }}>
                          Production Manager
                          <PenIcon />
                        </Typography>
                        <Typography sx={{ ...subHead }}>
                          Dianne Rachel
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          gap: "0.375rem",
                        }}
                      >
                        <Typography sx={{ ...content }}>
                          Designer
                          <PenIcon />
                        </Typography>
                        <Typography sx={{ ...subHead }}>
                          Dianne Rachel
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          gap: "0.375rem",
                        }}
                      >
                        <Typography sx={{ ...content }}>
                          Project Manager
                          <PenIcon />
                        </Typography>
                        <Typography sx={{ ...subHead }}>
                          Dianne Rachel
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          gap: "0.375rem",
                        }}
                      >
                        <Typography sx={{ ...content }}>
                          Proof Reviewer
                          <PenIcon />
                        </Typography>
                        <Typography sx={{ ...subHead }}>Abby</Typography>
                      </Box>
                    </Box>
                  </Box>
                  <Box>
                    <Box sx={{ ...mainHead, mb: "1rem" }}>
                      Addresses & Shipping
                    </Box>
                    <Box
                      sx={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr",
                        gap: "1.719rem",
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          gap: "0.375rem",
                        }}
                      >
                        <Typography sx={{ ...content }}>
                          Billing Address
                          <PenIcon />
                        </Typography>
                        <Typography sx={{ ...subHead }}>
                          61 Samarinda, Queens Street,
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          gap: "0.375rem",
                        }}
                      >
                        <Typography sx={{ ...content }}>
                          Shipping Address
                          <PenIcon />
                        </Typography>
                        <Typography sx={{ ...subHead }}>
                          61 Samarinda, Queens Street,
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          gap: "0.375rem",
                        }}
                      >
                        <Typography sx={{ ...content }}>
                          Billing Attention To
                          <PenIcon />
                        </Typography>
                        <Typography sx={{ ...subHead }}>
                          A1 Simada, Effil Tower,
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          gap: "0.375rem",
                        }}
                      >
                        <Typography sx={{ ...content }}>
                          Shipping Attention To
                          <PenIcon />
                        </Typography>
                        <Typography sx={{ ...subHead }}>
                          A1 Simada, Effil Tower,
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          gap: "0.375rem",
                        }}
                      >
                        <Typography sx={{ ...content }}>
                          Install Address
                          <PenIcon />
                        </Typography>
                        <Typography sx={{ ...subHead }}>
                          61 Samarinda, Queens Street,
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          gap: "0.375rem",
                        }}
                      >
                        <Typography sx={{ ...content }}>
                          Shipping Method
                          <PenIcon />
                        </Typography>
                        <Typography sx={{ ...subHead }}>
                          Lorem ipsum dolor sit amet
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          gap: "0.375rem",
                        }}
                      >
                        <Typography sx={{ ...content }}>
                          Install Attention To
                          <PenIcon />
                        </Typography>
                        <Typography sx={{ ...subHead }}>
                          A1 Simada, Effil Tower,
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          gap: "0.375rem",
                        }}
                      >
                        <Typography sx={{ ...content }}>
                          Shipping Tracking
                          <PenIcon />
                        </Typography>
                        <Typography sx={{ ...subHead }}>
                          Lorem ipsum dolor sit amet
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                  <Box>
                    <Box sx={{ ...mainHead, mb: "1rem" }}>Payment & Tax</Box>
                    <Box
                      sx={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr",
                        gap: "1.719rem",
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          gap: "0.375rem",
                        }}
                      >
                        <Typography sx={{ ...content }}>
                          Terms
                          <PenIcon />
                        </Typography>
                        <Typography sx={{ ...subHead }}>
                          Lorem ipsum dolor sit amet
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          gap: "0.375rem",
                        }}
                      >
                        <Typography sx={{ ...content }}>
                          Downpayment Percentage
                        </Typography>
                        <Typography sx={{ ...subHead }}>
                          50%($2,145.65)
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          gap: "0.375rem",
                        }}
                      >
                        <Typography sx={{ ...content }}>
                          External Payment
                          <PenIcon />
                        </Typography>
                        <Typography sx={{ ...subHead }}>
                          Lorem ipsum dolor sit amet
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          gap: "0.375rem",
                        }}
                      >
                        <Typography sx={{ ...content }}>
                          Tax
                          <PenIcon />
                        </Typography>
                        <Typography sx={{ ...subHead }}>
                          Default Tax (8.5%)
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    position: "relative",
                  }}
                >
                  <Box
                    sx={{
                      ...mainHead,
                      mb: "1.5rem",
                      bgcolor: "#F5F6FA",
                      height: "9.5rem",
                      borderRadius: "12px",
                      p: "1rem",
                    }}
                  >
                    Dates
                  </Box>
                  <Box
                    sx={{
                      position: "absolute",
                      bgcolor: "#fff",
                      top: "3.5rem",
                      p: "1rem",
                      borderRadius: "12px",
                      border: "1px solid #D9D9D9",
                      width: "100%",
                    }}
                  >
                    <Box sx={{ display: "flex", position: "relative" }}>
                      <Box
                        sx={{
                          borderRight: "2px dashed #D9D9D9",
                          position: "absolute",
                          height: "470px",
                          left: "18px",
                          top: "30px",
                        }}
                      ></Box>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          gap: "1.875rem",
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
                            <Typography sx={{ ...content }}>
                              Quote Date
                            </Typography>
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
                            <Typography sx={{ ...content }}>
                              Due Date
                            </Typography>
                            <Typography sx={{ ...subHead }}>
                              Monday, 24-02-2025
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
                            <Typography sx={{ ...content }}>
                              Art Due Date
                            </Typography>
                            <Typography sx={{ ...subHead }}>
                              Tuesday, 25-02-2025
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
                            <Typography sx={{ ...content }}>
                              Production Due Date
                            </Typography>
                            <Typography sx={{ ...subHead }}>
                              Wednesday, 26-02-2025
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
                            <Typography sx={{ ...content }}>
                              Next Contact Date
                            </Typography>
                            <Typography sx={{ ...subHead }}>
                              Tuesday, 25-02-2025
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
                            <Typography sx={{ ...content }}>
                              Shipping Date
                            </Typography>
                            <Typography sx={{ ...subHead }}>
                              Wednesday, 26-02-2025
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
                            <Typography sx={{ ...content }}>
                              Install Date
                            </Typography>
                            <Typography sx={{ ...subHead }}>
                              Monday, 24-02-2025
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
                            <Typography sx={{ ...content }}>
                              In Hand Date
                            </Typography>
                            <Typography sx={{ ...subHead }}>
                              Monday, 24-02-2025
                            </Typography>
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Box
                sx={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}
              >
                <Box sx={{ mt: "2.5rem" }}>
                  <Box sx={{ ...mainHead, mb: "1rem" }}>Details</Box>
                  <Box
                    sx={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr 1fr",
                      gap: "1.719rem",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "0.375rem",
                      }}
                    >
                      <Typography sx={{ ...content }}>
                        Design Details
                        <PenIcon />
                      </Typography>
                      <Typography sx={{ ...subHead }}>
                        Lorem ipsum dolor sit amet
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "0.375rem",
                      }}
                    >
                      <Typography sx={{ ...content }}>
                        Production Details
                      </Typography>
                      <Typography sx={{ ...subHead }}>
                        Lorem ipsum dolor sit amet.
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "0.375rem",
                      }}
                    >
                      <Typography sx={{ ...content }}>
                        Shipping Details
                        <PenIcon />
                      </Typography>
                      <Typography sx={{ ...subHead }}>
                        Lorem ipsum dolor sit amet
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "0.375rem",
                      }}
                    >
                      <Typography sx={{ ...content }}>
                        Installation Details
                        <PenIcon />
                      </Typography>
                      <Typography sx={{ ...subHead }}>
                        Lorem ipsum dolor sit amet.
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "0.375rem",
                      }}
                    >
                      <Typography sx={{ ...content }}>
                        Special Info
                        <PenIcon />
                      </Typography>
                      <Typography sx={{ ...subHead }}>
                        Lorem ipsum dolor sit amet.
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "0.375rem",
                      }}
                    >
                      <Typography sx={{ ...content }}>
                        Customer Note
                        <PenIcon />
                      </Typography>
                      <Typography sx={{ ...subHead }}>
                        Lorem ipsum dolor sit amet.
                      </Typography>
                    </Box>
                  </Box>
                </Box>
                <Box sx={{}}>
                  <Box sx={{ ...mainHead, mb: "1rem" }}>Other</Box>
                  <Box
                    sx={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr 1fr",
                      gap: "1.719rem",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "0.375rem",
                      }}
                    >
                      <Typography sx={{ ...content }}>
                        Sales Order Title
                        <PenIcon />
                      </Typography>
                      <Typography sx={{ ...subHead }}>Lorem ipsum</Typography>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "0.375rem",
                      }}
                    >
                      <Typography sx={{ ...content }}>Customer PO</Typography>
                      <Typography sx={{ ...subHead }}>Lorem ipsum</Typography>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "0.375rem",
                      }}
                    >
                      <Typography sx={{ ...content }}>
                        Customer PO Date
                        <PenIcon />
                      </Typography>
                      <Typography sx={{ ...subHead }}>
                        25 March, 2025
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Collapse>
          </Box>
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
                      color: "#111827",
                      fontWeight: 700,
                      "&:hover": {
                        color: "#0071CE",
                      },
                      "& .Mui-selected": {
                        color: "#0071CE !important",
                      },
                      "& .MuiTabs-indicator": {
                        backgroundColor: "#0071CE",
                        height: "3px",
                      },
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
                  <Button
                    sx={{ ...buttonStyle, bgcolor: "#0071CE", color: "#fff" }}
                  >
                    + Add Items
                  </Button>
                </Box>
              </Box>
              <Box>{headTabContents[headTab]}</Box>
            </Box>
          </Collapse>
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

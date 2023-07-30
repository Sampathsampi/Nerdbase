import React, { useState, useEffect } from "react";
import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import { navItem, getIntouch } from "@/constants";
import Link from "next/link";

const officeIcon = `
<svg xmlns="http://www.w3.org/2000/svg" width="45" height="33" viewBox="0 0 45 33" fill="#00051a">
<path d="M32.2083 9.7085H32.7083H42.9166C43.3702 9.7085 43.7839 9.8384 44.0697 10.0425C44.3533 10.2451 44.4583 10.4773 44.4583 10.6668V31.0835C44.4583 31.273 44.3533 31.5052 44.0697 31.7078C43.7839 31.9119 43.3702 32.0418 42.9166 32.0418H2.08329C1.62974 32.0418 1.21597 31.9119 0.930236 31.7078C0.646616 31.5052 0.541626 31.273 0.541626 31.0835V10.6668C0.541626 10.4773 0.646615 10.2451 0.930235 10.0425C1.21597 9.8384 1.62974 9.7085 2.08329 9.7085H12.2916H12.7916V9.2085V1.91683C12.7916 1.72734 12.8966 1.49508 13.1802 1.2925L12.891 0.887637L13.1802 1.2925C13.466 1.0884 13.8797 0.958496 14.3333 0.958496H30.6666C31.1202 0.958496 31.5339 1.0884 31.8197 1.2925C32.1033 1.49508 32.2083 1.72734 32.2083 1.91683V9.2085V9.7085ZM4.12496 11.6252H3.62496V12.1252V29.6252V30.1252H4.12496H12.2916H12.7916V29.6252V12.1252V11.6252H12.2916H4.12496ZM16.375 2.87516H15.875V3.37516V10.6668V29.6252V30.1252H16.375H20.4583H20.9583V29.6252V26.7085C20.9583 26.519 21.0633 26.2867 21.3469 26.0842C21.6326 25.8801 22.0464 25.7502 22.5 25.7502C22.9535 25.7502 23.3673 25.8801 23.653 26.0842C23.9366 26.2867 24.0416 26.519 24.0416 26.7085V29.6252V30.1252H24.5416H28.625H29.125V29.6252V3.37516V2.87516H28.625H16.375ZM40.875 30.1252H41.375V29.6252V12.1252V11.6252H40.875H32.7083H32.2083V12.1252V29.6252V30.1252H32.7083H40.875ZM24.0416 8.7085H20.9583V6.79183H24.0416V8.7085ZM24.0416 14.5418H20.9583V12.6252H24.0416V14.5418ZM24.0416 20.3752H20.9583V18.4585H24.0416V20.3752ZM6.66663 14.0835H9.74996V16.0002H6.66663V14.0835ZM6.66663 19.9168H9.74996V21.8335H6.66663V19.9168ZM6.66663 25.7502H9.74996V27.6668H6.66663V25.7502ZM38.3333 16.0002H35.25V14.0835H38.3333V16.0002ZM38.3333 21.8335H35.25V19.9168H38.3333V21.8335ZM38.3333 27.6668H35.25V25.7502H38.3333V27.6668Z" fill="#00051a" stroke="#00051a"/>
</svg>
`;

const emailIcon = `
<svg xmlns="http://www.w3.org/2000/svg" width="29" height="19" viewBox="0 0 29 19" fill="#00051a">
<path fill-rule="evenodd" clip-rule="evenodd" d="M26.1 2.98877L14.5 11.7725L2.9 2.97626V2.625H26.1V2.98877ZM2.9 16.375V6.30626L14.5 15.1L26.1 6.31625V16.375H2.9ZM0 18.875H29V0.125H0V18.875Z" fill="#00051a"/>
</svg>
`;

const Footer = () => {
  return (
    <>
      <Box
        sx={{
          borderRadius: { lg: "0 0 0 0 ", xs: "0px 0 0" },
          backgroundColor: { lg: "#fff", xs: "#fff" },
          color: { lg: "#00051a", xs: "#00051a" },
          position:'relative',
          overflow:'hidden'
        }}
        py={5}
        px={4}>
        <Grid container alignItems={"center"} mt={{ lg: 0, xs: 5 }} sx={{position:'relative',zIndex:'2'}}>
          <Grid
            container
            justifyContent={"right"}
            mb={-8}
            sx={{ display: { lg: "none", xs: "flex" } }}>
            <Grid item xs={8} color={"#ffc633"}>
              <Box sx={{fontSize:'28px',fontWeight:'700',letterSpacing:'1.3px'}}>NerdBase</Box>
            </Grid>
          </Grid>

          <Grid container justifyContent="center">
            <Grid container item lg={11}>
              <Grid
                item
                xs={12}
                lg={3}
                mt={10}
                pl={3}
                sx={{ display: { lg: "block", xs: "none" } }}>
                <Grid item xs={8} color={"#ffc633"}>
              <Box sx={{fontSize:'28px',fontWeight:'700',letterSpacing:'1.3px'}}>NerdBase</Box>
            </Grid>
                <Typography
                  fontSize="20px"
                  color="#00051a"
                  fontWeight={400}
                  mt={3}
                  sx={{
                    fontSize: { lg: "20px", sx: "15px" },
                  }}>
                  Catalyze your success with transformative tech
                </Typography>
              </Grid>
              <Grid
                item
                xs={12}
                lg={4}
                mt={{ lg: 10, xs: 1 }}
                pl={1}
                sx={{
                  // fontFamily: "Montserrat",
                  fontSize: { lg: "22px", xs: "16px" },
                  fontWeight: "400",
                  color: { lg: "#00051a", xs: "#000" },
                }}>
                <Typography
                  component={"h6"}
                  sx={{ fontSize: "20px", fontWeight: 700,display:'flex',alignItems:'center' }}>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: officeIcon,
                    }}
                  />
                  &nbsp;Office
                </Typography>
                <Typography
                  variant={"body1"}
                  py={1}
                  mb={2}
                  sx={{
                    // fontFamily: "Montserrat",
                    fontSize: { lg: "20px", xs: "15px" },
                    color: "#00051a",
                  }}>
                  Second floor
                  <br />
                  PSN block , Madipakkam
                  <br />
                  Chennai - 600096
                </Typography>
                <Typography
                  component={"h6"}
                  mt="4px"
                  sx={{
                    fontSize: { lg: "20px", sm: "20px" },
                    fontWeight: 700,
                    color: "#00051a",
                    verticalAlign: "middle",
                    display:'flex',alignItems:'center'
                  }}>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: emailIcon,
                    }}
                  />
                  &nbsp;support@nerdbase.com
                </Typography>
              </Grid>
              <Grid
                item
                xs
                mt={{ lg: 10, xs: 2 }}
                sx={{ display: { lg: "block", xs: "none" } }}>
                <Typography
                  component={"h6"}
                  sx={{ fontSize: "20px", fontWeight: 700, color: "#00051a" }}>
                  Links
                </Typography>
                {navItem.map((item, index) => {
                  return (
                    <Link href="/" key={`link-${index}`}>
                      <Typography
                        // fontFamily="Montserrat"
                        fontSize="20px"
                        color="#00051a"
                        fontWeight="normal"
                        mt={3}>
                        {item.text}
                      </Typography>
                    </Link>
                  );
                })}
              </Grid>
              <Grid item xs mt={{ lg: 10, xs: 2 }}>
                <Typography
                  component={"h6"}
                  mt={2}
                  sx={{
                    fontSize: { lg: "20px", sx: "16px" },
                    fontWeight: 700,
                  }}>
                  Get in Touch
                </Typography>
                {getIntouch.map((item, index) => {
                  return (
                    <Grid container alignItems="center" mt={3} key={index}>
                      <Grid item xs>
                        <Box
                          component="img"
                          src={item.darkLink}
                          alt="nerdbase icon"
                          sx={{
                            display: "inline-flex",
                            width: index === 0 ? "15px" : "20px",
                            height: "20px",
                          }}
                        />
                      </Grid>
                      <Grid item xs={10.5} alignItems={"center"}>
                        <Link href="/">
                          <Typography
                            // fontFamily="Montserrat"
                            sx={{ fontSize: { lg: "20px", sx: "16px" } }}
                            color="#00051a"
                            fontWeight="normal">
                            {item.text}
                          </Typography>
                        </Link>
                      </Grid>
                    </Grid>
                  );
                })}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <div className="compass">
            <div className="compass-inner">
              <div className="north"></div>
              <div className="east"></div>
              <div className="west"></div>
              <div className="south"></div>
              <div className="main-arrow">
                <div className="arrow-up"></div>
                <div className="arrow-down"></div>
              </div>
            </div>
          </div>
      </Box>
      <Box
        sx={{
          borderRadius: { lg: "0 0 0 0 ", xs: "0px 0 0" },
          backgroundColor: { lg: "#00051a", xs: "#00051a" },
          color: { lg: "#fff", xs: "#fff" },
          py: "18px",
          margin: "0",
        }}>
        <Grid container justifyContent={"right"} pb={0}>
          <Grid item xs={12} lg={6}>
            <Typography
              variant={"body2"}
              sx={{
                // fontFamily: "Poppins",
                fontSize: { lg: "16px", sx: "16px" },
                fontWeight: "400",
              }}>
              &#169;2023 nerd base. All Rights Reserved
            </Typography>
          </Grid>
          <Grid item lg={3} sx={{ display: { lg: "inline-flex", xs: "none" } }}>
            <span
              style={{
                borderBottom: "1px solid #00051a",
                // fontFamily: "Montserrat",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "16px",
              }}>
              Terms and conditions
            </span>
          </Grid>
        </Grid>
        
      </Box>
    </>
  );
};

export default Footer;

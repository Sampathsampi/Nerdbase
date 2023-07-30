import React, { useState, useEffect } from "react";
import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import { navItem } from "@/constants";
import Link from "next/link";

const Navbar = () => {
  const [active, setActive] = useState(0);
  const [visible, setVisible] = useState(false);

  return (
    <>
    
    <Box
      sx={{
        position: "fixed",
        top: "0",
        width: "100%",
        background: "#fff",
        zIndex: "1024",
      }}>
      <Grid
        container
        lg={10}
        justifyContent={"center"}
        margin={"auto"}
        padding={{lg:"15px 0",xs:'15px 15px'}}>
        <Grid item xs={12} lg={5}>
          <Grid container>
            <Grid item xs={8} color={"#ffc633"}>
              <Box sx={{fontSize:'28px',fontWeight:'700',letterSpacing:'1.3px'}}>NerdBase</Box>
            </Grid>
            <Grid
              item
              xs={4}
              justifyContent={"right"}
              alignItems={"center"}
              sx={{ display: { xs: "flex", lg: "none" } }}>
              <Image
                src={!visible ? "/hamburgerOutlined.png" : "/cancel.png"}
                alt="nerd base button"
                height={40}
                width={40}
                onClick={() => {
                  setVisible(!visible);
                }}
                priority
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item lg={7} xs={12} sx={{ display: { lg: "flex", xs: "none" } }}>
          <Grid
            container
            justifyContent={"space-evenly"}
            alignItems={"center"}
            sx={{ height: "100%" }}>
            {navItem.map((item, index) => {
              return (
                <Grid item key={index}>
                  <Link href={item.link}>
                    <Typography
                      sx={{
                        fontStyle: "normal",
                        fontWeight: "500",
                        fontSize: "20px",
                        lineHeight: "40px",
                        letterSpacing: "0.01em",
                        color: "#00051a",
                        borderBottom:
                          active === index ? " 2px solid #00051a" : "none",
                      }}
                      onClick={() => {
                        setActive(index);
                        setVisible(false);
                      }}>
                      {item.text}
                    </Typography>
                  </Link>
                </Grid>
              );
            })}
          </Grid>
        </Grid>
      </Grid>
      {visible && (
        <Grid container xs={12} justifyContent={"center"}>
          {navItem.map((item, index) => {
            return (
              <Grid item xs={12} key={index}>
                <Typography
                  sx={{
                    fontStyle: "normal",
                    fontWeight: "500",
                    fontSize: "20px",
                    lineHeight: "40px",
                    letterSpacing: "0.01em",
                    color: "#00051a",
                    textDecoration: active === index ? "underline" : "none",
                    textDecorationColor: "#00051a",
                    padding: "0 40px",
                  }}
                  onClick={() => {
                    setActive(index);
                    setVisible(false);
                  }}>
                  {item.text}
                </Typography>
              </Grid>
            );
          })}
        </Grid>
      )}
    </Box>
    </>
  );
};

export default Navbar;

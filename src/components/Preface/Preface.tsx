import { Grid, Box, Typography, Chip, Button, Stack } from "@mui/material";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { SolutionsList } from "@/components";
import {
  process,
  h2,
  h2Primary,
  h2PrimaryHollow,
  caption,
  buttonPrimary,
  circle,
  hLarge,
  darkHallow,
  circleDark,
  circleBlack,
  buttonPrimaryBlack,
} from "@/constants";
import { hLargeVertical, lightHallow } from "@/constants/styles";
import { BorderBottom } from "@mui/icons-material";
import SliderGrid from "../ImageGrid/SliderGrid";
import ContactCard from "../Contact/ContactCard";
import Testimonial from "../Testimonial/page";

const Preface = () => {
  const [scrollY, setScrollY] = useState(90);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const testimonials = [
    {
      img: "/Images/tenride.png",
      quote:
        "Nerdbase has exceeded our expectations in every way. Their team took the time to understand our unique challenges and provided tailored solutions that have transformed our business processes.",
      name: "Bhuvanesh",
      role: "Tenride",
    },
    {
      img: "/Images/equpx.png",
      quote:
        "I am incredibly impressed with the product solutions provided by Nerdbase. Their innovative approach and attention to detail have transformed our business operations",
      name: "Ram prasanth",
      role: "Equpx",
    },
  ];

  return (
    <>
      {/* Banner  */}
      <Box
        component="section"
        pt={{ lg: 16, xs: 8 }}
        px={{ lg: "0px 0", xs: "15px" }}
        className="banner"
        bgcolor={"#f7f7f7"}>
        <Grid container justifyContent="center" pt={7}>
          <Grid item lg={10} xs={12}>
            <Typography
              variant="h2"
              sx={h2}
              component={"h2"}
              lineHeight={1.5}
              color={"#ffc633"}>
              Discover new peaks with
            </Typography>
            <Typography sx={h2Primary} variant="h2" component={"h2"}>
              <Box component="div" sx={h2PrimaryHollow}>
                NerdBase
              </Box>
            </Typography>
          </Grid>
          <Grid item lg={10} sm={12} mt={5}>
            <Grid item lg={10} xs={10} pr={{ lg: 3 }}>
              <Typography align="left" variant="caption" sx={caption}>
                Let us show you how to leverage these services and take your
                business to the next level. Unlock the Power of Digital
                Solutions. We are leading provider of comprehensive digital
                solutions, specializing in website development, web application
                creation, and blockchain implementation
              </Typography>
            </Grid>
          </Grid>
          <Grid display="flex" item mt={4} lg={10}>
            <Grid item>
              <Button
                variant={"outlined"}
                onClick={() => {}}
                sx={buttonPrimary}>
                Say hello
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          container
          justifyContent="center"
          mt={16}
          id="services"
          bgcolor={"#fff"}
          p={0}>
          <Box>
            <div className="stack-loader">
              <div className="box box-1">
                <div className="side-left"></div>
                <div className="side-right"></div>
                <div className="side-top"></div>
              </div>
              <div className="box box-2">
                <div className="side-left"></div>
                <div className="side-right"></div>
                <div className="side-top"></div>
              </div>
              <div className="box box-3">
                <div className="side-left"></div>
                <div className="side-right"></div>
                <div className="side-top"></div>
              </div>
              <div className="box box-4">
                <div className="side-left"></div>
                <div className="side-right"></div>
                <div className="side-top"></div>
              </div>
            </div>
          </Box>
          <Grid container item lg={11} bgcolor={"#fff"}>
            <Grid item lg={12} xs={12}>
              <Grid container justifyContent={"center"}>
                <Typography
                  variant={"h2"}
                  sx={{
                    fontWeight: "700",
                    // fontFamily: "Poppins",
                    fontSize: { lg: "60px", xs: "40px" },
                    textAlign: "center",
                  }}
                  mt={5}>
                  Driving Growth Through
                </Typography>
              </Grid>
              <Grid container justifyContent={"center"}>
                <Typography variant={"h2"} sx={darkHallow} mb={2}>
                  Our Services
                </Typography>
              </Grid>
            </Grid>
            <Grid item lg={12} xs={12} alignSelf="end">
              <Typography
                fontSize="24px"
                color="#6C7A89"
                textAlign={"center"}
                fontWeight={400}>
                With every single one of our clients we bring forth a deep
                passion for creative Problem solving innovations forward
                thinking brands boundaries
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Box>

      {/* Services */}
      <Box component="section" pt={0} px={4}>
        {/* Solutions  */}
        <Grid container justifyContent="center" mt={6}>
          <Grid
            container
            item
            lg={11}
            sx={{
              // borderBottom: "1px solid #707070",
              flexDirection: { lg: "row-reverse", sm: "column" },
              justifyContent: "center",
            }}>
            <Grid item lg={9} xs={12}>
              <SolutionsList />
            </Grid>
          </Grid>
        </Grid>
      </Box>

      {/* Difference  */}
      <Box component="section" py={8} id="process" bgcolor={"#f7f7f7"}>
        <Grid container justifyContent={"center"}>
          <Typography
            variant={"h2"}
            mb={0}
            sx={{
              fontWeight: "700",
              // fontFamily: "Poppins",
              fontSize: { lg: "60px", xs: "40px" },
              textAlign: "center",
            }}>
            Elevate Your Business with{" "}
            {/* <Box component="div" sx={{ display: "inline", color: "#00051a" }}>
              [
            </Box>
            
            <Box component="div" sx={{ display: "inline", color: "#00051a" }}>
              ]
            </Box> */}
          </Typography>
        </Grid>
        <Grid container justifyContent={"center"} position={"relative"}>
          <Box
            position={"absolute"}
            top={{ lg: "-30px", xs: "-150px" }}
            right={{ lg: "80px", xs: "40px" }}>
            <div className="loading" id="loading4"></div>
          </Box>
          <Typography variant={"h2"} sx={darkHallow} mb={2}>
            Our Process
          </Typography>
        </Grid>
        <Box mt={4} px={4}>
          <SliderGrid />
        </Box>
      </Box>
      {/* process */}

      {/* Let's talk */}
      <Box
        component="section"
        position="relative"
        sx={{
          padding:'90px 0'
        }}
        id="testimonials"
        >
          <Grid container justifyContent={"center"}>
          <Typography
            variant={"h2"}
            mb={0}
            sx={{
              fontWeight: "700",
              // fontFamily: "Poppins",
              fontSize: { lg: "60px", xs: "40px" },
              textAlign: "center",
            }}>
           
           The Voice of Our
            
          </Typography>
        </Grid>
        <Grid container justifyContent={"center"} position={"relative"}>
          <Box
            position={"absolute"}
            top={{ lg: "-90px", xs: "-150px" }}
            left={{ lg: "80px", xs: "40px" }}>
            <div className="smiley">
              <figure className="face">
                <div className="eyes">
                  <div className="eye"></div>
                  <div className="eye"></div>
                </div>
                <div className="mouth"></div>
              </figure>
            </div>
          </Box>
          <Typography variant={"h2"} sx={darkHallow} mb={8} pb={4}>
          Happy Clients
          </Typography>
        </Grid>
        <Testimonial testimonials={testimonials} />
      </Box>
      <Box
        component="section"
        py={{ lg: 4, xs: 0 }}
        px={4}
        id="contact-us"
        sx={{
          backgroundColor: { lg: "#00051a", xs: "#00051a" },
          color: { lg: "#ffffff", xs: "#fff" },
        }}>
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={5}>
          <Grid container mt={10} justifyContent={"center"}>
            <Grid item lg={7} xs={12}>
              <Typography
                variant="h2"
                mt={15}
                sx={{
                  fontSize: { lg: "80px", sm: "40px" },
                  fontWeight: 700,
                  marginTop: { lg: 2, xs: 0 },
                  marginBottom: { lg: 8, xs: 0 },

                  textAlign: { lg: "center", xs: "center" },
                }}
                component={"h2"}>
                Get in Touch
              </Typography>
              <Box
                position={"relative"}
                textAlign={"center"}
                marginLeft={{ lg: "0px", xs: "0" }}
                >
                <img src="/letsTalk.svg" style={{margin:'auto'}}/>
              </Box>
            </Grid>
            <Grid item lg={5} xs={12} marginBottom={"60px"}>
              <ContactCard />
            </Grid>
            <Grid item ml={-1}></Grid>
          </Grid>
        </Stack>
      </Box>
    </>
  );
};

export default Preface;

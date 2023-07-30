import React, { useEffect } from "react";
import { differences } from "@/constants";
import { Grid, Box, Typography } from "@mui/material";

const ImageGrid = (scrollY) => {
  //   const getMargin = (index) => {
  //     let position;
  //     if (index < 3) {
  //       position = index * 3;
  //     } else if (index > 2 && index < 7) {
  //       position = (index - 3) * 3;
  //     } else {
  //       position = index;
  //     }
  //     return position;
  //   };

  return (
    <Grid
      container
      lg={12}
      xs={12}
      gap={6}
      justifyContent={"center"}
      //   ml={{ lg: -(scrollY.scrollY / 80) + 25, xs: 0 }}
    >
      {differences.map((ele, index) => {
        return (
          <Grid
            item
            lg={2.5}
            sm={4}
            xs={6}
            key={index}
            // mt={{ lg: getMargin(index), xs: 0 }}
          >
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              sx={{
                width: { lg: "300px", sm: "210px", xs: "260px" },
                height: { lg: "300px", sm: "210px", xs: "260px" },
                border: "1px solid #6C7A89",
                borderRadius: "50%",
              }}
            >
              <Typography sx={{ fontSize: "50px", fontWeight: 500 }}>
                {ele.value}
              </Typography>
              <Typography
                sx={{ fontSize: "25px", color: "#6C7A89", fontWeight: "normal" }}
                textAlign="center"
                mt={3}
                px={2}
              >
                {ele.item}
              </Typography>
            </Box>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default ImageGrid;

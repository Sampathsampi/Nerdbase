import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { buttonPrimary, circle } from "@/constants";
import { buttonSecondary, circleSecondary } from "@/constants/styles";
import { useForm } from "react-hook-form";

function ContactCard() {
  const styles = {
    textBox: {
      "& $div": {
        justifyContent: "center",
        "& $input": {
          width: "30%",
        },
      },
      "& $p": {
        alignSelf: "center",
      },
    },
  };
  const { register, handleSubmit,formState: { errors } } = useForm();

const onSubmit = (data:any) => {
  var raw = JSON.stringify({
    "name": data?.name || 'Not given',
    "email": data?.email || 'Not given',
    "message": data?.message || "Not given"
  });

  var requestOptions:any = {
    method: 'POST',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    body: raw,
    redirect: 'follow'
  };

  fetch("http://localhost:3000/api/v1/users", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
    
    
}


  return (
    <form onSubmit={handleSubmit(onSubmit)}>
    <Card sx={{ textAlign: "center" , borderRadius: '50px'}}>
      <CardContent>
        <Typography gutterBottom variant="h4"
        mt={2}
         sx={{
          // fontFamily: "Poppins",
          fontSize: { lg: "24px", xs: "18px" },
          
          fontWeight: 700,
        }}
        component="div">
          Get a Quote
        </Typography>
      </CardContent>
      <Box sx={{paddingLeft: {lg: 3 ,xs: 3},paddingRight: {lg: 3 ,xs: 3}}} className="contactField">
      <Grid container justifyContent="center" mt={0}>
      <Grid item lg={6} xs={12} sx={{padding:'0 15px'}}>
        <TextField
          sx={{ width: "100%", margin: "0px 0 0 0" ,fontSize:'15px'}}
          id="standard-basic"
          label="Name"
          variant="standard"
          error={errors.name ? true : false}
          {...register("name",{ required: true })}
        />
        </Grid>
        <Grid item lg={6} xs={12} sx={{padding:'0 15px'}}>

        
        <TextField
          sx={{ width: "100%", margin: "0px 0 0 0" }}
          id="standard-basic"
          label="Email address"
          variant="standard"
          error={errors.email ? true : false}
          {...register("email",{ required: true })}
        />
        </Grid>
        </Grid>
        {/*  */}
        <Grid item lg={12} xs={12} sx={{padding:'0 15px'}}>
        <TextField
          sx={{ width: "100%", margin: "30px 0 0px 0" }}
          id="outlined-multiline-static"
          label="Message"
          error={errors.message ? true : false}
          {...register("message",{ required: true })}
          multiline
          rows={4}
        />
        </Grid>
      </Box>
      <CardActions sx={{ justifyContent: "center" }}>
        <Box display="flex" justifyContent="center" mb={6} mt={4}>
          <Button type="submit" variant={"outlined"} onClick={() => {}} sx={buttonSecondary}>
            <Typography
              sx={{
                fontSize: { lg: "18px", sm: "14px" },
              }}
            >
              Contact us
            </Typography>
          </Button>

        </Box>
      </CardActions>
    </Card>
    </form>
  );
}

export default ContactCard;

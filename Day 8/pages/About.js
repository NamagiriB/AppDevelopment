import React from "react";
import Layout from "./../components/Layout/Layout";
import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <Layout>
      <Box
        sx={{
          my: 5,
          textAlign: "center",
          p: 2,
          "& h4": {
            fontWeight: "bold",
            my: 2,
            fontSize: "2rem",
          },
          "& p": {
            textAlign: "justify",
          },
          "@media (max-width:600px)": {
            mt: 0,
            "& h4 ": {
              fontSize: "1.5rem",
            },
          },
        }}
      >
        <Typography variant="h4">Welcome To Fresh Harvest</Typography>
        <div className='homeimagebox'>
        <div className="himg1">
          <img src='https://www.foodengineeringmag.com/ext/resources/2022/09/27/dan-meyers-0AgtPoAARtE-unsplash_1170x658.jpg?1664911166' style={{width:'800px',height:'400px'}}></img>
        </div>
        </div>
        <p>
        Welcome to Fresh Harvest Organics, your one-stop e-store for premium organic fruits and vegetables. We believe that good health starts with good food, and our mission is to bring you the freshest, healthiest, and most delicious organic produce directly to your doorstep
          

      
        <br />
        </p>
          <br></br>
        <p>
        We love food. And here’s why...
We all know that there are certains dishes who’s name itself brings about a cheer in our taste buds. But what makes these dishes great? Of course it’s the way it’s cooked, but it’s also about the quality of ingredients used in making them. That's why we strive to bring you the freshest and best fruits and vegetables plucked just 12 hours before it reaches your home.
        </p>
        <p>
        <br></br>
        Our farmer first approach...
Our farmers are our pride, a part of our family. These farmers have been with us for over 60 years and we, at Madras Mandi ensure that all our farmers are paid fairly and on time.
        </p>
      </Box>
    </Layout>
  );
};

export default About;

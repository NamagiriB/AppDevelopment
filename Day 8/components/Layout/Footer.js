import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
const Footer = () => {
  const navigate=useNavigate();
  const terms=()=>{
    navigate("/Terms");
  }
  const privacy=()=>{
    navigate("/Privacy");
  }
  const faq=()=>{
    navigate("/FAQ");
  }
  return (
    <>
      <Box
        sx={{ textAlign: "center", bgcolor: "#1A1A19", color: "white", p: 8 }}
      >
        <Box
          sx={{
            my: 3,
            "& svg": {
              fontSize: "90px",
              cursor: "pointer",
              mr: 2,
            },
            "& svg:hover": {
              color: "goldenrod",
              transform: "translateX(5px)",
              transition: "all 400ms",
            },
            
            
    
          }}
        >
          {/* icons */}
          
          <div onClick={terms} style={{color:"white",marginLeft:"-20%",cursor:"pointer"}}>Terms and condition</div>
          <div onClick={privacy} style={{color:"white",marginLeft:"10%",cursor:"pointer"}}>Privacy policy</div>
          <div onClick={faq} style={{color:"white",marginLeft:"30%",cursor:"pointer"}}>FAQ</div>
          <TwitterIcon />
          <GitHubIcon />
          <YouTubeIcon />

        </Box>
        <Typography
          variant="h5"
          sx={{
            "@media (max-width:600px)": {
              fontSize: "1rem",
            },
          }}
        >
          All Rights Reserved &copy; Freshly Harvested
        </Typography>
      </Box>
     <button className="terms" type="submit">
                {/* <strong>Sign up</strong> */}
              </button>
      
    </>
  );
};

export default Footer;

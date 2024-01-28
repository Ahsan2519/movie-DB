import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
const Loader = () => {
  return (
    <Box sx={{ display: "flex ", position: 'relative', justifyContent: 'center', alignItems:'center' }}>
      <CircularProgress />
      <Typography
        variant="body2"
        color="text.secondary"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          fontSize: "25px",
          color: "#000",
          fontWeight: "500",
        }}
      >
        Loading...
      </Typography>
    </Box>
  );
};

export default Loader;

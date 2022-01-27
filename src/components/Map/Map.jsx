import React from "react";
import GoogleMapReact from "google-map-react";
import { Paper, Typography, useMediaQuery } from "@material-ui/core";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import { Rating } from "@material-ui/lab";
import useStyles from "./styles";

const Map = () => {
  const classes = useStyles();
  const isMobile = useMediaQuery("(min-width:600px)");
  const coordinates = { lat: 40.73, lng: -73.93 };
  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyA-R_pXOY-3EUjOP5cD-l16TPdBLxjFHjQ' }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={1}
        margin={[50, 50, 50, 50]}
        // options={""}
        // onChildClick={""}
        // onChange={""}
      >

      </GoogleMapReact>
    </div>
  );
};

export default Map;

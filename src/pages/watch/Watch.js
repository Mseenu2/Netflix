import { ArrowBackOutlined } from "@mui/icons-material";
import React from "react";
import "./watch.scss";

const Watch = ({user}) => {
  return (
    <div className="watch">
      <div className="back">
        <ArrowBackOutlined />
        Hoem
      </div>
      <video
        className="video"
        autoPlay
        progress
        controls
        src="https://media.istockphoto.com/id/1359576900/video/hummingbird-hovering-in-backlighting-sunlight-slow-motion-and-zoom-in-zoom-out.mp4?s=mp4-640x640-is&k=20&c=eBOQ6_3uYGyG9CAZagESNOAcLEqc7xR4EJM3U-ryFrE="
      />
    </div>
  );
};

export default Watch;

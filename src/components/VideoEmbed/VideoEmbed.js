import React from "react";

const VideoEmbed = ({ src, title }) => (
  <div
    style={{
      position: "relative",
      paddingBottom: "64.63195691202873%",
      height: 0,
    }}
  >
    <iframe
      src={src}
      title={title}
      frameBorder="0"
      allowFullScreen
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
      }}
    ></iframe>
  </div>
);

export default VideoEmbed;

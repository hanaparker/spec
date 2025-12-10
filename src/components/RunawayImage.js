
import React, { useState } from "react";

import mila from "./mila.png";
import misha from "./misha.png";
import elizabeth from "./elizabeth.png";
import derick from "./derick.png";
import nicholas from "./nicholas.png";
import noel from "./noel.png";
import joel from "./joel.png";

const RunawayImage = () => {
  const images = [mila, misha, elizabeth, derick, nicholas, noel, joel];

  const [position, setPosition] = useState({ top: "50%", left: "50%" });
  const [imgSrc, setImgSrc] = useState(images[0]);

  const handleMouseEnter = () => {
    const maxWidth = window.innerWidth - 150;
    const maxHeight = window.innerHeight - 150;

    const left = Math.random() * maxWidth;
    const top = Math.random() * maxHeight;

    const randomImg = images[Math.floor(Math.random() * images.length)];

    setImgSrc(randomImg);
    setPosition({ top: `${top}px`, left: `${left}px` });
  };

  return (
    <img
      src={imgSrc}
      alt="Runaway"
      style={{
        position: "absolute",
        top: position.top,
        left: position.left,
        width: "120px",
        height: "120px",
        cursor: "pointer",
        transition: "top 0.3s, left 0.3s",
        borderRadius: "10px"
      }}
      onMouseEnter={handleMouseEnter}
    />
  );
};

export default RunawayImage;

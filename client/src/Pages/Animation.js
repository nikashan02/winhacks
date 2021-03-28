import React from "react";
import Lottie from "react-lottie";
import animationData from "./drawkit-grape-animation-2-LOOP.json";

function Animation() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return <Lottie options={defaultOptions} isClickToPauseDisabled={true} height={800} width={800} />;
}

export default Animation;
"use client";
import Lottie from "lottie-react";

const AnimationLottie = ({ animation, width }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
    style: {
      width: width,
    },
  };
  console.log("Animation", animation);
  return <Lottie {...defaultOptions} />;
};

export default AnimationLottie;

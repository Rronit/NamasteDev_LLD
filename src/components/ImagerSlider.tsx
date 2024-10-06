import { styled } from "@mui/material/styles";
import React, { useEffect, useState } from "react";

const data = [
  "https://images.pexels.com/photos/28743445/pexels-photo-28743445/free-photo-of-sea-turtle-swimming-under-sunlit-waters.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/28217963/pexels-photo-28217963/free-photo-of-a-mountain-range-with-a-road-running-through-it.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/27940080/pexels-photo-27940080/free-photo-of-bella-notte.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/27498575/pexels-photo-27498575/free-photo-of-sea-coast-of-new-york-with-brooklyn-bridge-at-sunset.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/28672757/pexels-photo-28672757/free-photo-of-two-ducks-swimming-among-autumn-leaves.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/27947532/pexels-photo-27947532/free-photo-of-woman-with-food-on-a-picnic.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
];

const SliderWrapper = styled("div")({
  display: "flex",
  transition: "transform 1s ease-in-out"
});

const Slide = styled("img")({
  minWidth: "100%",
  height: "500px"
});

export default function ImagerSlider() {
  const [currentIdx, setCurrentIdx] = useState(0);

  useEffect(() => {
    const i = setInterval(() => slideImage(), 1000);
    return () => clearInterval(i);
  }, []);

  function slideImage() {
    setCurrentIdx(currentIdx =>
      currentIdx === data.length - 1 ? 0 : currentIdx + 1
    );
  }

  return (
    <div
      style={{
        overflow: "hidden",
        width: "50%",
        margin: "auto",
        border: "1px solid lightgrey"
      }}
    >
      <SliderWrapper style={{ transform: `translateX(-${currentIdx * 100}%)` }}>
        {data.map((imgSrc, idx) => (
          <Slide key={idx} src={imgSrc} alt={`slide-${idx}`} />
        ))}
      </SliderWrapper>
    </div>
  );
}

"use client";
import { useSwiper } from "swiper/react";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";

interface IProps {
  containerStyles: string;
  btnStyles: string;
  iconStyles: string;
}

export default function WorkSliderBtns({
  containerStyles,
  btnStyles,
  iconStyles,
}: IProps) {
  const swiper = useSwiper();

  const handlePrev = () => {
    if (swiper && typeof swiper.slidePrev === "function") {
      swiper.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiper && typeof swiper.slideNext === "function") {
      swiper.slideNext();
    }
  };

  return (
    <div className={containerStyles}>
      <button
        className={btnStyles}
        onClick={handlePrev}
        type="button"
        aria-label="Previous slide"
      >
        <PiCaretLeftBold className={iconStyles} />
      </button>
      <button
        className={btnStyles}
        onClick={handleNext}
        type="button"
        aria-label="Next slide"
      >
        <PiCaretRightBold className={iconStyles} />
      </button>
    </div>
  );
}

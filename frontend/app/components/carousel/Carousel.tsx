"use client"
import Glide, { Options } from "@glidejs/glide";
import { forwardRef, useEffect, useImperativeHandle, useRef } from "react";
import "@glidejs/glide/dist/css/glide.core.css"
// import "@glidejs/glide/src/assets/sass/glide.core"


export const sliderConfiguration: Partial<Options> = {
  type: "carousel",
  gap: 20,
  perView: 3
};

type CarouselType = {
  children: React.ReactNode;
};

export const Carousel = forwardRef(({ children }: CarouselType, ref) => {
  const sliderRef = useRef<HTMLDivElement>(null);

  useImperativeHandle(ref, () => sliderRef.current);

  useEffect(() => {
    const slider = new Glide(
      sliderRef.current as HTMLElement,
      sliderConfiguration,
    );
    slider.mount();

    return () => {
      slider.destroy();
    };
  }, []);

  return (
    <div className="glide relative md:px-0" ref={sliderRef}>
      <div className="glide__track" data-glide-el="track">
        <ul className="glide__slides">
          { children }
        </ul>
      </div>
    </div>
  );
});

Carousel.displayName = "Carousel";
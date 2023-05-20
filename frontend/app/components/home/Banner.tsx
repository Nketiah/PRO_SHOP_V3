import Image from "next/image"
import React from "react";
import { Carousel } from "../carousel/Carousel"
import LazyLoadingImage from "../LazyLoadingImage"
//import Searchbar from "./Searchbar";


const Banner = () => {
  return (
    <>
      <section className="lg:px-0">
        <section className="h-[67vh] overflow-hidden bg-[#f8f0ea]">
          <div
            className="bg-center bg-no-repeat h-full relative"
            style={{ backgroundImage: "url(assets/banner-bg.svg)" }}
          >
            {/* <Searchbar /> */}
            <div className="absolute top-0 left-0 h-full w-full bg-black/30 z-10 lg:hidden" />
            <Image
              src="/assets/hero-right.png"
              alt="banner model"
              className="absolute bottom-0 right-10 lg:w-[40%]"
              height={"614"}
              width={"601"}
            />
            <Carousel>
            <button className="glide__slide" data-glide-dir="=0">1</button>
            <button className="glide__slide" data-glide-dir="=1">2</button>
            <button className="glide__slide" data-glide-dir="=2">3</button>
            </Carousel>
          </div>
        </section>
      </section>
    </>
  );
};

export default Banner;

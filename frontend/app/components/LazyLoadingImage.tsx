import Image from "next/image"
import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Placeholder from ".././../public/assets/placeholder.svg"


type ImageProps = {
    src: any
    alt: string
    height: number | string
    width: number | string
    className: string
    local?: boolean
}


const LazyLoadingImage = ({ src, alt, height, width, className, local }: ImageProps) => {
  return (
    <>
      {local ? (
        <Image
         src={src}
         alt={alt}
         placeholder="blur"
         blurDataURL="/assets/placeholder.svg"
         />
      ) : (<LazyLoadImage
        src={src}
        alt={alt}
        height={height}
        width={width}
        placeholderSrc={Placeholder}
        className={`max-w-full object-cover object-center ${className}`}
      />)}
      
    </>
  );
};

export default LazyLoadingImage;

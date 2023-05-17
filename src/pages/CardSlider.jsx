import Carousel from "react-multi-carousel";
import {Box} from "@chakra-ui/react";
import "react-multi-carousel/lib/styles.css";
import { productData, responsive } from "./Data";
import CardCarousel from "./CarouselCard";


export default function CardSlider() {
  const product = productData.map((item) => (
   <CardCarousel  
    key={item.id} {...item} />
  ));
  return (
    <Box style={{ border: "0px solid red",width:"100%",zIndex:"0" }}>
      <Carousel showDots={true} responsive={responsive}>
        {product}
      </Carousel>
    </Box>
  );
}
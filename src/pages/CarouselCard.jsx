import React from "react";
import { Button, Text,Image, Box } from "@chakra-ui/react";
export default function CardCarousel({ name, price, imageUrl, id }) {
return (
    <Box mb={"35px"} ml={"7px"} mr={"7px"} mt={"30px"} textAlign={"left"} border={"0px solid green"} zIndex={-9999} w={"300px"} bgColor={"#87CEEB"} style={{padding:"20px"}}>
      <Image src={imageUrl} alt="revati" mb={"50px"} style={{width:"10%"}} />
      <Text noOfLines={2} mb={"20px"} style={{fontWeight:"bold"}}>{name}</Text>
      
      <Text  mb={"15px"} >{price}</Text>
      <Text  mb={"15px"} style={{fontWeight:"bold",textAlign:"end",marginRight:"90px"}}>Rahul</Text>
      <Text  mb={"15px"} style={{fontWeight:"bold",textAlign:"end"}}>Sofware Engineer</Text>
      
    </Box>
  );
}

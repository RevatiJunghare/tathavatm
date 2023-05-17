import { Box, Button, HStack, Input, Text } from '@chakra-ui/react'
import React from 'react'
import "./index.css"
import search from "./assets/search_flat.jpg"
import real_estate from "./assets/icons8-apartment-24.png"
import infra_roads from "./assets/icons8-heating-room-24.png"
import transporter from "./assets/icons8-plane-ladder-24.png"
import supplier from "./assets/icons8-tow-truck-with-trailers-24.png"
import consultants from "./assets/icons8-counselor-24.png"
import industry from "./assets/icons8-factory-24.png"
import customer from "./assets/cust.png"
import phone from "./assets/phone.png"
import deal from "./assets/deal.png"
import laptop from "./assets/lap.png"
import tech from "./assets/tech.png"
import searchanalytics from "./assets/searchanalytics.png"
import CardSlider from './CardSlider'

const styleHeadings = {
    fontFamily: "Lato-Regular,Helvetica,Arial,sans-serif",
    fontSize: "40px",
    lineHeight: "42.5px",
    fontWeight: "500",
  };

const Home = () => {
  return (
    <>
    <div class="header__component">
      <span>Search Engines of Constuction Industry</span>
      <div class="items">
        <input type="text" class="input__box" />
        <img src={search} alt="img" class="search__img" />
      </div>
      <div class="SortBy">
       <span>Sort By: </span>
       <span> <input type="checkbox"/> Company Name</span>
       <span> <input type="checkbox"/> Company Name</span>
       <span> <input type="checkbox"/> Company Name</span>
       <span> <input type="checkbox"/> Company Name</span>
      </div>
      <div class="industry">
         <div>
            <img src={real_estate} alt="factory"/>
            <span>REAL ESTATE</span>
         </div>
         <div>
            <img src={infra_roads} alt="factory"/>
            <span>INFRA AND ROADS</span>
         </div>
         <div>
            <img src={transporter} alt="factory"/>
            <span>TRANSPORTERS</span>
         </div>
         <div>
            <img src={supplier} alt="factory"/>
            <span>SUPPLIERS</span>
         </div><div>
            <img src={consultants} alt="factory"/>
            <span>CONSULTANTS</span>
         </div>
         <div>
            <img src={industry} alt="factory"/>
            <span>INDUSTRY</span>
         </div>
      </div>
    </div>


    <div class="body_component">
        <div id="heading2">
            <h3>Our Key value</h3>
        </div>

        <div class="our_key_value">
            <div>
                <img src={customer}/>
                <h4>Get notified by right customers</h4>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam consequatur expedita deleniti voluptatibus odit assumenda nam quibusdam enim, perferendis itaque. Delectus rerum animi aliquam aut, voluptates aperiam! Sunt, quo nulla.</p>
            </div>
            <div>
                <img src={phone}/>
                <h4>Get notified by right customers</h4>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam consequatur expedita deleniti voluptatibus odit assumenda nam quibusdam enim, perferendis itaque. Delectus rerum animi aliquam aut, voluptates aperiam! Sunt, quo nulla.</p>
            </div>
            <div>
                <img src={deal}/>
                <h4>Increase chances of deal closure</h4>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam consequatur expedita deleniti voluptatibus odit assumenda nam quibusdam enim, perferendis itaque. Delectus rerum animi aliquam aut, voluptates aperiam! Sunt, quo nulla.</p>
            </div>



            <div>
                <img src={laptop}/>
                <h4>Profile Visitor Analytics</h4>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam consequatur expedita deleniti voluptatibus odit assumenda nam quibusdam enim, perferendis itaque. Delectus rerum animi aliquam aut, voluptates aperiam! Sunt, quo nulla.</p>
            </div>
            <div>
                <img src={tech}/>
                <h4>Technology trends of industry</h4>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam consequatur expedita deleniti voluptatibus odit assumenda nam quibusdam enim, perferendis itaque. Delectus rerum animi aliquam aut, voluptates aperiam! Sunt, quo nulla.</p>
            </div>
            <div>
                <img src={searchanalytics}/>
                <h4>Search analytics</h4>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam consequatur expedita deleniti voluptatibus odit assumenda nam quibusdam enim, perferendis itaque. Delectus rerum animi aliquam aut, voluptates aperiam! Sunt, quo nulla.</p>
            </div>
        </div>
    </div>


    <Box width={"100%"}>
        <Text style={styleHeadings} mt={"35px"}>
          Customer Feedback
        </Text>
      </Box>
      <Box width={"100%"} zIndex={-9999} >
      <CardSlider />
      </Box>
    </>
  )
}

export default Home
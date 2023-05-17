import React, { Component } from "react";
 import Slider from "react-slick";
 import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./Slidebar.css";
import person from "./assets/person.png"

export default class Sliderbar extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      
    };
    return (
      <div className="mainslide1">
        <h3 id="cust">Customer Feedback</h3>
        <Slider {...settings}>
          <div className="imgslide">
                <img style={{width:"30%"}} src={person} alt="img"/>
                <h3>"Amazing Product and Company"</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, voluptate totam distinctio consequatur placeat mollitia. Placeat maiores incidunt magnam voluptatem impedit numquam, sequi est fugit et iure hic ullam amet.Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, voluptate totam distinctio consequatur placeat mollitia. Placeat maiores incidunt magnam voluptatem impedit numquam, sequi est fugit et iure hic ullam amet.</p>
                <h4>Rahul</h4>
                <h4>Software Engineer</h4>
          </div>
   
          <div className="imgslide">
                <img style={{width:"30%"}} src={person} alt="img"/>
                <h3>"Amazing Product and Company"</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, voluptate totam distinctio consequatur placeat mollitia. Placeat maiores incidunt magnam voluptatem impedit numquam, sequi est fugit et iure hic ullam amet.Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, voluptate totam distinctio consequatur placeat mollitia. Placeat maiores incidunt magnam voluptatem impedit numquam, sequi est fugit et iure hic ullam amet.</p>
                <h4>Rahul</h4>
                <h4>Software Engineer</h4>
          </div>
         
          <div className="imgslide">
                <img style={{width:"30%"}} src={person} alt="img"/>
                <h3>"Amazing Product and Company"</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, voluptate totam distinctio consequatur placeat mollitia. Placeat maiores incidunt magnam voluptatem impedit numquam, sequi est fugit et iure hic ullam amet.Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, voluptate totam distinctio consequatur placeat mollitia. Placeat maiores incidunt magnam voluptatem impedit numquam, sequi est fugit et iure hic ullam amet.</p>
                <h4>Rahul</h4>
                <h4>Software Engineer</h4>
          </div>
          <div className="imgslide">
                <img style={{width:"30%"}} src={person} alt="img"/>
                <h3>"Amazing Product and Company"</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, voluptate totam distinctio consequatur placeat mollitia. Placeat maiores incidunt magnam voluptatem impedit numquam, sequi est fugit et iure hic ullam amet.Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, voluptate totam distinctio consequatur placeat mollitia. Placeat maiores incidunt magnam voluptatem impedit numquam, sequi est fugit et iure hic ullam amet.</p>
                <h4>Rahul</h4>
                <h4>Software Engineer</h4>
          </div>
          <div className="imgslide">
                <img style={{width:"30%"}} src={person} alt="img"/>
                <h3>"Amazing Product and Company"</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, voluptate totam distinctio consequatur placeat mollitia. Placeat maiores incidunt magnam voluptatem impedit numquam, sequi est fugit et iure hic ullam amet.Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, voluptate totam distinctio consequatur placeat mollitia. Placeat maiores incidunt magnam voluptatem impedit numquam, sequi est fugit et iure hic ullam amet.</p>
                <h4>Rahul</h4>
                <h4>Software Engineer</h4>
          </div>
          <div className="imgslide">
                <img style={{width:"30%"}} src={person} alt="img"/>
                <h3>"Amazing Product and Company"</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, voluptate totam distinctio consequatur placeat mollitia. Placeat maiores incidunt magnam voluptatem impedit numquam, sequi est fugit et iure hic ullam amet.Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, voluptate totam distinctio consequatur placeat mollitia. Placeat maiores incidunt magnam voluptatem impedit numquam, sequi est fugit et iure hic ullam amet.</p>
                <h4>Rahul</h4>
                <h4>Software Engineer</h4>
          </div>
          <div className="imgslide">
                <img style={{width:"30%"}} src={person} alt="img"/>
                <h3>"Amazing Product and Company"</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, voluptate totam distinctio consequatur placeat mollitia. Placeat maiores incidunt magnam voluptatem impedit numquam, sequi est fugit et iure hic ullam amet.Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, voluptate totam distinctio consequatur placeat mollitia. Placeat maiores incidunt magnam voluptatem impedit numquam, sequi est fugit et iure hic ullam amet.</p>
                <h4>Rahul</h4>
                <h4>Software Engineer</h4>
          </div>
          
          <div className="imgslide">
               <img style={{width:"30%"}} src={person} alt="img"/>
                <h3>"Amazing Product and Company"</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, voluptate totam distinctio consequatur placeat mollitia. Placeat maiores incidunt magnam voluptatem impedit numquam, sequi est fugit et iure hic ullam amet.Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, voluptate totam distinctio consequatur placeat mollitia. Placeat maiores incidunt magnam voluptatem impedit numquam, sequi est fugit et iure hic ullam amet.</p>
                <h4>Rahul</h4>
                <h4>Software Engineer</h4>
          </div>
        </Slider>
      </div>
    );
  }
}
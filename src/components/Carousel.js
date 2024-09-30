import React from "react";
import { Carousel } from "react-bootstrap";
import '../styles/Carousel.css'
import Coverg from '../assets/caro/cgr.jpg';
import Gn from '../assets/caro/Gn.jpg';
import gr from '../assets/caro/gr.jpg';
import p from '../assets/caro/p.jpg';
import s from '../assets/caro/s.jpg';


function Carousels() {
    return (
        <Carousel className="text-center" interval={3000} pause="hover">
            <Carousel.Item>
                <img src={Coverg} alt="Coverg" className="d-block imsi"/>
                <Carousel.Caption className="cap">
                <em><h4>From our family to yours trusted, <b>Responsible</b> Breeders .</h4></em>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img src={Gn} alt="Gn" className="d-block imsi"/>
                <Carousel.Caption className="cap">
                    <em><h4>Puppy love, protected fully <b><em>Vaccinated</em></b> for a healthy start.</h4></em>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img src={gr} alt="gr" className="d-block imsi"/>
                <Carousel.Caption className="cap">
                    <em><h4>Strong, happy, and full of life <b><em>Healthy Dogs</em></b> raised with care</h4></em>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img src={p} alt="p" className="d-block imsi"/>
                <Carousel.Caption className="cap">
                <em><h4>Get your <b><em>Dream Dog </em></b> at half the price 50% off on all breeds</h4></em>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img src={s} alt="s" className="d-block imsi"/>
                <Carousel.Caption className="cap">
                <em><h4><b><em>Your Dog</em></b> is waiting for You</h4></em>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default Carousels;
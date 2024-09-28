import React from "react";
import '../styles/Desc.css'
import {Card} from 'react-bootstrap';

import Vaci from '../assets/Desc/vaci.jpg';
import He from '../assets/Desc/pet.jpg'
import Res from '../assets/Desc/paw.jpg'

function Desc() {
    return (
        <div className="d-flex justify-content-center flex-wrap">
            <div className="col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center mb-4" data-aos="fade-up" data-aos-duration="1000">
                <Card className="shadow-lg descar" style={{ width: '22rem', height: '400px' }}>
                    <Card.Img variant="top" src={Res} style={{ height: '180px', objectFit: 'cover' }} />
                    <Card.Body style={{ overflow: 'hidden' }} className="bl">
                        <Card.Title>
                            <h3 className="m-1 ">Responsible Breeders</h3>
                        </Card.Title>
                        <Card.Text className="sm">
                            Responsible breeders prioritize the health and well-being of their dogs...
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center mb-4" data-aos="fade-up" data-aos-duration="1000">
                <Card className="shadow-lg descar" style={{ width: '22rem', height: '400px' }}>
                    <Card.Img variant="top" src={He} style={{ height: '180px', objectFit: 'cover' }} />
                    <Card.Body style={{ overflow: 'hidden' }} className="bl">
                        <Card.Title>
                            <h3 className="m-1 ">Healthy Dogs</h3>
                        </Card.Title>
                        <Card.Text className="sm">
                            Healthy dogs are the result of proper nutrition...
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center mb-4" data-aos="fade-up" data-aos-duration="1000">
                <Card className="shadow-lg descar" style={{ width: '22rem', height: '400px' }}>
                    <Card.Img variant="top" src={Vaci} style={{ height: '180px', objectFit: 'cover' }} />
                    <Card.Body style={{ overflow: 'hidden' }} className="bl">
                        <Card.Title>
                            <h3 className="m-1">Vaccinated Dogs</h3>
                        </Card.Title>
                        <Card.Text className="sm">
                            Vaccinated dogs are protected against various diseases...
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
}

export default Desc;
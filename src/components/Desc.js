import React from "react";
import '../styles/Desc.css'
import {Card} from 'react-bootstrap';

import Vaci from '../assets/Desc/vaci.jpg';
import He from '../assets/Desc/pet.jpg'
import Res from '../assets/Desc/paw.jpg'

function Desc() {
    return (
        <div className="d-flex justify-content-center flex-wrap">
            <div className="col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center mb-4">
                <Card className="shadow-lg descar" style={{ width: '22rem', height: '400px' }}>
                    <Card.Img variant="top" src={Res} style={{ height: '180px', objectFit: 'cover' }} />
                    <Card.Body style={{ overflow: 'hidden' }} className="bl">
                        <Card.Title>
                            <h3 className="m-1 ">Responsible Breeders</h3>
                        </Card.Title>
                        <Card.Text className="sm">
                            Responsible breeders prioritize the health and well-being of their dogs. They ensure that all breeding practices are ethical and that each dog is raised in a nurturing environment.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center mb-4">
                <Card className="shadow-lg descar" style={{ width: '22rem', height: '400px' }}>
                    <Card.Img variant="top" src={He} style={{ height: '180px', objectFit: 'cover' }} />
                    <Card.Body style={{ overflow: 'hidden' }}className="bl">
                        <Card.Title>
                            <h3 className="m-1 ">Healthy Dogs</h3>
                        </Card.Title>
                        <Card.Text className="sm">
                            Healthy dogs are the result of proper nutrition, regular exercise, and routine veterinary care. They are less prone to genetic diseases and tend to live longer, happier lives.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center mb-4">
                <Card className="shadow-lg descar" style={{ width: '22rem', height: '400px' }}>
                    <Card.Img variant="top" src={Vaci} style={{ height: '180px', objectFit: 'cover' }} />
                    <Card.Body style={{ overflow: 'hidden' }}className="bl">
                        <Card.Title>
                            <h3 className="m-1">Vaccinated Dogs</h3>
                        </Card.Title>
                        <Card.Text className="sm">
                            Vaccinated dogs are protected against various diseases that can be harmful or even fatal. Regular vaccinations are crucial for their health and help in controlling the spread of infectious diseases. 
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
}

export default Desc;
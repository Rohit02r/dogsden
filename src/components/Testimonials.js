import React from "react";
import '../styles/Desc.css';
import '../styles/Testimonials.css';
import {Card} from 'react-bootstrap';
import Kumar from '../assets/Testi/b1.jpg'
import Mathan from '../assets/Testi/b2.jpg'
import Sushmitha from '../assets/Testi/g1.jpg'


function Testimonials() {
    return (
        <div className="testimonials-container d-flex justify-content-center flex-wrap mt-5">
            <div className="col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center mb-4" data-aos="fade-up" data-aos-duration="1000">
                <Card className="shadow-lg tl" style={{ width: '20rem', height: '400px' }}>
                    <Card.Img
                        variant="top"
                        src={Kumar}
                        style={{ height: '150px', width: '150px', objectFit: 'cover', display: 'block', margin: '10px auto' }}
                        className="rounded-circle"
                    />
                    <Card.Body style={{ overflow: 'hidden' }}>
                        <Card.Title>
                            <h3 className="nam">Kumar</h3>
                        </Card.Title>
                        <Card.Text className="small">
                            <span>
                                Responsible breeders prioritize the health and well-being...
                            </span><br />
                            <em>Dated 20/05/2024</em>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center mb-4" data-aos="fade-up" data-aos-duration="1000">
                <Card className="shadow-lg tl" style={{ width: '20rem', height: '400px' }}>
                    <Card.Img
                        variant="top"
                        src={Sushmitha}
                        style={{ height: '150px', width: '150px', objectFit: 'cover', display: 'block', margin: '10px auto' }}
                        className="rounded-circle"
                    />
                    <Card.Body style={{ overflow: 'hidden' }}>
                        <Card.Title>
                            <h3 className="nam">Sushmitha</h3>
                        </Card.Title>
                        <Card.Text className="small">
                            <span>
                                Adopting my new furry friend from Dogsden has been...
                            </span><br />
                            <em>Dated 12/07/2024</em>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center mb-4" data-aos="fade-up" data-aos-duration="1000">
                <Card className="shadow-lg tl" style={{ width: '20rem', height: '400px' }}>
                    <Card.Img
                        variant="top"
                        src={Mathan}
                        style={{ height: '150px', width: '150px', objectFit: 'cover', display: 'block', margin: '10px auto' }}
                        className="rounded-circle"
                    />
                    <Card.Body style={{ overflow: 'hidden' }}>
                        <Card.Title>
                            <h3 className="nam">Mathan</h3>
                        </Card.Title>
                        <Card.Text className="small">
                            <span>
                                I can’t thank Dogsden enough for the wonderful addition...
                            </span><br />
                            <em>Dated 08/09/2024</em>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
}

export default Testimonials;
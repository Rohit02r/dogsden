import React from 'react';
import '../../styles/Adoption.css';
import { useNavigate } from 'react-router-dom';
import { Card} from 'react-bootstrap';
import lr from '../../assets/DogList/lr.jpg';
import gr from '../../assets/DogList/gr.jpg';
import gs from '../../assets/DogList/gs.jpg';
import hus from '../../assets/DogList/hus.jpg';
import shi from '../../assets/DogList/shi.jpg';
import row from '../../assets/DogList/row.jpg';
import po from '../../assets/DogList/po.jpg';
import be from '../../assets/DogList/be.jpg';
import dac from '../../assets/DogList/dac.jpg';
import bd from '../../assets/DogList/bd.jpg';
import box from '../../assets/DogList/box.jpg';
import chi from '../../assets/DogList/chi.jpg';



export const dogs = [
    { name: 'Labrador Retriever', image: lr, description: 'Friendly, intelligent, and good with families.', lifespan: '10-12 years', price: '₹12000 - ₹15000' },
    { name: 'Golden Retriever', image: gr, description: 'Gentle, friendly, and great with children.', lifespan: '10-12 years', price: '₹13000 - ₹16000' },
    { name: 'German Shepherd', image: gs, description: 'Loyal, courageous, often used in police work.', lifespan: '9-13 years', price: '₹14000 - ₹17000' },
    { name: 'Siberian Husky', image: hus, description: 'Energetic, friendly, and striking blue eyes.', lifespan: '12-15 years', price: '₹18000 - ₹22000' },
    { name: 'Shih Tzu', image: shi, description: 'Affectionate, friendly, and popular lap dogs.', lifespan: '10-16 years', price: '₹15000 - ₹18000' },
    { name: 'Rottweiler', image: row, description: 'Strong, confident, and excellent guard dogs.', lifespan: '8-10 years', price: '₹20000 - ₹25000' },
    { name: 'Poodle', image: po, description: 'Hypoallergenic, and highly trainable.', lifespan: '12-15 years', price: '₹16000 - ₹20000' },
    { name: 'Beagle', image: be, description: 'Curious, friendly, and great with kids.', lifespan: '12-15 years', price: '₹13000 - ₹17000' },
    { name: 'Bulldog', image: bd, description: 'Calm, and muscular with wrinkled face.', lifespan: '8-10 years', price: '₹17000 - ₹21000' },
    { name: 'Boxer', image: box, description: 'Playful, loyal, and protective of their families.', lifespan: '6-10 years', price: '₹13000 - ₹15000' },
    { name: 'Chihuahua', image: chi, description: 'Lively, alert, and make great companions.', lifespan: '12-20 years', price: '₹8000 - ₹12000' },
    { name: 'Dachshund', image: dac, description: 'Small, lively, and short legs.', lifespan: '15-18 years', price: '₹18000 - ₹20000' },
  ];
  
  const DogCard = ({ dog, handleAdoptNow }) => (
    <div className="col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center mb-4 brad" data-aos="fade-up" data-aos-duration="1000">
      <Card className="shadow-lg al " style={{ width: '20rem', height: '380px' }}>
        <Card.Img
          variant="top"
          src={dog.image}
          style={{ height: '150px', width: '150px', objectFit: 'cover', display: 'block', margin: '10px auto' }}
          className="rounded-circle"
        />
        <Card.Body style={{ overflow: 'hidden' }}>
          <Card.Title>
            <h2>{dog.name}</h2>
          </Card.Title>
          <Card.Text className="small">
            <em>{dog.description}</em><br />
            <em>Life Span: {dog.lifespan}</em><br />
            <em>Price: {dog.price}</em>
          </Card.Text>
          <button className='ba' onClick={() => handleAdoptNow(dog.name)}>Adopt Now</button>
        </Card.Body>
      </Card>
    </div>
  );
  
  function Adoption() {
    const navigate = useNavigate();
    const handleAdoptNow = (dogName) => {
      const formattedDogName = dogName.toLowerCase().replace(/ /g, '-');
      navigate(`/dog/${formattedDogName}`);
    };
  
    return (
      <>
        <h2 className='mt-3 p-2'>Create Unforgettable Memories with Your New Pup!</h2>
        <hr />
        <div className="testimonials-container d-flex justify-content-center flex-wrap mt-5">
          {dogs.map((dog, index) => (
            <DogCard key={index} dog={dog} handleAdoptNow={handleAdoptNow} />
          ))}
        </div>
      </>
    );
  }
  
  export default Adoption;
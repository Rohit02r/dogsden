import React from 'react';
import '../styles/DogDetails.css'
import { useParams } from 'react-router-dom';
import { dogs } from '../components/pages/Adoption'; 
import { Card, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Validation schema using Yup
const validationSchema = Yup.object().shape({
  phone: Yup.string().matches(/^[0-9]{10}$/, 'Phone number must be 10 digits').required('Phone is required'),
  name: Yup.string().required('Name is required')
});

const DogDetails = () => {
  const { breed } = useParams();
  const dog = dogs.find((dog) => dog.name.toLowerCase().replace(/ /g, '-') === breed);

  // Form handling
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(validationSchema)
  });

  const onSubmit = (data) => {
    toast.success("Our team will contact you soon!");
  };

  return (
    <div className="dd  m-5 ">
      <Card style={{ width: '18rem', height:'380px' }} className='ddcar'>
        <Card.Img variant="top" src={dog.image} className="rounded-circle mt-3" style={{ width: '150px', height: '150px', objectFit: 'cover' ,margin: '10px auto'}} />
        <Card.Body>
          <Card.Title>{dog.name}</Card.Title>
          <Card.Text>{dog.description}</Card.Text>
          <Card.Text><strong>Lifespan:</strong> {dog.lifespan}</Card.Text>
          <Card.Text><strong>Price:</strong> {dog.price}</Card.Text>
        </Card.Body>
      </Card>

      <Form onSubmit={handleSubmit(onSubmit)} className=" ddf  px-5 formd">
        <Form.Group controlId="formName">
          <Form.Label>Name</Form.Label><br/>
          <Form.Control type="text" {...register('name')} isInvalid={!!errors.name}placeholder='Name' />
          <Form.Control.Feedback type="invalid">{errors.name?.message}</Form.Control.Feedback>
        </Form.Group><br/>

        <Form.Group controlId="formPhone">
          <Form.Label>Phone Number</Form.Label><br/>
          <Form.Control type="text" {...register('phone')} isInvalid={!!errors.phone}  placeholder='Phone Number'/>
          <Form.Control.Feedback type="invalid">{errors.phone?.message}</Form.Control.Feedback>
        </Form.Group><br/>

        <button type="submit" className="mt-1 ddb" >Submit</button>
        <ToastContainer />
      </Form>
    </div>
  );
};

export default DogDetails;

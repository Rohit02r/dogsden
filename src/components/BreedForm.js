import React from 'react';
import Select from 'react-select'; 
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/BreedForm.css';

const schema = Yup.object().shape({
    name: Yup.string().required('Name is Required'),
    phone: Yup.string().matches(/^[0-9]+$/, "Must be only digits").min(10, 'Must be at least 10 digits').required('Phone is required'),
    location: Yup.string().required('Address is required'),
   
    file: Yup.mixed().test('fileType', 'Only jpeg/jpg files are allowed', (value) => {
        return value && (value[0]?.type === 'image/jpeg' || value[0]?.type === 'image/jpg');
    }).required('A file is required'),
});

const BreedForm = () => {
    const { register, handleSubmit, control, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = data => {
        console.log(data);
        toast.success("Our Team will Contact You SOON!", {
            position: "bottom-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    };

   
    const breedOptions = [
        { value: 'Labrador Retriever', label: 'Labrador Retriever' },
        { value: 'German Shepherd', label: 'German Shepherd' },
        { value: 'Golden Retriever', label: 'Golden Retriever' },
        { value: 'Bulldog', label: 'Bulldog' },
        { value: 'Beagle', label: 'Beagle' },
        { value: 'Poodle', label: 'Poodle' },
        { value: 'Rottweiler', label: 'Rottweiler' },
        { value: 'Siberian Husky', label: 'Siberian Husky' },
        { value: 'Dachshund', label: 'Dachshund' },
        { value: 'Boxer', label: 'Boxer' },
        { value: 'Shih Tzu', label: 'Shih Tzu' },
        { value: 'Chihuahua', label: 'Chihuahua' }
    ];

    return (
        <div>
            <h3 className='shadow pb-2'>We Will Take Care of Your Dog</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label>Name:</label>
                    <input {...register('name')} className={errors.name ? 'is-invalid' : ''} />
                    <p className='err'>{errors.name?.message}</p>
                </div>

                <div>
                    <label>Phone:</label>
                    <input {...register('phone')} className={errors.phone ? 'is-invalid' : ''} />
                    <p className='err'>{errors.phone?.message}</p>
                </div>

                <div>
                    <label>Address:</label>
                    <input {...register('location')} className={errors.location ? 'is-invalid' : ''} />
                    <p className='err'>{errors.location?.message}</p>
                </div>

                <div>
                    <label>Breed:</label>
                    <Controller
                        name="breed"
                        control={control}
                        render={({ field }) => (
                            <Select
                                {...field}
                                options={breedOptions}
                                className={errors.breed ? 'is-invalid' : ''}
                                placeholder="Select a breed"
                                styles={{
                                    control: (base, state) => ({
                                        ...base,
                                        borderColor: errors.breed ? 'red' : '#FF8225',  
                                        boxShadow: 'none',
                                        '&:hover': { borderColor: '#FF8225' },  
                                        placeholder: { color: 'black' }, 
                                    }),
                                    option: (provided, state) => ({
                                        ...provided,
                                        backgroundColor: state.isSelected ? '#FF8225' : state.isFocused ? '#FFe0d1' : 'white',  
                                        color: state.isSelected ? 'white' : '#FF8225',  
                                        '&:hover': {
                                            backgroundColor: '#FF8225',  
                                            color: 'white',  
                                        },
                                    }),
                                    placeholder: (provided) => ({
                                        ...provided,
                                        color: 'black',  
                                    }),
                                }}
                                
                            />
                        )}
                    />
                    <p className='err'>{errors.breed?.message}</p>
                </div>

                <div>
                    <label>Upload File (JPEG/JPG):</label>
                    <input type="file" {...register('file')} className={errors.file ? 'is-invalid' : ''} />
                    <p className='err'>{errors.file?.message}</p>
                </div>

                <button type="submit" className='buttonbf'>Submit</button>
            </form>

            <ToastContainer />
        </div>
    );
};

export default BreedForm;

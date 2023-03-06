import React, { useState, useContext, useEffect } from 'react';
import { UserContext, UserContextType } from '../../context/UserContext';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

interface Appartment {
  name: string;
  description: string;
  address: string;
  price: number;
  img: string;
}

export const EditAppartment: React.FC = () => {
  const [appartment, setAppartment] = useState<Appartment>({
    name: '',
    description: '',
    price: 0,
    address: '',
    img: '',
  });
  const { user } = useContext<UserContextType>(UserContext);
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    if (!user) return navigate('/');
  }, [user, navigate]);

  useEffect(() => {
    axios.get<Appartment>(`http://localhost:8000/appartments/${id}`).then((res) => {
      setAppartment(res.data);
    });
  }, [id]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!appartment.name || !appartment.description || !appartment.price || !appartment.img || !appartment.address) {
      alert('Please fill all the fields.');
      return;
    }

    if (typeof appartment.name !== 'string' || typeof appartment.description !== 'string' || typeof appartment.price !== 'number' || typeof appartment.img !== 'string') {
      alert('Please make sure all the fields are of correct type.');
      return;
    }

    try {
      await axios.put(`http://localhost:8000/appartments/${id}`, appartment);
      alert('Appartement mis à jour, vous allez être redirigé...');
      navigate('/');
    } catch (error) {
      console.error(error);
      alert("Une erreur est survenue lors de la mise à jour de l'appartement.");
    }
  };

  return (
    <div className='flex flex-col items-center min-h-full justify-center py-12 px-4 sm:px-6 lg:px-8'>
      <div className='w-full max-w-md space-y-8'>
        <img className='mx-auto h-12 w-auto' src='https://pbs.twimg.com/profile_images/997458975753842690/1GzGAN5m_400x400.jpg' alt='chez Nestor' />
        <h2 className='mt-6 text-center text-3xl font-bold tracking-tight text-gray-900'>Mode édition de l'appartement {appartment['name']}</h2>
      </div>
      <form onSubmit={handleSubmit} className='mt-8 space-y-6 max-w-md'>
        <div className='-space-y-px rounded-md shadow-sm'>
          <div>
            <label htmlFor='name' className='sr-only'>
              Name:
            </label>
            <input
              type='text'
              id='name'
              value={appartment.name}
              onChange={(event) => setAppartment({ ...appartment, name: event.target.value })}
              required
              className='relative block mb-2 w-full rounded-t-md border-0 px-2 py-2 bg-white text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
            />

            <label htmlFor='description' className='sr-only'>
              Description:
            </label>
            <input
              type='text'
              id='description'
              value={appartment.description}
              onChange={(event) => setAppartment({ ...appartment, description: event.target.value })}
              required
              className='relative block mb-2 w-full rounded-t-md border-0 px-2 py-2 bg-white text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
            />

            <label htmlFor='price' className='sr-only'>
              Price:
            </label>
            <input
              type='number'
              id='price'
              value={appartment.price}
              onChange={(event) => setAppartment({ ...appartment, price: Number(event.target.value) })}
              required
              className='relative block mb-2 w-full rounded-t-md border-0 px-2 py-2 bg-white text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
            />

            <label htmlFor='price' className='sr-only'>
              Adresse:
            </label>
            <input
              type='text'
              id='adress'
              value={appartment.address}
              onChange={(event) => setAppartment({ ...appartment, address: event.target.value })}
              required
              className='relative block mb-2 w-full rounded-t-md border-0 px-2 py-2 bg-white text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
            />

            <label htmlFor='image' className='sr-only'>
              Image:
            </label>
            <input
              type='text'
              id='image'
              value={appartment.img}
              onChange={(event) => setAppartment({ ...appartment, img: event.target.value })}
              required
              className='relative block mb-2 w-full rounded-t-md border-0 px-2 py-2 bg-white text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
            />
            <button type='submit' className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
              Valider la mise à jour
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

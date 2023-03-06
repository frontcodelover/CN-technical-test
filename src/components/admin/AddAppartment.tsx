import axios from 'axios';
import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext, UserContextType } from '../../context/UserContext';

export const AddAppartment = () => {
  const [name, setName] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [price, setPrice] = useState<number>(0);
  const [address, setAddress] = useState<string>('');
  const [img, setImg] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const navigate = useNavigate();
  const { user } = useContext<UserContextType>(UserContext);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!name || !description || !price || !img) {
      alert('Please fill all the fields.');
      return;
    }

    try {
      await axios.post(`http://localhost:8000/appartments`, {
        name,
        description,
        price,
        address,
        img,
      });
      setMessage('Appartement ajouté avec succès !');
      setTimeout(() => {
        navigate('/');
      }, 2000);
    } catch (error) {
      console.error(error);
      alert('An error occurred while adding appartment.');
    }
  };

  return (
    <>
      {user ? (
        <div className='flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8'>
          <div className='w-full max-w-md space-y-8'>
            <div>
              <img className='mx-auto h-12 w-auto' src='https://pbs.twimg.com/profile_images/997458975753842690/1GzGAN5m_400x400.jpg' alt='Your Company' />
              <h2 className='mt-6 text-center text-3xl font-bold tracking-tight text-gray-900'>Ajout d'un appartement</h2>
            </div>
            <form className='mt-8 space-y-6' onSubmit={handleSubmit}>
              <div className='-space-y-px rounded-md shadow-sm'>
                <div>
                  <label htmlFor='name' className='sr-only'>
                    Nom de l'appartement
                  </label>
                  <input
                    type='text'
                    onChange={(e) => setName(e.target.value)}
                    name='name'
                    id='name'
                    required
                    className='relative block mb-2 w-full rounded-t-md border-0 px-2 py-2 bg-white text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                    placeholder="Nom de l'appartement"
                  />
                  <label htmlFor='address' className='sr-only'>
                    Adresse
                  </label>
                  <input
                    type='text'
                    onChange={(e) => setAddress(e.target.value)}
                    name='address'
                    id='address'
                    required
                    className='relative block mb-2 w-full rounded-t-md border-0 px-2 py-2 bg-white text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                    placeholder="L'adresse de l'appartement"
                  />
                  <label htmlFor='description' className='sr-only'>
                    Description
                  </label>
                  <input
                    type='textarea'
                    onChange={(e) => setDescription(e.target.value)}
                    name='description'
                    id='description'
                    required
                    className='relative block mb-2 w-full rounded-t-md border-0 px-2 py-2 bg-white text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                    placeholder='Description'
                  />
                  <label htmlFor='price' className='sr-only'>
                    Price
                  </label>
                  <input
                    type='number'
                    onChange={(e) => setPrice(Number(e.target.value))}
                    name='price'
                    id='price'
                    required
                    className='relative block mb-2 w-full rounded-t-md border-0 px-2 py-2 bg-white text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                    placeholder='Prix par mois'
                  />
                  <label htmlFor='img' className='sr-only'>
                    Image
                  </label>
                  <input
                    type='text'
                    onChange={(e) => setImg(e.target.value)}
                    name='img'
                    id='img'
                    required
                    className='relative block mb-2 w-full rounded-t-md border-0 px-2 py-2 bg-white text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                    placeholder="URL de l'image"
                  />
                </div>
              </div>

              <div>
                <button
                  type='submit'
                  className='group relative flex w-full justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                >
                  <span className='absolute inset-y-0 left-0 flex items-center pl-3'></span>
                  Ajouter mon appartement
                </button>
              </div>
            </form>
            {message && <p>{message}</p>}
          </div>
        </div>
      ) : (
        <div className='flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8'>
          <div className='w-full max-w-md space-y-8'>
            <div>
              <img className='mx-auto h-12 w-auto' src='https://pbs.twimg.com/profile_images/997458975753842690/1GzGAN5m_400x400.jpg' alt='Your Company' />
              <h2 className='mt-6 text-center text-3xl font-bold tracking-tight text-gray-900'>Ajout d'un appartement</h2>
            </div>
            Vous devez être connecté pour ajouter un appartement
          </div>
        </div>
      )}
    </>
  );
};

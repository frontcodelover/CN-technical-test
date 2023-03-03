import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { adminUser } from '../../data/dataUser';

export const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const user = { username, password };
    if (user.username === adminUser.username && user.password === adminUser.password) {
      localStorage.setItem('user', JSON.stringify(user));
      navigate('/admin');
    } else {
      alert('Incorrect username or password');
    }
  };

  return (
    <>
      <div className='flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8'>
        <div className='w-full max-w-md space-y-8'>
          <div>
            <img className='mx-auto h-12 w-auto' src='https://pbs.twimg.com/profile_images/997458975753842690/1GzGAN5m_400x400.jpg' alt='Your Company' />
            <h2 className='mt-6 text-center text-3xl font-bold tracking-tight text-gray-900'>Se connecter</h2>
          </div>
          <form className='mt-8 space-y-6' action='#' onSubmit={handleSubmit}>
            <div className='-space-y-px rounded-md shadow-sm'>
              <div>
                <label htmlFor='email-address' className='sr-only'>
                  Email address
                </label>
                <input
                  id='email-address'
                  name='email'
                  type='text'
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  autoComplete='email'
                  required
                  className='relative block mb-2 w-full rounded-t-md border-0 px-2 py-2 bg-white text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                  placeholder="Nom d'utilisateur"
                />
              </div>
              <div>
                <label htmlFor='password' className='sr-only'>
                  Password
                </label>
                <input
                  id='password'
                  name='password'
                  type='password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete='current-password'
                  required
                  className='relative block w-full rounded-b-md border-0 px-2 py-2 bg-white text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                  placeholder='Mot de passe'
                />
              </div>
            </div>

            <div>
              <button
                type='submit'
                className='group relative flex w-full justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
              >
                <span className='absolute inset-y-0 left-0 flex items-center pl-3'></span>
                Se connecter
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

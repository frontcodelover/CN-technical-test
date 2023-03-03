import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <div className='bg-primary w-full p-3 flex justify-between items-center'>
        <>
          <Link to='/'>
            <img src='https://www.chez-nestor.com/_nuxt/img/logo-wide.bbbe383.png' className='h-12' />
          </Link>
        </>
        <>
          <Link to='/login'>
            <div className='text-white'>Login</div>
          </Link>
        </>
      </div>
    </>
  );
};

export default Navbar;

import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='bg-primary w-full p-3'>
      <Link to='/'>
        <img src='https://www.chez-nestor.com/_nuxt/img/logo-wide.bbbe383.png' className='h-12' />
      </Link>
    </div>
  );
};

export default Navbar;

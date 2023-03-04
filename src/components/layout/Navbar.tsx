import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext, UserContextType } from '../../context/UserContext';

const Navbar = () => {
  const { user, logout } = useContext<UserContextType>(UserContext);
  console.log(user);
  return (
    <>
      <div className='bg-primary w-full p-3 flex justify-between items-center'>
        <>
          <Link to='/'>
            <img src='https://www.chez-nestor.com/_nuxt/img/logo-wide.bbbe383.png' className='h-12' />
          </Link>
        </>
        <>
          {user ? (
            <>
              <Link to='/admin'>
                <div className='text-white'>Dashboard</div>
              </Link>
              <Link to='/admin/addappartment'>
                <div className='text-white'>Add Appartment</div>
              </Link>
              <Link to='/' onClick={logout}>
                <div className='text-white'>Logout</div>
              </Link>
            </>
          ) : (
            <Link to='/login'>
              <div className='text-white'>Login</div>
            </Link>
          )}
        </>
      </div>
    </>
  );
};

export default Navbar;

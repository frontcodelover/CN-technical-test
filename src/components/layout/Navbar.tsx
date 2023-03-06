import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext, UserContextType } from '../../context/UserContext';

const Navbar = () => {
  const { user, logout } = useContext<UserContextType>(UserContext);
  return (
    <>
      <div className='bg-primary w-full p-3 flex justify-between items-center'>
        <div>
          <Link to='/'>
            <img src='https://www.chez-nestor.com/_nuxt/img/logo-wide.bbbe383.png' className='h-12' />
          </Link>
        </div>
        <div>
          {user ? (
            <div className='flex gap-3'>
              <Link to='/admin'>
                <div className='text-white'>Dashboard</div>
              </Link>
              <Link to='/admin/addappartment'>
                <div className='text-white'>Ajouter</div>
              </Link>
              <Link to='/' onClick={logout}>
                <div className='text-white'>Se déconnecter</div>
              </Link>
            </div>
          ) : (
            <Link to='/login'>
              <div className='text-white'>Se connecter</div>
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;

import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { IoMdPin } from 'react-icons/io';
import { IoIosBed, IoIosHome, IoIosPerson, IoMdTrendingUp, IoIosWater } from 'react-icons/io';
import { NotFound } from './NotFound';
import { Link } from 'react-router-dom';
import { UserContext, UserContextType } from '../context/UserContext';
import { IoMdCreate, IoMdTrash } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import { deleteCurrentAppartment } from '../components/admin/DeleteAppartment';

interface IAppartement {
  id: number;
  address: string;
  description: string;
  img: string;
  price: number;
  name: string;
}

export const Appartment: React.FC<IAppartement> = () => {
  const { id } = useParams();
  const { user, logout } = useContext<UserContextType>(UserContext);
  const navigate = useNavigate();

  const [currentAppartment, setCurrentAppartment] = useState<IAppartement>({
    id: 0,
    address: '',
    description: '',
    img: '',
    price: 0,
    name: '',
  });

  useEffect(() => {
    axios.get(`http://localhost:8000/appartments/${id}`).then((res) => {
      setCurrentAppartment(res.data);
    });
  }, [id]);

  // const deleteCurrentAppartment = async (e: any) => {
  //   e.preventDefault();
  //   try {
  //     await axios.delete(`http://localhost:8000/appartments/${currentAppartment.id}`);
  //     alert('Appartment deleted successfully!');
  //     navigate('/');
  //   } catch (error) {
  //     console.error(error);
  //     alert('An error occurred while deleting appartment.');
  //   }
  // };

  return (
    <>
      {currentAppartment.id !== 0 ? (
        <>
          <div>
            <img src={currentAppartment.img} className='object-cover max-h-96 w-full' />
          </div>
          <div className='pt-12 max-w-screen-xl m-auto px-10'>
            <div className='flex gap-2 items-center py-3'>
              <Link to='/' className='text-gray-600 hover:text-gray-900'>
                Accueil
              </Link>
              <span className='text-gray-600'>/</span>
              <Link to='/appartment' className='text-gray-600 hover:text-gray-900'>
                {currentAppartment.name}
              </Link>

              {user && (
                <>
                  <Link to={`/admin/edit/${currentAppartment.id}`} className='text-gray-600 hover:text-gray-900'>
                    <button className='flex bg-green-500 text-white px-4 py-2 rounded-md'>
                      <IoMdCreate className='mt-1 mr-1 ' /> Editer
                    </button>
                  </Link>

                  <button className='flex bg-red-500 text-white px-4 py-2 rounded-md' onClick={() => deleteCurrentAppartment(currentAppartment.id)}>
                    <IoMdTrash className='mt-1 mr-1' />
                    Supprimer
                  </button>
                </>
              )}
            </div>
            <h1 className='text-5xl font-bold'>{currentAppartment.name}</h1>
            <div className='relative z-10 py-1.5 font-medium text-gray-600 flex'>
              <span className='pt-1 pr-1'>
                <IoMdPin />
              </span>
              {currentAppartment.address}
            </div>
            <div className='font-semibold text-gray-600'>Chambre privée</div>

            <div className='flex justify-between py-2'>
              <span className='flex'>
                <IoIosPerson className='mt-1 mr-1' />
                11 Chambres
              </span>
              <span className='pt-1 pr-1 flex'>
                <IoIosHome className='mt-1 mr-1' />
                Logement - 258m²
              </span>
              <span className='pt-1 pr-1 flex'>
                <IoIosWater className='mt-1 mr-1' />
                Salle de bain privée
              </span>
              <span className='pt-1 pr-1 flex'>
                <IoIosBed className='mt-1 mr-1' />
                Chambre - 13m²
              </span>
              <span className='pt-1 pr-1 flex'>
                <IoMdTrendingUp className='mt-1 mr-1' />
                Étage 1
              </span>
            </div>
            <div>Prix : {currentAppartment.price} € / mois</div>
            <div className='pt-4 text-gray-500 leading-5'>{currentAppartment.description}</div>
          </div>
        </>
      ) : (
        <NotFound />
      )}
    </>
  );
};

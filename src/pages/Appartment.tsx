import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { IoMdPin } from 'react-icons/io';
import { NotFound } from './NotFound';
import { TextFormat } from '../utils/formatTxt';

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

  const [currentAppartment, setCurrentAppartment] = useState<IAppartement>({
    id: 0,
    address: '',
    description: '',
    img: '',
    price: 0,
    name: '',
  });

  console.log(currentAppartment);

  useEffect(() => {
    axios.get(`http://localhost:8000/appartments/${id}`).then((res) => {
      setCurrentAppartment(res.data);
    });
  }, [id]);

  return (
    <>
      {currentAppartment.id !== 0 ? (
        <>
          <div>
            <img src={currentAppartment.img} className='object-cover max-h-96 w-full' />
          </div>
          <div className=' p-3'>
            <h1 className='text-5xl'>{currentAppartment.name}</h1>
            <div className='relative z-10 py-1.5 font-medium text-gray-600 flex'>
              <span className='pt-1 pr-1'>
                <IoMdPin />
              </span>
              {currentAppartment.address}
            </div>
            Prix : {currentAppartment.price} € / mois
            <div>{TextFormat(currentAppartment.description)}</div>
          </div>
        </>
      ) : (
        <NotFound />
      )}
    </>
  );
};

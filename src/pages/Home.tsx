import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { IoMdPin } from 'react-icons/io';
import { TextFormat } from '../utils/formatTxt';

interface IHome {
  appartments: any;
}

export const Home: React.FC<IHome> = () => {
  const [appartments, setAppartments] = useState<any[]>([]);
  useEffect(() => {
    axios.get('http://localhost:8000/appartments?_sort=name&_order=asc').then((res) => {
      setAppartments(res.data);
    });
  }, []);

  return (
    <>
      <div className='relative'>
        <img
          className='max-h-[32rem] object-cover w-full'
          src='https://images.unsplash.com/photo-1602087594298-706ccc894bfd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80'
        />

        <div className='absolute top-0 left-0 w-full h-full bg-black opacity-20'></div>
        <div className='absolute top-2/4 left-48 w-full h-auto'>
          <span className='mt-2 text-2xl font-extrabold leading-8 text-white lg:text-4xl xl:text-5xl'>La colocation prête-à-vivre Chez Nestor</span>
        </div>
      </div>
      <div className='bg-white py-2 sm:py-2'>
        <div className='mx-auto max-w-7xl px-6 lg:px-8'>
          <div className='mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-y-6 gap-x-8 pt-10 sm:my-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3'>
            {appartments.map((appartment) => (
              <article key={appartment.id} className='flex max-w-xl flex-col items-start justify-between border-0 shadow'>
                <div className='relative flex items-center gap-x-4 overflow-hidden'>
                  <div className='group relative w-full h-72'>
                    <Link to={`/appartment/${appartment.id}`}>
                      <img src={appartment.img} alt={appartment.name} className='w-full h-72 object-cover' />

                      <div className='group-hover:opacity-100 opacity-0 z-10 absolute bottom-0 bg-primary text-white p-5 w-full transition duration-700 ease-in-out cursor-pointer'>
                        Découvrir cette chambre
                      </div>
                    </Link>
                  </div>
                </div>
                <div className='px-3'>
                  <h2 className='mt-3 text-xl leading-6 text-gray-900 group-hover:text-gray-600 py-1.5'>
                    <Link className='font-bold text-black hover:text-slate-900' to={`/appartment/${appartment.id}`}>
                      {appartment.name}
                    </Link>
                  </h2>
                  <div className='flex items-center gap-x-4 text-sm'>
                    <div className='relative z-10 py-1.5 font-medium text-gray-600 flex'>
                      <span className='pt-1 pr-1'>
                        <IoMdPin />
                      </span>
                      {appartment.address}
                    </div>
                  </div>
                  <div className='flex items-center'>
                    <div className='relative z-10 py-1.5 font-bold text-red-600 text-lg'>
                      <span className='pt-1 pr-1'></span>
                      {appartment.price}€ / mois
                    </div>
                  </div>
                  <div className='group relative'>
                    <p className='mt-2 text-sm leading-6 text-gray-600text-left pb-5'>{TextFormat(appartment.description)}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

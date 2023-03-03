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
    <div className='bg-white py-24 sm:py-32'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <div className='mx-auto lg:mx-0 text-left'>
          <h1 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>Chez Nestor</h1>
          <span className='mt-2 text-lg leading-8 text-gray-600'>La colocation prête-à-vivre.</span>
        </div>
        <div className='mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-y-6 gap-x-8 border-t pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3'>
          {appartments.map((appartment) => (
            <article key={appartment.id} className='flex max-w-xl flex-col items-start justify-between border-0 shadow'>
              <div className='relative flex items-center gap-x-4'>
                <Link to={`/appartment/${appartment.id}`}>
                  <img src={appartment.img} alt='' className='w-full h-72 object-cover' />
                </Link>
              </div>
              <h2 className='mt-3 text-xl leading-6 text-gray-900 group-hover:text-gray-600 py-1.5 px-3'>
                <Link className='font-bold text-black hover:text-slate-900' to={`/appartment/${appartment.id}`}>
                  {appartment.name}
                </Link>
              </h2>
              <div className='flex items-center gap-x-4 text-sm'>
                <div className='relative z-10 py-1.5 px-3 font-medium text-gray-600 flex'>
                  <span className='pt-1 pr-1'>
                    <IoMdPin />
                  </span>
                  {appartment.address}
                </div>
              </div>
              <div className='group relative'>
                <p className='mt-5 text-sm leading-6 text-gray-600 px-3 text-left pb-5'>{TextFormat(appartment.description)}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

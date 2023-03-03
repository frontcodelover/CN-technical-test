import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { IoMdCreate, IoMdTrash } from 'react-icons/io';

export const Admin = () => {
  const [appartments, setAppartments] = useState<any[]>([]);
  useEffect(() => {
    axios.get('http://localhost:8000/appartments?_sort=name&_order=asc').then((res) => {
      setAppartments(res.data);
    });
  }, []);
  return (
    <>
      <table className='border-collapse my-10 mx-auto max-w-7xl w-full'>
        <thead>
          <tr>
            <th className='border text-white bg-primary px-4 py-2'>Chambre</th>
            <th className='border text-white bg-primary px-4 py-2'>Adresse</th>
            <th className='border text-white bg-primary px-4 py-2'>Actions</th>
          </tr>
        </thead>
        <tbody>
          {appartments.map((appartment) => (
            <tr>
              <td className='border text-primary bg-white px-4 py-2'>{appartment.name}</td>
              <td className='border text-primary bg-white px-4 py-2'>{appartment.address}</td>
              <td className='border text-primary bg-white px-4 py-2'>
                <div className='flex gap-2'>
                  <button className='flex bg-green-600 text-white'>
                    <IoMdCreate className='mt-1 mr-1' /> Edit
                  </button>
                  <button className='flex bg-red-600 text-white'>
                    <IoMdTrash className='mt-1 mr-1' />
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

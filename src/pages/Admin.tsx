import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { IoMdCreate, IoMdTrash } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { deleteCurrentAppartment } from '../components/admin/DeleteAppartment';

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
                  <Link to={`/admin/editappartment/${appartment.id}`} className='text-gray-600 hover:text-gray-900'>
                    <button className='flex bg-green-500 text-white px-4 py-2 rounded-md'>
                      <IoMdCreate className='mt-1 mr-1' /> Editer
                    </button>
                  </Link>
                  <button className='flex bg-red-500 text-white px-4 py-2 rounded-md' onClick={() => deleteCurrentAppartment(appartment.id)}>
                    <IoMdTrash className='mt-1 mr-1' />
                    Supprimer
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

import React from 'react';
import { useGetProductsQuery } from '../context/api/productApi';
import { FaRegHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ApiCards = () => {
  const { data: products } = useGetProductsQuery();

  return (
    <div className='bg-gray-100 py-12'>
      <div className="container mx-auto">
        <h1 className='text-4xl text-center mb-12'>Лучшие продажи</h1>
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-8">
          {products?.slice(0, 3).map(product => (
            <div key={product.id} className="bg-white shadow-2xl rounded-lg overflow-hidden relative">
              <img src={product.imges[2]} alt={product.title} className="w-full h-64 object-cover" />
              <div className="absolute top-2 right-2 w-10 h-10 bg-white rounded-full flex justify-center items-center shadow-md">
                <FaRegHeart className="text-xl text-gray-700 cursor-pointer" />
              </div>
              <div className="p-6">
                <Link to={`/wishlist/${product.id}`}>
                  <p className="text-lg font-semibold text-gray-800 mb-2">{product.title}</p>
                </Link>
                <p className="text-xl font-bold text-gray-900">{product.price} грн</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ApiCards;

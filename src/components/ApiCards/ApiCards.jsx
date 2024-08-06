import React from 'react';
import { useGetProductsQuery } from '../context/api/productApi';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { IoCart, IoCartOutline } from "react-icons/io5";
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../context/cartSlice';
import { toggleHeart } from '../context/wishlistSlice'; 
const ApiCards = () => {
  const { data: products } = useGetProductsQuery();
  const cart = useSelector(state => state.cart.value);
  const wishlist = useSelector(state => state.wishlist.value);
  const dispatch = useDispatch();
  return (
    <div className='bg-gray-100 py-12'>
      <div className="container mx-auto sm:px-[10px] md:px-[0px]">
        <h1 className='text-4xl text-center mb-12'>Лучшие продажи</h1>
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-8">
          {products?.slice(0, 3).map(product => (
            <div key={product.id} className="bg-white shadow-2xl rounded-lg overflow-hidden relative">
              <img src={product.imges[2]} alt={product.title} className="w-full h-64 object-cover" />
              <div className="absolute top-2 right-2 w-10 h-10 bg-white rounded-full flex justify-center items-center shadow-md">
              <span onClick={() => dispatch(toggleHeart(product))}>
            {
            wishlist?.some(item => item.id === product.id) ? <FaHeart className="text-xl text-gray-700 cursor-pointer z-40"    style={{fontSize:'20px'}} />
            : <FaRegHeart className="text-xl text-gray-700 cursor-pointer"     style={{fontSize:'20px'}} />
          }
          </span>
              </div>
              <div className="absolute top-[85%] right-2 w-10 h-10 bg-white rounded-full flex justify-center items-center shadow-md">
              {
                    cart?.some((cart) => cart.id === product.id) ? 
                    <IoCart className="text-xl text-gray-700 cursor-pointer"  onClick={() =>dispatch(addToCart(product))}/>
                    :
                    <IoCartOutline  className="text-xl text-gray-700 cursor-pointer" onClick={() =>dispatch(addToCart(product))}/>

                }
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

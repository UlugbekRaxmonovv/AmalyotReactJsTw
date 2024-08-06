import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { IoCart, IoCartOutline } from 'react-icons/io5';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { toggleHeart } from '../../components/context/wishlistSlice';
import Empty from '../../components/Empty/Empty';

const WishlistAll = () => {
    const wishlistItems = useSelector((state) => state.wishlist.value);
    console.log(wishlistItems);
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart.value);
    const wishlist = useSelector(state => state.wishlist.value);
    return (
       <>
        <div className='bg-primary'>
                <Navbar />
            </div>
        <div className="container">
            {
                wishlist.length ?  <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-8 py-[40px]">
                {wishlistItems?.map(product => (
                  <div key={product.id} className="bg-white shadow-2xl rounded-lg overflow-hidden relative">
                    <img src={product.imges[2]} alt={product.title} className="w-full h-64 object-cover" />
                    <div className="absolute top-2 right-2 w-10 h-10 bg-white rounded-full flex justify-center items-center shadow-md">
                    <span onClick={() => dispatch(toggleHeart(product))}>
                  {
                  wishlist?.some(item => item.id === product.id) ? <FaHeart className="text-xl text-gray-700 cursor-pointer "   style={{fontSize:'20px'}} />
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
              :
                <Empty/>
            }
       
        </div>
            <Footer />
       </>
    );
}

export default WishlistAll;

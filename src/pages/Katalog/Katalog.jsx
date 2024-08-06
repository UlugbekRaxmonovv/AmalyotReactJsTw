import React, { useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import { VscItalic } from 'react-icons/vsc';
import { Link } from 'react-router-dom';
import { FaRegHeart } from "react-icons/fa";
import { IoCart, IoCartOutline, IoSearchOutline } from "react-icons/io5";
import { useGetProductsQuery, useGetCategoryQuery } from '../../components/context/api/productApi';
import rasm from '../../assets/imgs/kata.png';
import rasm1 from '../../assets/imgs/kata1.png';
import rasm2 from '../../assets/imgs/kata2.png';
import rasm3 from '../../assets/imgs/kata3.png';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../components/context/cartSlice';
const Katalog = () => {
    const { data: products } = useGetProductsQuery();
    const { data: categories } = useGetCategoryQuery();
    const cart = useSelector(state => state.cart.value);
    const dispatch = useDispatch();
    const [search, setSearch] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");

    const filteredProducts = products?.filter(product => {
        return (selectedCategory === "All" || product.category === selectedCategory) &&
               product.name.toLowerCase().includes(search.toLowerCase());
    });

    return (
        <>
            <div className='bg-primary'>
                <Navbar />
            </div>
            <div className="container mx-auto px-4">
                <div className="flex items-center py-5">
                    <Link to='/' className="text-2xl">Главная</Link>
                    <VscItalic className="text-2xl mx-2" />
                    <Link to='/news' className="text-2xl">Новости</Link>
                </div>
                <h1 className='text-4xl md:text-6xl my-10'>Каталог</h1>
                <div className="py-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 z-[-1]">
                <div  className="relative">
                            <img src={rasm1} alt="Category" className='w-[300px] h-[200px] object-cover' />
                            <p className='absolute bottom-4  w-[200px] top-[120px] left-[50%]  transform -translate-x-1/2 text-white text-lg sm:text-[15px] sm:left-[70%] md:text-lg md:left-[50%]' >Для эфирных масел </p>
                        </div>
                        <div  className="relative">
                            <img src={rasm3} alt="Category" className='w-[300px] h-[200px] object-cover' />
                            <p className='absolute bottom-4  w-[200px] top-[120px] left-[50%]  transform -translate-x-1/2 text-white text-lg sm:text-[15px] sm:left-[70%] md:text-lg md:left-[50%]'>Для эфирных масел </p>
                        </div>
                        <div  className="relative">
                            <img src={rasm1} alt="Category" className='w-[300px] h-[200px] object-cover' />
                            <p className='absolute bottom-4  top-[120px] left-[50%]  transform -translate-x-1/2 text-white text-lg sm:text-[15px] sm:left-[70%] md:text-lg md:left-[50%]'>Медная посуда </p>
                        </div>
                        <div  className="relative">
                            <img src={rasm2} alt="Category" className='w-[300px] h-[200px] object-cover' />
                            <p className='absolute bottom-4 top-[120px] left-[50%] transform -translate-x-1/2 text-white text-lg sm:text-[15px] whitespace-nowrap sm:left-[50%]  md:text-lg md:left-[50%]'>Аксессуары из меди </p>
                        </div>
                </div>
                <div className="py-10 flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="flex w-full md:w-1/3 border border-gray-300 rounded overflow-hidden">
                        <input
                            type="text"
                            placeholder='Поиск'
                            className='px-4 py-2 w-full outline-none'
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                        <div className="flex items-center justify-center px-4 bg-gray-100">
                            <IoSearchOutline className="text-xl text-gray-700" />
                        </div>
                    </div>
                 
                    <div className="flex items-center space-x-2">
                        <p className="text-lg">Сортировка:</p>
                    <select className="border border-gray-300 rounded px-2 py-1 outline-none"  value={selectedCategory}
onChange={(e) => setSelectedCategory(e.target.value)}>
<option value="All">По цене</option>
{categories?.map(category => (
    <option key={category.id} value={category.title}>{category.title}</option>
))}
</select>
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-8 py-[40px]">
          {filteredProducts?.map(product => (
            <div key={product.id} className="bg-white shadow-2xl rounded-lg overflow-hidden relative">
              <img src={product.imges[2]} alt={product.title} className="w-full h-64 object-cover" />
              <div className="absolute top-2 right-2 w-10 h-10 bg-white rounded-full flex justify-center items-center shadow-md">
                <FaRegHeart className="text-xl text-gray-700 cursor-pointer" />
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
            <Footer />
        </>
    );
}

export default Katalog;

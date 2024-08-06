import React, { useState } from 'react';
import logo from '../../assets/imgs/logo.png';
import { FaRegHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { Link, NavLink } from 'react-router-dom';
import { TbMenuDeep } from "react-icons/tb";
import { VscChromeClose } from "react-icons/vsc";
import { useSelector } from 'react-redux';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const  cartItems  = useSelector(state => state.cart.value);
    const wishlist = useSelector(state => state.wishlist.value);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <header className="flex w-full py-4">
                <div className="container mx-auto ]">
                    <nav className="flex justify-between items-center py-4 ">
                        <Link to={'/'}>
                            <img src={logo} alt="Logo" className="w-32 md:w-40 h-auto object-contain my-[-28px]" />
                        </Link>
                        <ul className={`flex-col md:flex-row md:flex items-center gap-6 lg:gap-12  ${isMenuOpen ? 'flex justify-center absolute   top-[0px] h-[100vh]  bg-accent w-full items-center text-center z-50 ' : 'hidden'}`}>
                        <div className="flex items-center gap-3 md:hidden">
                                <div className="py-2 px-2 bg-white rounded cursor-pointer hover:bg-gray-200">
                                    <FaRegHeart />
                                </div>
                                <div className="py-2 px-2 bg-white rounded cursor-pointer hover:bg-gray-200">
                                    <Link to={'/korzinka'}>
                                        <IoCartOutline />
                                    </Link>
                                </div>
                                <div className="py-2 px-2 bg-white rounded cursor-pointer hover:bg-gray-200">
                                    <FaRegUser />
                                </div>
                            </div>
                            <li className="text-center text-white font-semibold text-base font-sans">
                                <NavLink
                                    to="/katalog"
                                    className={({ isActive }) =>
                                        isActive
                                            ? "text-red-400 border-b-2 border-red-400"
                                            : ""
                                    }
                                >
                                    Каталог
                                </NavLink>
                            </li>
                            <li className="text-center text-white font-semibold text-base font-sans">
                                <NavLink
                                    to="/navosti"
                                    className={({ isActive }) =>
                                        isActive
                                            ? "text-red-400 border-b-2 border-red-400"
                                            : ""
                                    }
                                >
                                    Новости
                                </NavLink>
                            </li>
                            <li className="text-center text-white font-semibold text-base font-sans">
                                <NavLink
                                    to="/about"
                                    className={({ isActive }) =>
                                        isActive
                                            ? "text-red-400 border-b-2 border-red-400"
                                            : ""
                                    }
                                >
                                    О нас
                                </NavLink>
                            </li>
                            <li className="text-center text-white font-semibold text-base font-sans">
                                <Link
                                    to=""
                                    className={({ isActive }) =>
                                        isActive
                                            ? "text-red-400 border-b-2 border-red-400"
                                            : ""
                                    }
                                >
                                    Доставка
                                </Link>
                            </li>
                          
                            <li className="text-center text-white font-semibold text-base font-sans">
                                <Link
                                    to="/"
                                    className={({ isActive }) =>
                                        isActive
                                            ? "text-red-400 border-b-2 border-red-400"
                                            : ""
                                    }
                                >
                                    Контакты
                                </Link>
                            </li>
                         
                        </ul>
                        <div className="flex relative items-center gap-3 md:flex hidden">
                            <div className="py-2 px-2 bg-white rounded cursor-pointer hover:bg-gray-200">
                                <Link to={'/wishlistall'}>
                                <FaRegHeart />
                                </Link>
                               
                            </div>
                            <span className='absolute left-[20%] top-[-10px] px-[3px] py-[0px] bg-red-500  rounded text-white' >{wishlist.length}</span>
                            <div className="py-2 px-2 bg-white rounded cursor-pointer hover:bg-gray-200">
                                <Link to={'/korzinka'}>
                                    <IoCartOutline />
                                </Link>
                            </div>
                            <span className='absolute left-[60%] top-[-10px] px-[3px] py-[0px] bg-red-500  rounded text-white' >{cartItems.length}</span>
                            <div className="py-2 px-2 bg-white rounded cursor-pointer hover:bg-gray-200">
                                <FaRegUser />
                            </div>
                        </div>
                       {
                        isMenuOpen ? 
                        <VscChromeClose onClick={toggleMenu} className="text-white cursor-pointer text-4xl z-50 md:hidden" />
                        :
                        <TbMenuDeep onClick={toggleMenu} className="text-white cursor-pointer text-4xl z-50 md:hidden" />

                       }
                    </nav>
                </div>
            </header>
        </>
    );
}

export default Navbar;

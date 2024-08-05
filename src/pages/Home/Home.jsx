import React from 'react';
import './Home.scss';
import Navbar from '../../components/Navbar/Navbar';
import Products from '../../components/Products/Products';
import ApiCards from '../../components/ApiCards/ApiCards';
import Footer from '../../components/Footer/Footer';
import Pochimu from '../../components/Pochimu/Pochimu';
import Onas from '../../components/Onas/Onas';
import Mian from '../../components/Main/Mian';

const Home = () => {
    return (
        <>
        <div className="home">
            <Navbar />
            <div className="container mx-auto  ">
                <div className="max-w-lg md:w-[637px] h-auto md:h-[431px] px-4">
                    <h1 className='text-4xl md:text-[80px] mt-[80px] text-white py-6 border-b-2 border-white'>Хит продаж</h1>
                    <div className="mt-4">
                        <p className="text-xl md:text-4xl text-white py-4 md:py-10">Дистиллятор для эфирных масел</p>
                        <div className="flex justify-between w-full md:w-[250px]">
                            <div className="text-slate-200 text-lg md:text-xl">Цена</div>
                            <div className="text-white text-lg md:text-xl">4 906 грн</div>
                        </div>
                        <div className="py-2 text-white w-full md:w-[180px] text-center bg-gradient-to-r from-cyan-500 to-blue-500 rounded my-4">
                            <button className="w-full">Купить</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Products />
        <ApiCards />
        <Mian />
        <Onas />
        <Pochimu />
        <Footer />
        

        </>
    );
}

export default Home;

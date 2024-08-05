import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import { Link } from 'react-router-dom';
import { VscItalic, VscChevronRight } from "react-icons/vsc";
import rasm from '../../assets/imgs/navi.png';
import rasm1 from '../../assets/imgs/navi1.png';
import rasm2 from '../../assets/imgs/navi2.png';
import rasm3 from '../../assets/imgs/navi3.png';
import Footer from '../../components/Footer/Footer';

const Navosti = () => {
    return (
        <>
            <div className='bg-primary'>
                <Navbar />
            </div>
            <div className="container mx-auto px-4">
                <div className="flex items-center py-5">
                    <div className="text-2xl">
                        <Link to={'/'}>Главная</Link>
                    </div>
                    <div className="text-2xl mx-2">
                        <VscItalic />
                    </div>
                    <div className="text-2xl">
                        <Link to={'/'}>Новости</Link>
                    </div>
                </div>
                <h1 className='text-4xl md:text-6xl my-10'>Новости</h1>
                <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-6 my-10">
                    {[rasm, rasm1, rasm2, rasm, rasm3, rasm1].map((img, index) => (
                        <div key={index} className="w-full">
                            <img src={img} alt="" className="w-full h-[200px]" />
                            <p className='text-sm md:text-base my-5'>
                                Пользу эфирных масел трудно переоценить. Они, безусловно, полезны для человека, но если говорить о домашних животных, то здесь возникают некоторые нюансы. Необходимо строго придерживаться определенных правил....
                            </p>
                            <div className="flex items-center gap-4">
                                <div className="text-red-500 cursor-pointer">
                                    <p>Читать больше</p>
                                </div>
                                <div className="text-red-500 cursor-pointer text-xl">
                                    <VscChevronRight />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Navosti;

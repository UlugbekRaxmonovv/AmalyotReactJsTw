import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import { VscItalic } from 'react-icons/vsc';
import { Link } from 'react-router-dom';
import Pochimu from '../../components/Pochimu/Pochimu';
import Footer from '../../components/Footer/Footer';
import rasm from '../../assets/imgs/about.png';
import rasm1 from '../../assets/imgs/imzo.png';
import Nashi from '../../components/Nashi/Nashi';
import Map from '../../components/map/Map';
import Kooper from '../../components/Kooper/Kooper';
import Center from '../../components/Center/Center';

const About = () => {
    return (
        <>
            <div className='bg-primary'>
                <Navbar />
            </div>
            <div className='bg-slate-100 py-10'>
                <div className="container mx-auto px-4">
                    <div className="flex items-center py-5">
                        <div className="text-xl">
                            <Link to='/'>Главная</Link>
                        </div>
                        <div className="text-xl mx-2">
                            <VscItalic />
                        </div>
                        <div className="text-xl">
                            <Link to='/'>О нас</Link>
                        </div>
                    </div>

                    <div className="flex flex-col lg:flex-row items-start justify-between">
                        <div className="lg:w-1/2 my-10">
                            <h1 className="text-6xl border-b-2 border-black pb-2 mb-6">О нас</h1>
                            <div className="px-4 my-6">
                                <i className="text-2xl text-orange-400 block">" Мы любим все, что сделано из меди "</i>
                            </div>
                            <div className="flex items-center gap-6">
                                <div>
                                    <i className="text-2xl text-orange-800">Иван <br /> Иванов</i>
                                </div>
                                <div className="w-48 h-24">
                                    <img src={rasm1} alt="Иван Иванов" />
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/2">
                            <img src={rasm} alt="About us" className="w-full h-auto" />
                        </div>
                    </div>
                </div>
            </div>
            <Nashi />
            <Center />
            <Map />
            <Kooper />
            <Pochimu />
            <Footer />
        </>
    );
}

export default About;

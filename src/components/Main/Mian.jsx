import React from 'react';
import main from '../../assets/imgs/main.png';

const Mian = () => {
    return (
        <div className='container mx-auto py-12 sm:px-[10px] md:px-[0px]'>
            <div className="relative flex items-center justify-center bg-primary rounded-lg   sm:w-[330px] sm:h-[400px] md:w-full md:h-[350px]">
                <img src={main} alt="Main Banner" className="w-full object-cover " />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-start p-10">
                    <h1 className="text-6xl text-white">1 + 1 = 3</h1>
                    <p className="text-xl text-white mt-4 w-[300px]">Закажите два товара и получите третий бесплатно</p>
                    <button className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded mt-6">
                        Перейти в каталог
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Mian;

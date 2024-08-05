import React from 'react';
import rasm from '../../assets/imgs/son.png';

const Nashi = () => {
    return (
        <section className='py-16 bg-slate-100'>
            <div className='container mx-auto flex flex-col md:flex-row items-center gap-8 px-4'>
                <div className='md:w-1/2'>
                    <h1 className='text-4xl md:text-6xl font-bold mb-4'>
                        Наши <br /> клиенты
                    </h1>
                    <p className='text-lg md:text-xl text-gray-700'>
                        Мы требовательны к себе, чтобы каждый день становиться лучше для наших клиентов и находить лучшие решения для каждого из них
                    </p>
                </div>
                <div className='md:w-1/2 flex justify-center'>
                    <img className='w-full h-auto max-w-[707px] rounded-lg ' src={rasm} alt='Наши клиенты' />
                </div>
            </div>
        </section>
    );
}

export default Nashi;

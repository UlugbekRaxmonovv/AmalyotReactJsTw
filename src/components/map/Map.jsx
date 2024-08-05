import React from 'react';
import rasm from '../../assets/imgs/map.png'

const Map = () => {
    return (
        <section className='bg-slate-100 py-16'>
            <div className='container mx-auto px-4'>
                <div className='flex flex-col lg:flex-row items-center lg:items-start gap-8'>
                    <div className='lg:w-1/2'>
                        <h1 className='text-4xl lg:text-6xl font-bold mb-4'>
                            Наша <br /> география
                        </h1>
                        <p className='text-lg lg:text-xl mb-4 lg:mb-6'>
                            Наше производство находится в Украине, но клиенты из более чем 50 стран радуются товарам, приобретенным в нашем магазине.
                        </p>
                    </div>
                    <div className='w-full lg:w-1/2'>
                        <img 
                            src={rasm} 
                            alt="Our Geography" 
                            className='w-full h-auto object-cover rounded-lg g'
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Map;

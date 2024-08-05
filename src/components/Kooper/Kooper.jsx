import React from 'react';
import rasm from '../../assets/imgs/kopp.png';
import rasm1 from '../../assets/imgs/nish.png';
import rasm2 from '../../assets/imgs/nish1.png';
import rasm3 from '../../assets/imgs/nish2.png';

const Kooper = () => {
    return (
        <section className='py-16 bg-gray-50'>
            <div className='container mx-auto px-4'>
                <div className='flex flex-col lg:flex-row items-center gap-8'>
                    <div className='lg:w-1/2'>
                        <img 
                            className='w-full h-auto object-cover rounded-lg shadow-lg' 
                            src={rasm} 
                            alt="Cooperation Image" 
                        />
                    </div>
                    <div className='lg:w-1/2'>
                        <h1 className='text-4xl lg:text-6xl font-bold mb-4'>
                            Наша <br /> география
                        </h1>
                        <p className='text-lg lg:text-xl mb-6'>
                            Наше производство находится в Украине, но клиенты из более чем 50 стран радуются товарам, приобретенным в нашем магазине.
                        </p>
                        <div className='space-y-6'>
                            <div className='flex items-center gap-4'>
                                <img 
                                    className='w-14 h-14' 
                                    src={rasm1} 
                                    alt="Operational Excellence" 
                                />
                                <p className='text-lg'>Оперативность</p>
                            </div>
                            <div className='flex items-center gap-4'>
                                <img 
                                    className='w-14 h-14' 
                                    src={rasm2} 
                                    alt="Quality Products" 
                                />
                                <p className='text-lg'>Качественный <br /> товар и сервис</p>
                            </div>
                            <div className='flex items-center gap-4'>
                                <img 
                                    className='w-14 h-14' 
                                    src={rasm3} 
                                    alt="Flexibility" 
                                />
                                <p className='text-lg'>Гибкость</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Kooper;

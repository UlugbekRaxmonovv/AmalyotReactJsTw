import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import { Link, useParams } from 'react-router-dom';
import { useGetProductByIdQuery } from '../../components/context/api/productApi';
import rasm from '../../assets/imgs/piopl.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation, HashNavigation } from 'swiper/modules';
import { VscChevronDown, VscItalic } from 'react-icons/vsc';
import { FaTwitter, FaFacebookF } from "react-icons/fa";
import ProductTop from '../../components/ProductTop/index';
import { RiInstagramFill } from "react-icons/ri";

const Wishlist = () => {
    const { id } = useParams();
    const { data: product } = useGetProductByIdQuery(id);
    console.log(product);

    const [img, setImg] = useState(product);

    useEffect(() => {
        if (product) {
            setImg(product.imges[0]);
        }
    }, [product]);

    const [count, setCount] = useState(0);

    const incrementCount = () => setCount(count + 1);
    const decrementCount = () => setCount(count - 1);

    return (
        <>
            <ProductTop />
            <div className="bg-primary">
                <Navbar />
            </div>
            <div className="container mx-auto  sm:px-[10px] md:px-[0px]" >
                <div className="flex items-center py-5 flex-wrap">
                    <Link to='/' className="text-2xl">Главная</Link>
                    <VscItalic className="text-2xl mx-2" />
                    <Link to='/katalog' className="text-2xl">Каталог</Link>
                    <VscItalic className="text-2xl mx-2" />
                    <span className="text-2xl">Дистиллятор для получения гидролата 8л</span>
                </div>

                <div className="flex flex-col md:flex-row items-start justify-center gap-10 py-12 border-b-2 border-slate-200">
                    <div className="flex gap-5">
                        <div className="flex flex-col gap-[10px] ">
                            {product?.imges?.map((img, inx) => (
                                <img key={inx} className='w-[100px] rounded h-[100px] sm:w-[80px] sm:h-[67px] md:w-[100px] md:h-[100px] cursor-pointer' onClick={() => setImg(img)} src={img} alt="" />
                            ))}
                        </div>
                        <div className="relative cursor-pointer">
                            <img src={img} className=' w-[400px] h-[430px] rounded  sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[430px]'  alt="" />
                        </div>
                    </div>
                    <div className="w-full md:w-1/2">
                        <h1 className='text-4xl'>{product?.title}</h1>
                        <div className="flex justify-between items-center py-5">
                            <div className="flex items-center gap-2">
                                <VscChevronDown />
                                <p>В наличии</p>
                            </div>
                            <p>Артикул: <span className='font-bold'>CP-0803</span></p>
                        </div>
                        <h2 className='font-bold text-2xl'>Описание</h2>
                        <p className='my-5 border-b-2 pb-5 border-slate-400'>{product?.description}</p>
                        <div className="flex justify-between">
                            <p className='text-xl font-serif'>Цена</p>
                            whitespace-nowrap          <div className="flex items-center gap-2">
                                <p className='text-xl font-bold'>{product?.price} грн</p>
                                <p className='text-sm font-bold line-through'>1 953 грн</p>
                            </div>
                        </div>
                        <div className="flex justify-between items-center py-10 border-b-2 border-slate-400">
                            <div className="flex border border-slate-400 rounded px-4 h-10 items-center">
                                <button disabled={count <= 0} onClick={decrementCount} className='text-2xl'>-</button>
                                <span className='mx-4 text-2xl'>{count}</span>
                                <button onClick={incrementCount} className='text-2xl'>+</button>
                            </div>
                            <button className="w-48 h-10 flex justify-center items-center bg-red-900 text-white rounded">
                                Купить
                            </button>
                        </div>
                        <div className="flex gap-12 py-10">
                            <p className='text-2xl font-bold'>Поделиться</p>
                            <div className="flex gap-5 items-center">
                                <FaTwitter className='text-lime-500 text-xl cursor-pointer' />
                                <FaFacebookF className='text-lime-500 text-xl cursor-pointer' />
                                <RiInstagramFill className='text-lime-500 text-xl cursor-pointer' />
                            </div>
                        </div>
                    </div>
                </div>

                <h1 className='text-6xl my-12'>Описание</h1>
                <p className='mb-4'>Для всех, кто хочет самостоятельно получать гидролат или дистиллят, и быть уверенным в его качестве – у нас есть готовое и удобное решение. Современный дистиллятор «Феникс» станет для Вас отличным помощником. Полностью медный аппарат изготовлен на собственном производстве, на основании многолетнего опыта работы с медными дистилляторами.</p>
                <p className='mb-4'>Гораздо практичней, чем алькитара, и ни в чём ей не уступающий. Даже наоборот, имеет ряд преимуществ, таких как толщина металла, надёжные, сварные швы, и деревянные ручки, которые не так нагреваются, как латунные. Соединение ароматизационной колонны с емкостью герметично и долговечно. Радиатор данного аппарата расходует в 3 раза меньше воды для охлаждения, в сравнении с алькитарой такого же объёма.</p>
                <p className='mb-4'>Замечательный аппарат прослужит для Вас долгие годы и будет радовать своего владельца гидролатом высокого качества. Оцените все преимущества паровой дистилляции и получайте гидролаты, в натуральности которых Вы можете быть уверены. Аппарат полностью укомплектован и готов к работе. Объём перегонного куба – 8 литров. Объём колонны – 0,8 литра. Аппарат полностью укомплектован и готов к эксплуатации.</p>

                <div className="flex justify-between py-12">
                    <h2 className='text-2xl font-bold'>Отзывы</h2>
                    <button className="w-48 h-10 flex justify-center items-center bg-yellow-800 text-white rounded">
                        Оставить отзыв
                    </button>
                </div>

                <Swiper
                    spaceBetween={30}
                    hashNavigation={{
                        watchState: true,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation, HashNavigation]}
                    className=""
                >
                    {[1, 2, 3].map((_, index) => (
                        <SwiperSlide key={index} data-hash={`slide${index + 1}`}>
                            <div className="flex flex-wrap gap-[10px] justify-between items-center p-[2px]">
                                {[1, 2, 3].map((_, idx) => (
                                    <div key={idx} className="w-[350px] shadow-xl ">
                                        <div className="p-6 font-semibold">
                                            <img src={rasm} alt="" />
                                            <h3 className='text-black text-2xl my-5'>Иван Иванов</h3>
                                            <p className='text-sm'>Наше оборудование прозводится вручную. Мы постоянно производим контроль качества произведенной продукции. В то же время, если в ходе транспортировки или эксплуатации в течении первых 2 лет происходят поломки</p>
                                            <h5 className='text-black my-5'>20.10.21</h5>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <Footer />
        </>
    );
};

export default Wishlist;

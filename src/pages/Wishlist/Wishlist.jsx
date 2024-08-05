import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import { Link, useParams } from 'react-router-dom';
import { useGetProductByIdQuery } from '../../components/context/api/productApi';
import rasm from '../../assets/imgs/piopl.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation, HashNavigation } from 'swiper/modules';
import { VscChevronDown } from "react-icons/vsc";
import { VscItalic } from 'react-icons/vsc';
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import ProductTop from '../../components/ProductTop/index'
import { RiInstagramFill } from "react-icons/ri";
const Wishlist = () => {
    const { id } = useParams();
    const { data: product } = useGetProductByIdQuery( id );  
    console.log(product);  

    const [img,setImg] = useState(product)
    useEffect(() => {
        if(product){
            setImg(product.imges[0])
        }
    }, [product])
    const[count,setCount] = useState(0)
    const onclick = () =>{
      setCount(count + 1)
    }
    const go = () =>{
      setCount(count - 1)
    }

  
    return (
       <>
       <ProductTop/>
        <div  className='bg-primary'>
            <Navbar />            
        </div>
        <div className="container">
        <div className="flex items-center py-5">
                    <Link to='/' className="text-2xl">Главная</Link>
                    <VscItalic className="text-2xl mx-2" />
                    <Link to='/katalog' className="text-2xl">Каталог</Link>
                    <VscItalic className="text-2xl mx-2" />
                    <Link to='/' className="text-2xl"> Дистиллятор для получения гидролата 8л</Link>
                  
                </div>


                <div className="flex items-start  justify-center gap-[50px]  py-[50px]  border-b-2 border-slate-200" >
        <div className="flex gap-[20px]">
        <div className="flex flex-col gap-[20px]">
         


               {
                           product?.imges?.map((img,inx) =>(
                                <div className="" key={inx}>
                                <img className='w-[150px] h-[120px] cursor-pointer' onClick={() => setImg(img)} src={img} alt="" />
                            </div>
                           ))
                          }
           </div>
           <div className="relative  cursor-pointer">
              <img src={img} className='w-[550px] h-[540px]' alt="" />
              <div className="">
               
              </div>
           </div>
        </div>
           <div className="">
               <h1 className='text-4xl w-[500px]'>{product?.title}</h1>
               <div className="flex justify-between items-center py-[20px]">
            <div className="flex items-center gap-[10px] " >
            <div className="">
                       <VscChevronDown/>
                   </div>
                   <div className="">
                       <p>В наличии</p>
                   </div>
            </div>
            <p>Артикул: <span className='font-bold'>CP-0803</span></p>
               </div>

               <h1 className='font-bold text-2xl'>Описание</h1>
               <p className='w-[500px] my-[20px] border-b-2 h-[100px] border-slate-400  '>Медный дистиллятор «Феникс» станет Вашим надёжным помощником и проводником в мир дистилляции и красоты, с которым Вы легко сможете получать свои любимые гидролаты или алкогольные напитки.</p>

               <div className="flex justify-between">
                   <p className='text-xl font-serif'>Цена</p>
                   <div className="flex items-center gap-[10px]">
                   <div className="">
                       <p className='text-xl font-bold'>{product?.price} грн</p>
                      </div>
                      <div className="als">
                       <p className='text-[14px] font-bold '>1 953 грн</p>
                      </div>

                  
                   </div>
               </div>
            <div className="flex justify-between items-center py-[40px] border-b-2  border-slate-400">
            <div className="flex w-[150px] border border-slate-400 justify-between px-[20px] h-[40px] items-center rounded">
                      <div className="">
                           <button disabled={count <= 0} onClick={go} className='text-2xl'>-</button>
                       </div>
                       <div className="">
                         <span className='text-2xl'>{count}</span>
                       </div>
                       <div className="">
                           <button  onClick={onclick}  className='text-2xl  '>+</button>
                       </div>
                      </div>

                      <div className="w-[200px] h-[40px] flex justify-center items-center bg-red-900 text-white  rounded">
                       <button className='text-center'>Купить</button>
                      </div>
            </div>
            <div className="flex gap-[50px] py-[30px]">
                   <p className='text-2xl font-bold'>Поделиться</p>
               <div className="flex gap-[20px] items-center">
               <div className="">
                   <FaTwitter className='text-lime-500 text-xl cursor-pointer' />

                   </div>
                   <div className="">
                   <FaFacebookF  className='text-lime-500 text-xl cursor-pointer'  />

                   </div>
                   <div className="">
                   <RiInstagramFill  className='text-lime-500 text-xl cursor-pointer' />

                   </div>
               </div>
            </div>
           </div>
       </div>

       <h1 className='text-6xl my-[50px]'>Описание</h1>
       <p className='w-[1000px]  py-[10px]'>Для всех, кто хочет самостоятельно получать гидролат или дистиллят, и быть уверенным в его качестве – у нас есть готовое и удобное решение. Современный дистиллятор «Феникс» станет для Вас отличным помощником. Полностью медный аппарат изготовлен на собственном производстве, на основании многолетнего опыта работы с медными дистилляторами. 
</p>
<p className='w-[1000px]  py-[10px]'>
Гораздо практичней, чем алькитара, и ни в чём ей не уступающий. Даже наоборот, имеет ряд преимуществ, таких как толщина металла, надёжные, сварные швы, и деревянные ручки, которые не так нагреваются, как латунные. Соединение ароматизационной колонны с емкостью герметично и долговечно. Радиатор данного аппарата расходует в 3 раза меньше воды для охлаждения, в сравнении с алькитарой такого же объёма. 
</p>
<p className='w-[1000px]  py-[10px]'>
Замечательный аппарат прослужит для Вас долгие годы и будет радовать своего владельца гидролатом высокого качества. Оцените все преимущества паровой дистилляции и получайте гидролаты, в натуральности которых Вы можете быть уверенны. Аппарат полностью укомплектован и готов к работе. Объём перегонного куба – 8 литров. Объём колонны – 0,8 литра. Аппарат полностью укомплектован и готов к эксплуатации.

</p>

<div className="flex justify-between py-[50px]">
    <h1 className='text-2xl font-bold'>Отзывы</h1>
    <div className="w-[200px] h-[40px] flex justify-center items-center] text-white bg-yellow-800 rounded">
       <button>Оставить отзыв</button>
    </div>
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
        className="mySwiper"
      >
        <SwiperSlide data-hash="slide1"><div className="flex justify-between items-center p-[40px] w-full ">
                <div className="w-[446px] h-[332px] shadow-xl ">
                    <div className="p-[30px] font-semibold ">
                       <img src={rasm} alt="" />
                       <h1 className=' text-black text-2xl my-[20px] '>Иван Иванов</h1>
                       <p className='text-[14px]'>Наше оборудование прозводится вручную. Мы постоянно производим контроль качества произведенной продукции. В то же время, если в ходе транспортировки или эксплуатации в течении первых 2 лет происходят поломки</p>

                       <h5 className='text-black  my-[20px]'>20.10.21</h5>
                    </div>
                </div>
                <div className="w-[446px] h-[332px] shadow-xl ">
                    <div className="p-[30px] font-semibold ">
                       <img src={rasm} alt="" />
                       <h1 className=' text-black text-2xl my-[20px] '>Иван Иванов</h1>
                       <p className='text-[14px]'>Наше оборудование прозводится вручную. Мы постоянно производим контроль качества произведенной продукции. В то же время, если в ходе транспортировки или эксплуатации в течении первых 2 лет происходят поломки</p>

                       <h5 className='text-black  my-[20px]'>20.10.21</h5>
                    </div>
                </div>
                <div className="w-[446px] h-[332px] shadow-xl ">
                    <div className="p-[30px] font-semibold ">
                       <img src={rasm} alt="" />
                       <h1 className=' text-black text-2xl my-[20px] '>Иван Иванов</h1>
                       <p className='text-[14px]'>Наше оборудование прозводится вручную. Мы постоянно производим контроль качества произведенной продукции. В то же время, если в ходе транспортировки или эксплуатации в течении первых 2 лет происходят поломки</p>

                       <h5 className='text-black  my-[20px]'>20.10.21</h5>
                    </div>
                </div>
            </div></SwiperSlide>
            <SwiperSlide data-hash="slide1"><div className="flex justify-between items-center p-[40px] ">
                <div className="w-[446px] h-[332px] shadow-xl ">
                    <div className="p-[30px] font-semibold ">
                       <img src={rasm} alt="" />
                       <h1 className=' text-black text-2xl my-[20px] '>Иван Иванов</h1>
                       <p className='text-[14px]'>Наше оборудование прозводится вручную. Мы постоянно производим контроль качества произведенной продукции. В то же время, если в ходе транспортировки или эксплуатации в течении первых 2 лет происходят поломки</p>

                       <h5 className='text-black  my-[20px]'>20.10.21</h5>
                    </div>
                </div>
                <div className="w-[446px] h-[332px] shadow-xl ">
                    <div className="p-[30px] font-semibold ">
                       <img src={rasm} alt="" />
                       <h1 className=' text-black text-2xl my-[20px] '>Иван Иванов</h1>
                       <p className='text-[14px]'>Наше оборудование прозводится вручную. Мы постоянно производим контроль качества произведенной продукции. В то же время, если в ходе транспортировки или эксплуатации в течении первых 2 лет происходят поломки</p>

                       <h5 className='text-black  my-[20px]'>20.10.21</h5>
                    </div>
                </div>
                <div className="w-[446px] h-[332px] shadow-xl ">
                    <div className="p-[30px] font-semibold ">
                       <img src={rasm} alt="" />
                       <h1 className=' text-black text-2xl my-[20px] '>Иван Иванов</h1>
                       <p className='text-[14px]'>Наше оборудование прозводится вручную. Мы постоянно производим контроль качества произведенной продукции. В то же время, если в ходе транспортировки или эксплуатации в течении первых 2 лет происходят поломки</p>

                       <h5 className='text-black  my-[20px]'>20.10.21</h5>
                    </div>
                </div>
            </div></SwiperSlide>

            <SwiperSlide data-hash="slide1"><div className="flex justify-between items-center p-[40px] ">
                <div className="w-[446px] h-[332px] shadow-xl ">
                    <div className="p-[30px] font-semibold ">
                       <img src={rasm} alt="" />
                       <h1 className=' text-black text-2xl my-[20px] '>Иван Иванов</h1>
                       <p className='text-[14px]'>Наше оборудование прозводится вручную. Мы постоянно производим контроль качества произведенной продукции. В то же время, если в ходе транспортировки или эксплуатации в течении первых 2 лет происходят поломки</p>

                       <h5 className='text-black  my-[20px]'>20.10.21</h5>
                    </div>
                </div>
                <div className="w-[446px] h-[332px] shadow-xl ">
                    <div className="p-[30px] font-semibold ">
                       <img src={rasm} alt="" />
                       <h1 className=' text-black text-2xl my-[20px] '>Иван Иванов</h1>
                       <p className='text-[14px]'>Наше оборудование прозводится вручную. Мы постоянно производим контроль качества произведенной продукции. В то же время, если в ходе транспортировки или эксплуатации в течении первых 2 лет происходят поломки</p>

                       <h5 className='text-black  my-[20px]'>20.10.21</h5>
                    </div>
                </div>
                <div className="w-[446px] h-[332px] shadow-xl ">
                    <div className="p-[30px] font-semibold ">
                       <img src={rasm} alt="" />
                       <h1 className=' text-black text-2xl my-[20px] '>Иван Иванов</h1>
                       <p className='text-[14px]'>Наше оборудование прозводится вручную. Мы постоянно производим контроль качества произведенной продукции. В то же время, если в ходе транспортировки или эксплуатации в течении первых 2 лет происходят поломки</p>

                       <h5 className='text-black  my-[20px]'>20.10.21</h5>
                    </div>
                </div>
            </div></SwiperSlide>
       
      </Swiper>
     
        </div>
        <Footer />
       </>
    );
}

export default Wishlist;

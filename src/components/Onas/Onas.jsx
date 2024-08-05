import React from 'react';
import rasm from '../../assets/imgs/piopl.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation, HashNavigation } from 'swiper/modules';
const Onas = () => {
    return (
        <div className='container'>
            <h1 className='text-center text-4xl p-[40px]'> Что думают о нас</h1>
            


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
        <SwiperSlide data-hash="slide1"><div className="flex flex-wrap gap-[15px]   justify-between items-center p-[40px] ">
                <div className="w-[380px]  shadow-xl ">
                    <div className="p-[30px] font-semibold ">
                       <img src={rasm} alt="" />
                       <h1 className=' text-black text-2xl my-[20px] '>Иван Иванов</h1>
                       <p className='text-[14px]'>Наше оборудование прозводится вручную. Мы постоянно производим контроль качества произведенной продукции. В то же время, если в ходе транспортировки или эксплуатации в течении первых 2 лет происходят поломки</p>

                       <h5 className='text-black  my-[20px]'>20.10.21</h5>
                    </div>
                </div>
                <div className="w-[380px]  shadow-xl ">
                    <div className="p-[30px] font-semibold ">
                       <img src={rasm} alt="" />
                       <h1 className=' text-black text-2xl my-[20px] '>Иван Иванов</h1>
                       <p className='text-[14px]'>Наше оборудование прозводится вручную. Мы постоянно производим контроль качества произведенной продукции. В то же время, если в ходе транспортировки или эксплуатации в течении первых 2 лет происходят поломки</p>

                       <h5 className='text-black  my-[20px]'>20.10.21</h5>
                    </div>
                </div>
                <div className="w-[380px] shadow-xl ">
                    <div className="p-[30px] font-semibold ">
                       <img src={rasm} alt="" />
                       <h1 className=' text-black text-2xl my-[20px] '>Иван Иванов</h1>
                       <p className='text-[14px]'>Наше оборудование прозводится вручную. Мы постоянно производим контроль качества произведенной продукции. В то же время, если в ходе транспортировки или эксплуатации в течении первых 2 лет происходят поломки</p>

                       <h5 className='text-black  my-[20px]'>20.10.21</h5>
                    </div>
                </div>
            </div></SwiperSlide>
            <SwiperSlide data-hash="slide1"><div className="flex flex-wrap gap-[15px]   justify-between items-center p-[40px] ">
                <div className="w-[380px]  shadow-xl ">
                    <div className="p-[30px] font-semibold ">
                       <img src={rasm} alt="" />
                       <h1 className=' text-black text-2xl my-[20px] '>Иван Иванов</h1>
                       <p className='text-[14px]'>Наше оборудование прозводится вручную. Мы постоянно производим контроль качества произведенной продукции. В то же время, если в ходе транспортировки или эксплуатации в течении первых 2 лет происходят поломки</p>

                       <h5 className='text-black  my-[20px]'>20.10.21</h5>
                    </div>
                </div>
                <div className="w-[380px]  shadow-xl ">
                    <div className="p-[30px] font-semibold ">
                       <img src={rasm} alt="" />
                       <h1 className=' text-black text-2xl my-[20px] '>Иван Иванов</h1>
                       <p className='text-[14px]'>Наше оборудование прозводится вручную. Мы постоянно производим контроль качества произведенной продукции. В то же время, если в ходе транспортировки или эксплуатации в течении первых 2 лет происходят поломки</p>

                       <h5 className='text-black  my-[20px]'>20.10.21</h5>
                    </div>
                </div>
                <div className="w-[380px] shadow-xl ">
                    <div className="p-[30px] font-semibold ">
                       <img src={rasm} alt="" />
                       <h1 className=' text-black text-2xl my-[20px] '>Иван Иванов</h1>
                       <p className='text-[14px]'>Наше оборудование прозводится вручную. Мы постоянно производим контроль качества произведенной продукции. В то же время, если в ходе транспортировки или эксплуатации в течении первых 2 лет происходят поломки</p>

                       <h5 className='text-black  my-[20px]'>20.10.21</h5>
                    </div>
                </div>
            </div></SwiperSlide>
          

            <SwiperSlide data-hash="slide1"><div className="flex flex-wrap gap-[15px]   justify-between items-center p-[40px] ">
                <div className="w-[380px]  shadow-xl ">
                    <div className="p-[30px] font-semibold ">
                       <img src={rasm} alt="" />
                       <h1 className=' text-black text-2xl my-[20px] '>Иван Иванов</h1>
                       <p className='text-[14px]'>Наше оборудование прозводится вручную. Мы постоянно производим контроль качества произведенной продукции. В то же время, если в ходе транспортировки или эксплуатации в течении первых 2 лет происходят поломки</p>

                       <h5 className='text-black  my-[20px]'>20.10.21</h5>
                    </div>
                </div>
                <div className="w-[380px]  shadow-xl ">
                    <div className="p-[30px] font-semibold ">
                       <img src={rasm} alt="" />
                       <h1 className=' text-black text-2xl my-[20px] '>Иван Иванов</h1>
                       <p className='text-[14px]'>Наше оборудование прозводится вручную. Мы постоянно производим контроль качества произведенной продукции. В то же время, если в ходе транспортировки или эксплуатации в течении первых 2 лет происходят поломки</p>

                       <h5 className='text-black  my-[20px]'>20.10.21</h5>
                    </div>
                </div>
                <div className="w-[380px] shadow-xl ">
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
    );
}

export default Onas;

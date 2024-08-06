import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import img1 from '../../assets/imgs/img1.png'
import img2 from '../../assets/imgs/img2.png'
import logo from '../../assets/imgs/logo.svg'
import { IoPerson } from 'react-icons/io5';
import logo1 from '../../assets/imgs/logo.png'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useFormInputValue } from '../../components/Hook/useFormInputValur';
const Bot_Token = "6409705996:AAH7HRsbbymTuGEK2h8joN7nQX0Eypu7MRg"
const Chat_ID = "-1002098227822"
const User_ID = "5125371890"
import { deleteAllCart } from '../../components/context/cartSlice';
import ProductTop from '../../components/ProductTop/index'
import Empty from '../../components/Empty/Empty';

const intialState = {
  name: '',
  email: '',
  phone: "",
  comment: '',
  adrest:"",
  radio:"",

}
const Korzinka = () => {
  const  cartItems  = useSelector(state => state.cart.value);
  console.log(cartItems);
  const {setState,state,handleChange}= useFormInputValue(intialState)
  const dispatch = useDispatch();
  const handelSubmit = (e) => {
    e.preventDefault()
    let text = "Buyurtma %0A%0A"
    text +=`Ismi:${state.name}%0A`
    text +=`Email:${state.email}%0A`
    text +=`Phone:${state.phone}%0A`
    text +=`Text:${state.comment}%0A`
    text +=`LastName:${state.adrest}%0A%0A`
    text +=`LastName:${state.radio}%0A%0A`
    cartItems?.forEach((item)=>{
       text +=`Nomi: ${item.title}%0A`
       text +=`Miqdori: ${item.quantity}%0A`
       text +=`Narxi: ${item.price}%0A`
  })
    
    let url = `https://api.telegram.org/bot${Bot_Token}/sendMessage?chat_id=${Chat_ID}&text=${text}`

    let api = new XMLHttpRequest()
    api.open("GET", url, true)
    api.send()
    dispatch(deleteAllCart())
    setState(intialState)

}
  let links = cartItems?.slice(0,1)?.map(link =>(
  <div className="" key={link.id}>
       <form action="" onSubmit={handelSubmit} >
       <div className="flex flex-col  md:flex-row items-center gap-5 md:gap-40  ">
                        <button className="border border-three w-full md:w-[327px] h-[50px] text-lg text-three font-sans">
                            Назад к покупкам
                        </button>
                        <h1 className="font-serif text-3xl md:text-5xl text-four mt-4 md:mt-0">Оформить заказ</h1>
                    </div>
                    <div className="  All flex flex-col  md:flex-row items-start justify-between mt-10  gap-10  ">
                        <div className="all-one w-full md:w-2/3">
                            <div className="person bg-five flex  flex-col md:flex-row items-center gap-5 p-5 flex-wrap mb-10   ">
                                <div className="person-one flex items-center gap-5 flex-wrap">
                                    <button className="border bg-white rounded-full w-[82px] h-[82px] flex justify-center items-center">
                                        <IoPerson className="text-4xl text-six" />
                                    </button>
                                    <div>
                                        <p className="font-sans font-extrabold text-sm w-full md:w-[352px] mb-3">
                                            Уже есть аккаунт или хотите зарегистрироваться ?
                                        </p>
                                        <p className="font-sans font-normal text-sm text-four">
                                            Войдите в кабинет и получите скидку
                                        </p>
                                    </div>
                                </div>
                                <div className="person-two flex gap-5 flex-wrap">
                                    <button className="border border-one w-[132px] h-[50px] text-four font-sans transition duration-400 hover:bg-one hover:text-white">
                                        Войти
                                    </button>
                                    <button className="border border-one w-[132px] h-[50px] text-four font-sans transition duration-400 hover:bg-one hover:text-white">
                                        Регистрация
                                    </button>
                                </div>
                            </div>
                            <div className="inputs">
                                <div className="inputs-one flex items-center gap-5 mb-8">
                                    <div className="first border bg-two w-[36px] h-[36px] text-xl font-sans font-extrabold text-white flex items-center justify-center">
                                        1
                                    </div>
                                    <p className="font-sans font-semibold text-2xl text-four">
                                        Личные данные
                                    </p>
                                </div>
                                <div className="inputs-two flex flex-col md:flex-row items-center gap-5 flex-wrap">
                                    <div className="name flex flex-col">
                                        <input
                                            type="text"
                                            placeholder="Имя"
                                            name='name' value={state.name} onChange={handleChange}
                                            className="p-2 w-full md:w-[327px] border-2 border-three outline-none mb-5"
                                        />
                                        <input
                                            type="number"
                                            placeholder="Телефон"
                                            name='phone' value={state.phone} onChange={handleChange}
                                            className="p-2 w-full md:w-[327px] border-2 border-three outline-none mb-5"
                                        />
                                        <input
                                            type="text"
                                            placeholder="Страна"
                                            name='email' value={state.email} onChange={handleChange}
                                            className="p-2 w-full md:w-[327px] border-2 border-three outline-none mb-5"
                                        />
                                    </div>
                                    <div className="name flex flex-col">
                                        <input
                                            type="text"
                                            name='adrest' value={state.adrest} onChange={handleChange}
                                            placeholder="Фамилия"
                                            className="p-2 w-full md:w-[327px] border-2 border-three outline-none mb-5"
                                        />
                                        <input
                                            type="text"
                                            placeholder="E-mail"
                                            name="comment" required  value={state.comment} onChange={handleChange}
                                            className="p-2 w-full md:w-[327px] border-2 border-three outline-none mb-5"
                                        />
                                        <input
                                            type="text"
                                            placeholder="Город"
                                             name='radio' value={state.radio} onChange={handleChange}
                                            className="p-2 w-full md:w-[327px] border-2 border-three outline-none mb-5"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="all-two w-full md:w-1/3">
                            <div className="two flex flex-col gap-3">
                                <div className="two-one flex items-center gap-3">
                                    <div className="img">
                                        <img src={link.imges[0]} alt="Product" className='w-[100px] h-[100px]' />
                                    </div>
                                    <div className="word">
                                        <div className="word-one font-sans font-extrabold text-four text-sm w-full md:w-[200px]">
                                            <p>Дистиллятор для получения гидролата 8л</p>
                                        </div>
                                        <div className="word-two flex items-center justify-between mt-2">
                                            <h3 className="font-sans font-semibold text-lg text-four">
                                                2 шт.
                                            </h3>
                                            <h2 className="font-sans font-extrabold text-seven text-lg">
                                            {link.price} грн
                                            </h2>
                                        </div>
                                    </div>
                                </div>
                                <div className="two-one flex items-center gap-3">
                                    <div className="img">
                                        <img src={link.imges[0]} alt="Product" className='w-[100px] h-[100px]' />
                                    </div>
                                    <div className="word">
                                        <div className="word-one font-sans font-extrabold text-four text-sm w-full md:w-[200px]">
                                            <p>Дистиллятор для получения гидролата 8л</p>
                                        </div>
                                        <div className="word-two flex items-center justify-between mt-2">
                                            <h3 className="font-sans font-semibold text-lg text-four">
                                                2 шт.
                                            </h3>
                                            <h2 className="font-sans font-extrabold text-seven text-lg">
                                            {link.price} грн
                                            </h2>
                                        </div>
                                    </div>
                                </div>
                                <div className="two-one flex items-center gap-3">
                                    <div className="img">
                                        <img src={link.imges[1]} alt="Product" className='w-[100px] h-[100px]' />
                                    </div>
                                    <div className="word">
                                        <div className="word-one font-sans font-extrabold text-four text-sm w-full md:w-[200px]">
                                            <p>Дистиллятор для получения гидролата 8л</p>
                                        </div>
                                        <div className="word-two flex items-center justify-between mt-2">
                                            <h3 className="font-sans font-semibold text-lg text-four">
                                                2 шт.
                                            </h3>
                                            <h2 className="font-sans font-extrabold text-seven text-lg">
                                            {link.price} грн
                                            </h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="three flex flex-col justify-between bg-white shadow-xl p-3 mt-5">
                                <div className="fast-one mt-5">
                                    <input
                                        type="text"
                                        placeholder="Введите прокод"
                                        className="border border-three outline-none p-2 w-full"
                                    />
                                    <button className="p-2 border bg-one text-white w-full mt-2">
                                        Применить
                                    </button>
                                </div>
                                <div className="fast-two mt-5">
                                    <p className="font-sans font-normal text-2xl">
                                        Итого
                                    </p>
                                    <h1 className="font-sans font-extrabold text-3xl mb-3">
                                        10 953 грн
                                    </h1>
                                </div>
                                <div className="fast-three flex flex-col items-center mt-5">
                                    <div className="three-one flex items-center gap-3 mb-10">
                                        <img src={logo} alt="Free delivery" className='w-8 h-8' />
                                        <p className="font-sans font-semibold text-lg text-three">
                                            У вас бесплатная доставка!
                                        </p>
                                    </div>
                                    <button className="border bg-one text-white p-2 w-full">
                                        Оформить заказ
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="All-two mt-10">
                        <div className="dostafka">
                            <div className="dost-on flex items-center gap-4">
                                <div className="first border bg-two w-[36px] h-[36px] text-xl font-sans font-extrabold text-white flex items-center justify-center">
                                    2
                                </div>
                                <p className="font-sans font-semibold text-2xl text-four">
                                    Доставка
                                </p>
                            </div>
                            <div className="dost-two mt-4 mb-4">
                                <div className="chak mb-3">
                                    <div className="chek-one flex items-center">
                                        <input
                                            type="radio"
                                            id="radio2"
                                            name="radio"
                                            className="mr-2 text-one"
                                        />
                                        <label
                                            htmlFor="radio2"
                                            className="font-sans font-extrabold text-lg text-one"
                                        >
                                            Самовывоз
                                        </label>
                                    </div>
                                    <p className="font-sans font-normal text-lg w-full md:w-[398px] text-three">
                                        Вы можете забрать из нашего официального магазина по адресу Бажана 8-Б, Киев, 02132 Украина
                                    </p>
                                </div>
                                <div className="chak mb-3">
                                    <div className="chek-one flex items-center">
                                        <input
                                            type="radio"
                                            id="radio3"
                                            name="radio"
                                            className="mr-2 text-one"
                                        />
                                        <label
                                            htmlFor="radio3"
                                            className="font-sans font-extrabold text-lg text-one"
                                        >
                                            Новая почта
                                        </label>
                                    </div>
                                    <p className="font-sans font-normal text-lg w-full md:w-[398px] text-three">
                                        Вы можете забрать из нашего официального магазина по адресу Бажана 8-Б, Киев, 02132 Украина
                                    </p>
                                </div>
                                <div className="chak mb-3">
                                    <div className="chek-one flex items-center">
                                        <input
                                            type="radio"
                                            id="radio4"
                                            name="radio"
                                            className="mr-2 text-one"
                                        />
                                        <label
                                            htmlFor="radio4"
                                            className="font-sans font-extrabold text-lg text-one"
                                        >
                                            Курьер “Новая почта”
                                        </label>
                                    </div>
                                    <p className="font-sans font-normal text-lg w-full md:w-[398px] text-three">
                                        Вы можете забрать из нашего официального магазина по адресу Бажана 8-Б, Киев, 02132 Украина
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="give mt-10">
                            <div className="give-one flex items-center gap-5 mb-5">
                                <div className="first border bg-two w-[36px] h-[36px] text-xl font-sans font-extrabold text-white flex items-center justify-center">
                                    3
                                </div>
                                <p className="font-sans font-semibold text-2xl text-four">
                                    Оплата
                                </p>
                            </div>
                            <div className="give-two">
                                <div className="chaks flex flex-col gap-4">
                                    <div className="chaks-one flex items-center">
                                        <input
                                            type="radio"
                                            id="radio5"
                                            name="radio"
                                            className="mr-2 text-one"
                                        />
                                        <label
                                            htmlFor="radio5"
                                            className="font-sans font-extrabold text-lg text-one"
                                        >
                                            При получении
                                        </label>
                                    </div>
                                    <div className="chaks-two flex items-center">
                                        <input
                                            type="radio"
                                            id="radio6"
                                            name="radio"
                                            className="mr-2 text-one"
                                        />
                                        <label
                                            htmlFor="radio6"
                                            className="font-sans font-extrabold text-lg text-one"
                                        >
                                            Онлайн-оплата картой
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
       </form>
  </div>
  ))



    return (
        <>
        <ProductTop/>
            <div className='kor bg-white py-4'>
                <div className="container mx-auto flex justify-center items-center">
                   <Link to={'/'}> <img src={logo1} alt="Logo" className='w-[175px] h-[47px]' /></Link>
                </div>
            </div>
            {
                cartItems.length ? 
                <div className="">
                <div className="container mx-auto p-5 md:p-10 " >
                  {links}
                </div>
            </div>
            :
          <Empty/>
            }
           
            <div className='kor bg-white py-4 mt-10'>
                <div className="container mx-auto flex justify-center items-center flex-col">
                    <img src={logo1} alt="Logo" className='w-[175px] h-[47px]' />
                    <p className='text-center text-lime-950 py-2'>© 2021 “Copper Pro” Все права защищенны</p>
                </div>
            </div>
        </>
    );
}

export default Korzinka;

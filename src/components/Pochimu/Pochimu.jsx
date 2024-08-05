import React from 'react';
import rasm from '../../assets/imgs/yul.png';
import rasm1 from '../../assets/imgs/yul1.png';
import rasm2 from '../../assets/imgs/yul2.png';
import rasm3 from '../../assets/imgs/yul3.png';
import rasm4 from '../../assets/imgs/yul4.png';
import rasm5 from '../../assets/imgs/yul5.png';
import { VscChevronDown } from "react-icons/vsc";

const Pochimu = () => {
    return (
        <div className='bg-text py-20'>
            <div className="container mx-auto">
                <h1 className='text-black text-center py-10 text-4xl'>Почему выбирают нас</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                    {[rasm, rasm1, rasm2, rasm3, rasm4, rasm5, rasm1, rasm3].map((image, index) => (
                        <div key={index} className="w-full p-4">
                            <div className="bg-primary w-20 h-20 flex justify-center items-center mb-4">
                                <img src={image} alt={`icon-${index}`} />
                            </div>
                            <h2 className='text-2xl font-semibold mb-2'>Аутентичность</h2>
                            <p className='text-base mb-4'>
                                {index === 0 && "Медное перегонное оборудование используется для получения эфирных масел с незапамятных времен."}
                                {index === 1 && "Наши изделия из меди являются очень практичными. В то же время они наполнят особой магией ваш дом или рабочее...."}
                                {index === 2 && "Мы стремимся предоставить лучший товар по лучшей цене с сервисом высокого уровня. Но все начинается c...."}
                                {index === 3 && "У нас есть все от миниатюрных настольных паровых дистилляторов эфирных масел до крупногабаритного оборудования..."}
                                {index === 4 && "Медное перегонное оборудование используется для получения эфирных масел с незапамятных времен."}
                                {index === 5 && "Наше оборудование прозводится вручную. Мы постоянно производим контроль качества произведенной продукции."}
                                {index === 6 && "Медное перегонное оборудование используется для получения эфирных масел с незапамятных времен."}
                                {index === 7 && "Медное перегонное оборудование используется для получения эфирных масел с незапамятных времен."}
                            </p>
                            <div className="flex items-center gap-4">
                                <div className="text-error">
                                    <p className='cursor-pointer'>Читать больше</p>
                                </div>
                                <div className="cursor-pointer text-2xl text-error">
                                    <VscChevronDown />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Pochimu;

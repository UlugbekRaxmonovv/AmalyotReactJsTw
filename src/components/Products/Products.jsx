import React from 'react';
import rasm from '../../assets/imgs/pro.png';
import rasm2 from '../../assets/imgs/pro1.png';
import rasm3 from '../../assets/imgs/pro2.png';
import rasm4 from '../../assets/imgs/ras1.png';
import rasm5 from '../../assets/imgs/pro4.png';
import rasm6 from '../../assets/imgs/pro5.png';

const Products = () => {
    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h1 className="text-3xl md:text-4xl font-bold">Наша продукция</h1>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                        { src: rasm, label: 'Для эфирных масел' },
                        { src: rasm5, label: 'Аксессуары из меди' },
                        { src: rasm2, label: 'Для гидролатов' },
                        { src: rasm3, label: 'Медная посуда' },
                      
                        { src: rasm5, label: 'Аксессуары из меди' },
                        { src: rasm6, label: 'Медная посуда' },
                    ].map((product, index) => (
                        <div key={index} className="relative overflow-hidden rounded-lg shadow-lg">
                            <img 
                                className="w-full h-auto object-cover" 
                                src={product.src} 
                                alt={`Product ${index + 1}`} 
                            />
                            <div className="absolute inset-0 top-[80%] flex items-center justify-center">
                                <p className="text-2xl font-semibold text-white bg-opacity-50 px-4 py-2 rounded-lg">
                                    {product.label}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Products;

import React from 'react';


import RF from '../assets/img/RF.png'
import FR from '../assets/img/FR.png'
import FM from '../assets/img/FM.png'

import SR from '../assets/img/SR.png'


import BT from '../assets/img/BT.png'

import CR1 from '../assets/img/CR1.png'
import CR2 from '../assets/img/CR2.png'
import CR3 from '../assets/img/CR3.png'
import CR4 from '../assets/img/CR4.png'
import CR5 from '../assets/img/CR5.png'
import CR6 from '../assets/img/CR6.png'
import CR7 from '../assets/img/CR7.png'
import CR8 from '../assets/img/CR8.png'
import CR9 from '../assets/img/CR9.png'
import CR10 from '../assets/img/CR10.png'
import CR11 from '../assets/img/CR11.png'
import CR12 from '../assets/img/CR12.png'
import CR13 from '../assets/img/CR13.png'
import CR14 from '../assets/img/CR14.png'
import CR15 from '../assets/img/CR15.png'
import CR16 from '../assets/img/CR16.png'


interface Product {
  id: number;
  title: string;
  price: string;
  image: string;
  category: string;
}

const products: Product[] = [
  {
    id: 1,
    title: "Uzukliy parietetatsiyalik konstruksiya",
    price: "+92 02 02 01-1005",
    image : CR1 ,
    category: "Gips-Beton"
  },
  {
    id: 2,
    title: "Gips-Beton",
    price: "+92 02 02 01-1006",
    image: CR2,
    category: "Gips-Beton"
  },
  {
    id: 3,
    title: "Uzukliy parietetatsiyalik konstruksiya",
    price: "+92 02 02 01-1007",
    image: CR3,
    category: "Gips-Beton"
  },
  {
    id: 4,
    title: "Ijodiy - sanoatkorlik nafisliklari",
    price: "+91 01 01 01-0002",
    image: CR4,
    category: "Sanoat"
  },

   {
    id: 5,
    title: "Gips-Beton",
    price: "+92 02 02 01-1006",
    image: CR5,
    category: "Gips-Beton"
  },
  {
    id: 6,
    title: "Uzukliy parietetatsiyalik konstruksiya",
    price: "+92 02 02 01-1007",
    image: CR6,
    category: "Gips-Beton"
  }, {
    id: 7,
    title: "Gips-Beton",
    price: "+92 02 02 01-1006",
    image: CR7,
    category: "Gips-Beton"
  },
  {
    id: 8,
    title: "Uzukliy parietetatsiyalik konstruksiya",
    price: "+92 02 02 01-1007",
    image: CR8,
    category: "Gips-Beton"
  },

   {
    id: 9,
    title: "Gips-Beton",
    price: "+92 02 02 01-1006",
    image: CR9,
    category: "Gips-Beton"
  },
  {
    id: 10,
    title: "Uzukliy parietetatsiyalik konstruksiya",
    price: "+92 02 02 01-1007",
    image: CR10,
    category: "Gips-Beton"
  },

   {
    id: 11,
    title: "Gips-Beton",
    price: "+92 02 02 01-1006",
    image: CR11,
    category: "Gips-Beton"
  },
  {
    id: 12,
    title: "Uzukliy parietetatsiyalik konstruksiya",
    price: "+92 02 02 01-1007",
    image: CR12,
    category: "Gips-Beton"
  },

 {
    id: 13,
    title: "Gips-Beton",
    price: "+92 02 02 01-1006",
    image: CR13,
    category: "Gips-Beton"
  },
  {
    id: 14,
    title: "Uzukliy parietetatsiyalik konstruksiya",
    price: "+92 02 02 01-1007",
    image: CR14,
    category: "Gips-Beton"
  },

   {
    id: 15,
    title: "Gips-Beton",
    price: "+92 02 02 01-1006",
    image: CR15,
    category: "Gips-Beton"
  },
  {
    id: 16,
    title: "Uzukliy parietetatsiyalik konstruksiya",
    price: "+92 02 02 01-1007",
    image: CR16,
    category: "Gips-Beton"
  },

 
  // ... boshqa mahsulot
  // lar
];

const Product: React.FC = () => {
  return (
    <div className="p-6 bg-white rounded-lg max-w-[1440px] mx-auto shadow-md">
    




  <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-blue-800">KO'P KO'RILGANLAR</h2>
     
        </div>
   <div className="flex space-x-2 text-gray-600 ">
          <button className="p-2 bg-blue-100 rounded hover:bg-blue-200 transition">
           <img src={FM} alt="" />
          </button>
          <button className="p-2 bg-blue-100 rounded hover:bg-blue-200 transition">
          <img src={FR} alt="" />
          </button>
          <button className="p-2 bg-blue-100 rounded hover:bg-blue-200 transition">
           <img src={RF} alt="" />
          </button>
      </div>






      <div className="grid grid-cols-1 max-w-[1440px] mx-auto sm:grid-cols-2 mt-8 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-48 mt-6 rounded-2xl px-2  object-cover"
            />
            <div className="p-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-gray-600">{product.price}</span>
                <button className="text-xs p-1 rounded-full bg-gray-100 hover:bg-gray-200">
                
                  
                  <img src={SR} alt="" />
                </button>
              </div>
              <p className="text-sm text-gray-700 mb-2 line-clamp-2">{product.title}</p>
              <div className="flex justify-between items-center mt-4">
                <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition">
                  Ko'rish
                </button>
                <button className="p-2 rounded-md hover:bg-gray-100 transition">
                 
                  <img src={BT} alt="" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 text-center">
        <button className="text-blue-600 hover:text-blue-800 font-medium">
          Barcha mahsulotlarni ko'rish →
        </button>
      </div>
    </div>
  );
};

export default Product;
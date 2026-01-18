
import React, { useState } from 'react';

import CO from '../assets/img/CO.png'
import IM1 from '../assets/img/IM1.png'
import IM2 from '../assets/img/IM2.png'
import IM3 from '../assets/img/IM3.png'
import IM4 from '../assets/img/IM4.png'
import IM5 from '../assets/img/IM5.png'
import IM6 from '../assets/img/IM6.png'
import IM7 from '../assets/img/IM7.png'
import IM8 from '../assets/img/IM8.png'
import IM9 from '../assets/img/IM9.png'



import Populars from './Populars';


interface Category {
  id: number;
  title: string;
  icon: React.ReactNode;
}

const Qurilish: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const categories: Category[] = [
    {
      id: 1,
      title: 'Beton va qorishmalar',
      icon: (
       <img src={CO} alt="" />
      ),
    },
    {
      id: 2,
      title: 'Kabel mahsulotlari',
      icon: (
       <img src={IM1} alt="" />
      ),
    },
    {
      id: 3,
      title: 'To’ldiruvchilar',
      icon: (
       <img src={IM2} alt="" />
      ),
    },
    {
      id: 4,
      title: 'Metall proyektsiyalar',
      icon: (
       <img src={IM3} alt="" />
      ),
    },
    {
      id: 5,
      title: 'Yog’och material va buyumlar',
      icon: (
       <img src={IM4} alt="" />
      ),
    },
    {
      id: 6,
      title: 'Plastmassalar',
      icon: (
       <img src={IM5} alt="" />
      ),
    },
    {
      id: 7,
      title: 'Keramika materiallari va buyumlar',
      icon: (
       <img src={IM6} alt="" />
      ),
    },
    {
      id: 8,
      title: 'Issiqlik izolyatsiyasi va akustik materiallar',
      icon: (
        <img src={IM7} alt="" />
      ),
    },
    {
      id: 9,
      title: 'Tom yopish va gidroizolyatsiya materiallari',
      icon: (
       <img src={IM8} alt="" />
      ),
    },
    {
      id: 10,
      title: 'Qoplamlar va yopishtiruvchi materiallar va buyumlar',
      icon: (
       <img src={IM9} alt="" />
      ),
    },
  ];

  // Dropdown ma'lumotlari
  const dropdownItems = [
    { label: 'Yangiliklar', href: '#yangiliklar' },
    { label: 'Aloqa', href: '#aloqa' },
    { label: 'Biz haqimizda', href: '#biz-haqimizda' },
  ];

  return (
    <>
    <div className="bg-gray-50">
    <div className=" max-w-[1440px] mx-auto p-6 rounded-lg shadow-sm">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {categories.map((category) => (
          <div
            key={category.id}
            className={`flex items-center p-3 bg-white rounded-md shadow-sm border border-gray-200 hover:border-blue-300 transition cursor-pointer ${
              category.title === 'Metall proyektsiyalar' ? 'relative' : ''
            }`}
            onMouseEnter={() => category.title === 'Metall proyektsiyalar' && setIsDropdownOpen(true)}
            onMouseLeave={() => category.title === 'Metall proyektsiyalar' && setIsDropdownOpen(false)}
          >
            <div className="mr-3">{category.icon}</div>
            <span className="text-sm font-medium text-gray-800">{category.title}</span>

            {/* Dropdown */}
            {category.title === 'Metall proyektsiyalar' && (
              <div
                className={`absolute top-full left-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10 transition-opacity duration-200 ${
                  isDropdownOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                }`}
              >
                <ul className="py-2">
                  {dropdownItems.map((item, idx) => (
                    <li key={idx}>
                      <a
                        href={item.href}
                        className="block px-4 py-2 text-sm text-blue-600 hover:bg-blue-50 hover:text-blue-800 transition"
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
    </div>
    

<Populars />

</>
  );
};

export default Qurilish;
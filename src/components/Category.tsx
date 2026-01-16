// CategoryMenu.tsx
import React, { useState } from 'react';

interface Category {
  id: number;
  title: string;
  icon: React.ReactNode;
}

const Category: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const categories: Category[] = [
    {
      id: 1,
      title: 'Beton va qorishmalar',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
        </svg>
      ),
    },
    {
      id: 2,
      title: 'Kabel mahsulotlari',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9M5 9m2 6h10v6M5 9h10V7M5 9V7" />
        </svg>
      ),
    },
    {
      id: 3,
      title: 'To’ldiruvchilar',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
        </svg>
      ),
    },
    {
      id: 4,
      title: 'Metall proyektsiyalar',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9M5 9m2 6h10v6M5 9h10V7M5 9V7" />
        </svg>
      ),
    },
    {
      id: 5,
      title: 'Yog’och material va buyumlar',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16v6H4V6zm4 8h8v6H8v-6z" />
        </svg>
      ),
    },
    {
      id: 6,
      title: 'Plastmassalar',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9M5 9m2 6h10v6M5 9h10V7M5 9V7" />
        </svg>
      ),
    },
    {
      id: 7,
      title: 'Keramika materiallari va buyumlar',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16v6H4V6zm4 8h8v6H8v-6z" />
        </svg>
      ),
    },
    {
      id: 8,
      title: 'Issiqlik izolyatsiyasi va akustik materiallar',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9M5 9m2 6h10v6M5 9h10V7M5 9V7" />
        </svg>
      ),
    },
    {
      id: 9,
      title: 'Tom yopish va gidroizolyatsiya materiallari',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16v6H4V6zm4 8h8v6H8v-6z" />
        </svg>
      ),
    },
    {
      id: 10,
      title: 'Qoplamlar va yopishtiruvchi materiallar va buyumlar',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9M5 9m2 6h10v6M5 9h10V7M5 9V7" />
        </svg>
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
    <div className="bg-gray-50">
    <div className=" max-w-[1440px] mx-auto p-6 rounded-lg shadow-sm">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
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
  );
};

export default Category;
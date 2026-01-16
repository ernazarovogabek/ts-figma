// Header.tsx
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

interface Language {
  code: string;
  name: string;
}

const Header: React.FC = () => {
  const [isCityDropdownOpen, setIsCityDropdownOpen] = useState(false);
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);

  const languages: Language[] = [
    { code: 'uz', name: 'UZ' },
    { code: 'ya', name: 'Ўз' },
    { code: 'ru', name: 'RU' },
    { code: 'en', name: 'EN' },
  ];

  // Menyu elementlari — route path va sarlavha
  const menuItems = [
    { to: '/materials', label: 'Materiallar va buyumlar' },
    { to: '/machines', label: 'Mashina mexanizmlar' },
    { to: '/construction-works', label: 'Qurilish ishlari' },
    { to: '/small-mechanization', label: 'Kichik mexanizatsiya' },
    { to: '/equipment', label: 'Uskuna va qurilmalar' },
    { to: '/classifier', label: 'Klassifikator' },
    { to: '/departments', label: 'Bo\'limlar' },
  ];

  return (
    <header className="bg-blue-900 text-white">
      {/* Top bar — Shahar va Til */}
      <div className="border-b border-blue-800 max-w-[1440px] mx-auto px-6 py-2 flex justify-between items-center text-sm">
        <div className="relative">
          <button
            onClick={() => setIsCityDropdownOpen(!isCityDropdownOpen)}
            className="flex items-center gap-1 hover:text-blue-300 transition"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.995 1.995 0 01-2.828 0l-4.244-4.244a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            Toshkent
            <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 ml-1 transition-transform ${isCityDropdownOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {isCityDropdownOpen && (
            <div className="absolute left-0 mt-1 w-32 bg-white text-gray-800 rounded-md shadow-lg z-10">
              <ul>
                <li><button className="block px-4 py-2 hover:bg-gray-100 w-full text-left">Toshkent</button></li>
                <li><button className="block px-4 py-2 hover:bg-gray-100 w-full text-left">Samarqand</button></li>
                <li><button className="block px-4 py-2 hover:bg-gray-100 w-full text-left">Buxoro</button></li>
              </ul>
            </div>
          )}
        </div>

        <div className="flex items-center space-x-4">
          <span>Yo’riqnoma</span>

          {/* Til tanlash */}
          <div className="relative">
            <button
              onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
              className="flex items-center gap-1 bg-blue-800 px-2 py-1 rounded hover:bg-blue-700 transition"
            >
              uz
              <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 ml-1 transition-transform ${isLangDropdownOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {isLangDropdownOpen && (
              <div className="absolute right-0 mt-1 w-20 bg-white text-gray-800 rounded-md shadow-lg z-10">
                <ul>
                  {languages.map((lang) => (
                    <li key={lang.code}>
                      <button className="block px-4 py-2 hover:bg-gray-100 w-full text-left">
                        {lang.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Asosiy header */}
      <div className="px-6 py-4 max-w-[1440px] mx-auto flex justify-between items-center">
        {/* Logo va nom */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-900" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2L2 7l10 5 10-5M2 12v5l10 5m0 0v-5m0 5l10-5M2 12l10 5z" />
            </svg>
          </div>
          <div>
            <h1 className="text-sm font-medium leading-tight">
              Qurilishda texnik me'yорlash va standartlashtirish ilmiy-tadqiqot instituti
            </h1>
          </div>
        </div>

        {/* O'ng tomon — Ikonkalar va Menyu */}
        <div className="flex max-w-[1440px] items-center space-x-6">
          {/* Qidiruv */}
          <div className="text-xl hover:text-blue-300 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>

          {/* Savat (3 ta) */}
          <div className="relative">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 hover:text-blue-300 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v6h12V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 002 2h2a2 2 0 002-2z" />
            </svg>
            <span className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              3
            </span>
          </div>

          {/* Savat (4 ta) */}
          <div className="relative">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 hover:text-blue-300 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M12 13a2 2 0 100-4 2 2 0 000 4z" />
            </svg>
            <span className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              4
            </span>
          </div>

          {/* Kirish / Ro'yxatdan o'tish */}
          <div className="flex items-center space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14a4 4 0 018 0m-8-6a4 4 0 018 0v6a4 4 0 01-8 0V8z" />
            </svg>
            <div className="flex flex-col">
              <span className="text-xs">Kirish</span>
              <span className="text-xs">Ro'yhatdan</span>
            </div>
          </div>
        </div>
      </div>

      {/* Asosiy menyu — NavLink bilan */}
      <nav className="border-t mx-auto border-blue-800 px-6 py-2">
        <ul className="flex flex-wrap gap-x-8 gap-y-2 text-sm">
          {menuItems.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  `pb-1 transition ${
                    isActive
                      ? 'font-medium text-white border-b-2 border-blue-300'
                      : 'text-white hover:text-blue-300'
                  }`
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
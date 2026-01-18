
// import React, { useState } from 'react';
// import { NavLink } from 'react-router-dom';
// import Logo from '../assets/img/Logo.png'
// import GR from '../assets/img/GR.png'
// import US from '../assets/img/US.png'
// import GT from '../assets/img/GT.png'

// interface Language {
//   code: string;
//   name: string;
// }

// const Header: React.FC = () => {
//   const [isCityDropdownOpen, setIsCityDropdownOpen] = useState(false);
//   const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);

//   const languages: Language[] = [
//     { code: 'uz', name: 'UZ' },
//     { code: 'ya', name: 'Ўз' },
//     { code: 'ru', name: 'RU' },
//     { code: 'en', name: 'EN' },
//   ];



//   return (
//     <header className="bg-blue-900 text-white">
//       {/* Top bar — Shahar va Til */}
//       <div className="border-b border-blue-800 max-w-[1440px] mx-auto px-6 py-2 flex justify-between items-center text-sm">
//         <div className="relative">
//           <button
//             onClick={() => setIsCityDropdownOpen(!isCityDropdownOpen)}
//             className="flex items-center gap-1 hover:text-blue-300 transition"
//           >
//             <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.995 1.995 0 01-2.828 0l-4.244-4.244a8 8 0 1111.314 0z" />
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
//             </svg>
//             Toshkent
//             <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 ml-1 transition-transform ${isCityDropdownOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//             </svg>
//           </button>

//           {isCityDropdownOpen && (
//             <div className="absolute left-0 mt-1 w-32 bg-white text-gray-800 rounded-md shadow-lg z-10">
//               <ul>
//                 <li><button className="block px-4 py-2 hover:bg-gray-100 w-full text-left">Toshkent</button></li>
//                 <li><button className="block px-4 py-2 hover:bg-gray-100 w-full text-left">Samarqand</button></li>
//                 <li><button className="block px-4 py-2 hover:bg-gray-100 w-full text-left">Buxoro</button></li>
//               </ul>
//             </div>
//           )}
//         </div>

//         <div className="flex items-center space-x-4">
//           <span>Yo’riqnoma</span>

//           {/* Til tanlash */}
//           <div className="relative">
//             <button
//               onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
//               className="flex items-center gap-1 bg-blue-800 px-2 py-1 rounded hover:bg-blue-700 transition"
//             >
//               uz
//               <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 ml-1 transition-transform ${isLangDropdownOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//               </svg>
//             </button>

//             {isLangDropdownOpen && (
//               <div className="absolute right-0 mt-1 w-20 bg-white text-gray-800 rounded-md shadow-lg z-10">
//                 <ul>
//                   {languages.map((lang) => (
//                     <li key={lang.code}>
//                       <button className="block px-4 py-2 hover:bg-gray-100 w-full text-left">
//                         {lang.name}
//                       </button>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>

//       {/* Asosiy header */}
//       <div className="px-6 py-4 max-w-[1440px] mx-auto flex justify-between items-center">
//         {/* Logo va nom */}
//         <div className="flex items-center gap-3">
//           <div className="w-10 h-10 rounded-lg flex items-center justify-center">
//            <img src={Logo} alt="" />
//           </div>
//           <div>
//             <h1 className="text-sm font-medium leading-tight">
//               Qurilishda texnik me'yорlash va standartlashtirish ilmiy-tadqiqot instituti
//             </h1>
//           </div>
//         </div>

//         {/* O'ng tomon — Ikonkalar va Menyu */}
//         <div className="flex max-w-[1440px] items-center space-x-6">
//           {/* Qidiruv */}
//           <div className="text-xl hover:text-blue-300 cursor-pointer">
//             <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-9" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
//             </svg>
//           </div>

//           {/* Savat (3 ta) */}
//           <div className="relative">
//            <img src={GT} alt="" />
//           </div>

//           {/* Savat (4 ta) */}
//           <div className="relative">
//            <img src={GR} alt="" />
//           </div>

//           {/* Kirish / Ro'yxatdan o'tish */}
//           <div className="flex items-center space-x-2">
//            <img src={US} alt="" />
//             <div className="flex flex-col">
//               <span className="text-xs">Kirish</span>
//               <span className="text-xs">Ro'yhatdan</span>
//             </div>
//           </div>
//         </div>
//       </div>


//       <div className="nav max-w-[1440px] mx-auto py-6 gap-20">
//         <div className=" gap-20 px-6 flex">
//             <NavLink className={({ isActive }) => (isActive ? "text-blue-600 font-semibold" : "text-white")} to="/">Materiallar</NavLink>
//             <NavLink className={({ isActive }) => (isActive ? "text-blue-600 font-semibold" : "text-white")} to="/mashina">Mashina</NavLink>
//             <NavLink className={({ isActive }) => (isActive ? "text-blue-600 font-semibold" : "text-white")} to="/qurilish">Qurilish</NavLink>
            
//         </div>
//       </div>

    
//     </header>
//   );
// };

// export default Header;













// import React, { useState } from 'react';
// import { NavLink } from 'react-router-dom';

// import Logo from '../assets/img/Logo.png';
// import GR from '../assets/img/GR.png';
// import US from '../assets/img/US.png';
// import GT from '../assets/img/GT.png';

// interface Language {
//   code: string;
//   name: string;
// }

// const Header: React.FC = () => {
//   const [isCityDropdownOpen, setIsCityDropdownOpen] = useState(false);
//   const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);

//   const languages: Language[] = [
//     { code: 'uz', name: 'UZ' },
//     { code: 'ya', name: 'Ўз' },
//     { code: 'ru', name: 'RU' },
//     { code: 'en', name: 'EN' },
//   ];

//   return (
//     <header className="bg-blue-900 text-white">
//       {/* TOP BAR */}
//       <div className="border-b border-blue-800">
//         <div className="max-w-[1440px] mx-auto px-6 py-2 flex justify-between items-center text-sm">
//           {/* CITY */}
//           <div className="relative">
//             <button
//               onClick={() => setIsCityDropdownOpen(!isCityDropdownOpen)}
//               className="flex items-center gap-1 hover:text-blue-300 transition"
//             >
//               Toshkent
//               <svg
//                 className={`w-4 h-4 transition-transform ${isCityDropdownOpen ? 'rotate-180' : ''}`}
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//               </svg>
//             </button>

//             {isCityDropdownOpen && (
//               <div className="absolute mt-1 w-32 bg-white text-gray-800 rounded shadow z-20">
//                 <button className="block w-full px-4 py-2 text-left hover:bg-gray-100">Toshkent</button>
//                 <button className="block w-full px-4 py-2 text-left hover:bg-gray-100">Samarqand</button>
//                 <button className="block w-full px-4 py-2 text-left hover:bg-gray-100">Buxoro</button>
//               </div>
//             )}
//           </div>

//           {/* LANG */}
//           <div className="relative">
//             <button
//               onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
//               className="bg-blue-800 px-3 py-1 rounded flex items-center gap-1 hover:bg-blue-700"
//             >
//               uz
//               <svg
//                 className={`w-4 h-4 transition-transform ${isLangDropdownOpen ? 'rotate-180' : ''}`}
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//               </svg>
//             </button>

//             {isLangDropdownOpen && (
//               <div className="absolute right-0 mt-1 w-20 bg-white text-gray-800 rounded shadow z-20">
//                 {languages.map((lang) => (
//                   <button
//                     key={lang.code}
//                     className="block w-full px-4 py-2 text-left hover:bg-gray-100"
//                   >
//                     {lang.name}
//                   </button>
//                 ))}
//               </div>
//             )}
//           </div>
//         </div>
//       </div>

//       {/* MAIN HEADER */}
//       <div className="max-w-[1440px] mx-auto px-6 py-4 flex justify-between items-center">
//         {/* LOGO */}
//         <div className="flex items-center gap-3">
//           <img src={Logo} alt="Logo" className="w-12 h-12" />
//           <h1 className="text-sm leading-snug max-w-md">
//             Qurilishda texnik me'yorlash va standartlashtirish ilmiy-tadqiqot instituti
//           </h1>
//         </div>

//         {/* ICONS */}
//         <div className="flex items-center gap-6">
//           <img src={GT} alt="" className="cursor-pointer" />
//           <img src={GR} alt="" className="cursor-pointer" />

//           <div className="flex items-center gap-2 cursor-pointer">
//             <img src={US} alt="" />
//             <div className="text-xs">
//               <div>Kirish</div>
//               <div>Ro'yxatdan</div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* MENU BAR */}
//       <nav className="border-t border-blue-800">
//         <div className="max-w-[1440px] mx-auto px-6">
//           <ul className="flex gap-10 py-4 text-sm font-medium">
//             <li>
//               <NavLink
//                 to="/"
//                 className={({ isActive }) =>
//                   isActive
//                     ? 'text-blue-400 border-b-2 border-blue-400 pb-1'
//                     : 'hover:text-blue-300'
//                 }
//               >
//                 Materiallar
//               </NavLink>
//             </li>

//             <li>
//               <NavLink
//                 to="/mashina"
//                 className={({ isActive }) =>
//                   isActive
//                     ? 'text-blue-400 border-b-2 border-blue-400 pb-1'
//                     : 'hover:text-blue-300'
//                 }
//               >
//                 Mashina va mexanizmlar
//               </NavLink>
//             </li>

//             <li>
//               <NavLink
//                 to="/qurilish"
//                 className={({ isActive }) =>
//                   isActive
//                     ? 'text-blue-400 border-b-2 border-blue-400 pb-1'
//                     : 'hover:text-blue-300'
//                 }
//               >
//                 Qurilish ishlari
//               </NavLink>
//             </li>

//             <li>
//               <NavLink
//                 to="/normativ"
//                 className={({ isActive }) =>
//                   isActive
//                     ? 'text-blue-400 border-b-2 border-blue-400 pb-1'
//                     : 'hover:text-blue-300'
//                 }
//               >
//                 Normativ hujjatlar
//               </NavLink>
//             </li>

//             <li>
//               <NavLink
//                 to="/xizmatlar"
//                 className={({ isActive }) =>
//                   isActive
//                     ? 'text-blue-400 border-b-2 border-blue-400 pb-1'
//                     : 'hover:text-blue-300'
//                 }
//               >
//                 Xizmatlar
//               </NavLink>
//             </li>

//             <li>
//               <NavLink
//                 to="/aloqa"
//                 className={({ isActive }) =>
//                   isActive
//                     ? 'text-blue-400 border-b-2 border-blue-400 pb-1'
//                     : 'hover:text-blue-300'
//                 }
//               >
//                 Aloqa
//               </NavLink>
//             </li>
//           </ul>
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Header;



















import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import Logo from '../assets/img/Logo.png';
import GR from '../assets/img/GR.png';
import US from '../assets/img/US.png';
import GT from '../assets/img/GT.png';

interface Language {
  code: string;
  name: string;
}

const Header: React.FC = () => {
  const [isCityDropdownOpen, setIsCityDropdownOpen] = useState(false);
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // ← Yangi state

  const languages: Language[] = [
    { code: 'uz', name: 'UZ' },
    { code: 'ya', name: 'Ўз' },
    { code: 'ru', name: 'RU' },
    { code: 'en', name: 'EN' },
  ];

  const menuItems = [
    { to: '/', label: 'Materiallar' },
    { to: '/mashina', label: 'Mashina va mexanizmlar' },
    { to: '/qurilish', label: 'Qurilish ishlari' },
   
  ];

  return (
    <header className="bg-blue-900 text-white">
      {/* TOP BAR */}
      <div className="border-b border-blue-800">
        <div className="max-w-[1440px] mx-auto px-6 py-2 flex justify-between items-center text-sm">
          {/* CITY */}
          <div className="relative">
            <button
              onClick={() => setIsCityDropdownOpen(!isCityDropdownOpen)}
              className="flex items-center gap-1 hover:text-blue-300 transition"
            >
              Toshkent
              <svg
                className={`w-4 h-4 transition-transform ${isCityDropdownOpen ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {isCityDropdownOpen && (
              <div className="absolute mt-1 w-32 bg-white text-gray-800 rounded shadow z-20">
                <button className="block w-full px-4 py-2 text-left hover:bg-gray-100">Toshkent</button>
                <button className="block w-full px-4 py-2 text-left hover:bg-gray-100">Samarqand</button>
                <button className="block w-full px-4 py-2 text-left hover:bg-gray-100">Buxoro</button>
              </div>
            )}
          </div>

          {/* LANG */}
          <div className="relative">
            <button
              onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
              className="bg-blue-800 px-3 py-1 rounded flex items-center gap-1 hover:bg-blue-700"
            >
              uz
              <svg
                className={`w-4 h-4 transition-transform ${isLangDropdownOpen ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {isLangDropdownOpen && (
              <div className="absolute right-0 mt-1 w-20 bg-white text-gray-800 rounded shadow z-20">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    className="block w-full px-4 py-2 text-left hover:bg-gray-100"
                  >
                    {lang.name}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* MAIN HEADER */}
      <div className="max-w-[1440px] mx-auto px-6 py-4 flex justify-between items-center">
        {/* LOGO */}
        <div className="flex items-center gap-3">
          <img src={Logo} alt="Logo" className="w-12 h-12" />
          <h1 className="text-sm leading-snug max-w-md hidden md:block">
            Qurilishda texnik me'yorlash va standartlashtirish ilmiy-tadqiqot instituti
          </h1>
        </div>

        {/* ICONS */}
        <div className="flex items-center gap-6">
          <img src={GT} alt="" className="cursor-pointer" />
          <img src={GR} alt="" className="cursor-pointer" />

          <div className="flex items-center gap-2 cursor-pointer">
            <img src={US} alt="" />
            <div className="text-xs">
            
            </div>
          </div>
        </div>

        {/* HAMBURGER BUTTON (mobile only) */}
        <button
          className="md:hidden flex flex-col justify-center items-center"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="w-6 h-0.5 bg-white mb-1"></span>
          <span className="w-6 h-0.5 bg-white mb-1"></span>
          <span className="w-6 h-0.5 bg-white"></span>
        </button>
      </div>

      {/* MENU BAR */}
      <nav className="border-t border-blue-800">
        {/* Desktop Menu */}
        <div className="hidden md:block max-w-[1440px] mx-auto px-6">
          <ul className="flex gap-10 py-4 text-sm font-medium">
            {menuItems.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    isActive
                      ? 'text-blue-400 border-b-2 border-blue-400 pb-1'
                      : 'hover:text-blue-300'
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden px-6 py-4 bg-blue-900 border-t border-blue-800">
            <ul className="flex flex-col gap-4 text-sm font-medium">
              {menuItems.map((item) => (
                <li key={item.to}>
                  <NavLink
                    to={item.to}
                    className={({ isActive }) =>
                      isActive
                        ? 'text-blue-400'
                        : 'text-white hover:text-blue-300'
                    }
                    onClick={() => setIsMenuOpen(false)} // Close on click
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
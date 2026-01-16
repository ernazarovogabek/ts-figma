// Footer.tsx
import React from 'react';

const Footer: React.FC = () => {
  return (
    <div className="bg-blue-700">
    <footer className=" max-w-[1440px] mx-auto text-white py-10 px-6 ">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between gap-8">
        
        {/* Chap tomon — Logo va ma'lumot */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-900" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L2 7l10 5 10-5M2 12v5l10 5m0 0v-5m0 5l10-5M2 12l10 5z" />
              </svg>
            </div>
            <div>
              <h3 className="font-bold text-sm leading-tight">
                Qurilishda texnik me'yорlash va standartlashtirish ilmiy-tadqiqot instituti
              </h3>
            </div>
          </div>

          <p className="text-xs mt-2">
            Qurilish materiallari, mashina va mexanizmlari, ish turlari elektron portali
          </p>

          <div className="mt-4">
            <p className="text-xs font-medium mb-2">Bizni ijtimoiy tarmoqlarda kuzating:</p>
            <div className="flex space-x-4 text-xl">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://t.me" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300">
                <i className="fab fa-telegram-plane"></i>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300">
                <i className="fab fa-youtube"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>

          <p className="text-xs mt-4">All rights reserved © 2022</p>
        </div>

        {/* O'rta — Menu */}
        <div>
          <h4 className="font-bold text-sm mb-3">Menu</h4>
          <ul className="space-y-2 text-xs">
            <li><a href="#" className="hover:text-blue-300">Qurilish materiallari</a></li>
            <li><a href="#" className="hover:text-blue-300">Mashina mexanizmlar</a></li>
            <li><a href="#" className="hover:text-blue-300">Qurilish ishlari</a></li>
            <li><a href="#" className="hover:text-blue-300">Korxonalar</a></li>
            <li><a href="#" className="hover:text-blue-300">Klassifikator</a></li>
            <li><a href="#" className="hover:text-blue-300">Yangiliklar</a></li>
            <li><a href="#" className="hover:text-blue-300">Aloqa</a></li>
          </ul>
        </div>

        {/* O'ng tomon — Obuna bo'lish */}
        <div className="max-w-xs">
          <h4 className="font-bold text-sm mb-2">Yangiliklarga obuna bo'ling!</h4>
          <p className="text-xs mb-4">Tezkor yangiliklar e-mail orqali</p>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.currentTarget);
              const email = formData.get('email') as string;
              if (email && /\S+@\S+\.\S+/.test(email)) {
                console.log('Obuna bo\'ldingiz:', email);
                // Bu yerda API chaqiruv bo'lishi mumkin
              }
            }}
            className="space-y-2"
          >
            <input
              name="email"
              type="email"
              placeholder="Email kiritish"
              className="w-full px-4 py-2 border border-gray-300 rounded-md text-black text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md transition"
            >
              Obuna bo'lish
            </button>
          </form>
        </div>
      </div>
    </footer>
    </div>
  );
};

export default Footer;
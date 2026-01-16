// PopularProducts.tsx
import React from 'react';

interface Product {
  id: string;
  code: string;
  title: string;
}

const Popular: React.FC = () => {
  // Mock ma'lumotlar (rasmdagi ma'lumotlarga mos)
  const products: Product[] = [
    { id: '1', code: '#02.02.02.01-1000', title: 'Удаляемый герметизирующий компаунд для повторного сращивания кабеля' },
    { id: '2', code: '#02.02.02.01-1000', title: 'Изделия с армирующими материалами на основе стеклоткани, пришитыми к стеклоизоляционному слою марки' },
    { id: '3', code: '#02.02.02.01-1000', title: 'Удаляемый герметизирующий компаунд для повторного сращивания кабеля' },
    { id: '4', code: '#02.02.02.01-1000', title: 'Изделия с армирующими материалами на основе стеклоткани, пришитыми к стеклоизоляционному слою марки' },
    { id: '5', code: '#02.02.02.01-1000', title: 'Удаляемый герметизирующий компаунд для повторного сращивания кабеля' },
    { id: '6', code: '#02.02.02.01-1000', title: 'Изделия с армирующими материалами на основе стеклоткани, пришитыми к стеклоизоляционному слою марки' },
    { id: '7', code: '#02.02.02.01-1000', title: 'Удаляемый герметизирующий компаунд для повторного сращивания кабеля' },
    { id: '8', code: '#02.02.02.01-1000', title: 'Изделия с армирующими материалами на основе стеклоткани, пришитыми к стеклоизоляционному слою марки' },
    { id: '9', code: '#02.02.02.01-1000', title: 'Удаляемый герметизирующий компаунд для повторного сращивания кабеля' },
    { id: '10', code: '#02.02.02.01-1000', title: 'Изделия с армирующими материалами на основе стеклоткани, пришитыми к стеклоизоляционному слою марки' },
    { id: '11', code: '#02.02.02.01-1000', title: 'Удаляемый герметизирующий компаунд для повторного сращивания кабеля' },
    { id: '12', code: '#02.02.02.01-1000', title: 'Изделия с армирующими материалами на основе стеклоткани, пришитыми к стеклоизоляционному слою марки' },
    { id: '13', code: '#02.02.02.01-1000', title: 'Удаляемый герметизирующий компаунд для повторного сращивания кабеля' },
    { id: '14', code: '#02.02.02.01-1000', title: 'Изделия с армирующими материалами на основе стеклоткани, пришитыми к стеклоизоляционному слою марки' },
    { id: '15', code: '#02.02.02.01-1000', title: 'Удаляемый герметизирующий компаунд для повторного сращивания кабеля' },
    { id: '16', code: '#02.02.02.01-1000', title: 'Изделия с армирующими материалами на основе стеклоткани, пришитыми к стеклоизоляционному слою марки' },
    { id: '17', code: '#02.02.02.01-1000', title: 'Удаляемый герметизирующий компаунд для повторного сращивания кабеля' },
    { id: '18', code: '#02.02.02.01-1000', title: 'Изделия с армирующими материалами на основе стеклоткани, пришитыми к стеклоизоляционному слою марки' },
  ];

  return (
    <div className="bg-gray-50">
    <div className=" max-w-[1440px] mx-auto p-6 rounded-lg shadow-sm">
      {/* Sarlavha */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-blue-800">KO’P KO’RILGANLAR</h2>
        <div className="flex space-x-2 text-gray-600">
          <button className="p-2 bg-blue-100 rounded hover:bg-blue-200 transition">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
            </svg>
          </button>
          <button className="p-2 bg-blue-100 rounded hover:bg-blue-200 transition">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
            </svg>
          </button>
          <button className="p-2 bg-blue-100 rounded hover:bg-blue-200 transition">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 1112 0m-6-8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m4 4h3m5 4a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mahsulotlar ro'yxati */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="flex items-start justify-between p-3 bg-white rounded-md shadow-sm border border-gray-200 hover:border-blue-300 transition cursor-pointer"
          >
            <div className="flex-1">
              <span className="block text-xs text-gray-500 mb-1">{product.code}</span>
              <p className="text-sm text-gray-800 leading-tight">{product.title}</p>
            </div>
            <div className="ml-2 flex-shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-gray-400 hover:text-blue-600 transition"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </div>
          </div>
        ))}
      </div>

      {/* Quyi tugma */}
      <div className="mt-6 text-center">
        <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
          Barcha mahsulotlarni ko'rish
        </button>
      </div>
    </div>
    </div>
  );
};

export default Popular;
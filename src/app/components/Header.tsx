'use client';

import { useState } from 'react';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 shadow-sm">
      <nav className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <a href="#" className="text-2xl font-bold text-[#3D405B]">
            🎣 Pesca BSB
          </a>
          <div className="hidden md:flex space-x-8">
            <a 
              href="#lago-paranoa" 
              className="nav-link text-[#3D405B] hover:text-[#E07A5F]"
              onClick={(e) => handleSmoothScroll(e, '#lago-paranoa')}
            >
              Lago Paranoá
            </a>
            <a 
              href="#pesque-pagues" 
              className="nav-link text-[#3D405B] hover:text-[#E07A5F]"
              onClick={(e) => handleSmoothScroll(e, '#pesque-pagues')}
            >
              Pesque-Pagues
            </a>
            <a 
              href="#peixes-iscas" 
              className="nav-link text-[#3D405B] hover:text-[#E07A5F]"
              onClick={(e) => handleSmoothScroll(e, '#peixes-iscas')}
            >
              Peixes & Iscas
            </a>
            <a 
              href="#legislacao" 
              className="nav-link text-[#3D405B] hover:text-[#E07A5F]"
              onClick={(e) => handleSmoothScroll(e, '#legislacao')}
            >
              Legislação
            </a>
            <a 
              href="#roteiro" 
              className="nav-link text-[#3D405B] hover:text-[#E07A5F]"
              onClick={(e) => handleSmoothScroll(e, '#roteiro')}
            >
              Roteiro do Pescador
            </a>
          </div>
          <button 
            className="md:hidden text-[#3D405B] focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden mt-4">
            <a 
              href="#lago-paranoa" 
              className="block py-2 px-4 text-sm nav-link text-[#3D405B]"
              onClick={(e) => handleSmoothScroll(e, '#lago-paranoa')}
            >
              Lago Paranoá
            </a>
            <a 
              href="#pesque-pagues" 
              className="block py-2 px-4 text-sm nav-link text-[#3D405B]"
              onClick={(e) => handleSmoothScroll(e, '#pesque-pagues')}
            >
              Pesque-Pagues
            </a>
            <a 
              href="#peixes-iscas" 
              className="block py-2 px-4 text-sm nav-link text-[#3D405B]"
              onClick={(e) => handleSmoothScroll(e, '#peixes-iscas')}
            >
              Peixes & Iscas
            </a>
            <a 
              href="#legislacao" 
              className="block py-2 px-4 text-sm nav-link text-[#3D405B]"
              onClick={(e) => handleSmoothScroll(e, '#legislacao')}
            >
              Legislação
            </a>
            <a 
              href="#roteiro" 
              className="block py-2 px-4 text-sm nav-link text-[#3D405B]"
              onClick={(e) => handleSmoothScroll(e, '#roteiro')}
            >
              Roteiro do Pescador
            </a>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;

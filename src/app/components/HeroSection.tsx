import LocalSelectionModal from './LocalSelectionModal';
import { useState } from 'react';

const HeroSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="py-16 sm:py-20 text-center bg-[#F4F1DE]">
      <div className="container mx-auto px-4 sm:px-6">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-[#3D405B] mb-4">
          Guia Interativo da Pesca em Brasília
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-[#3D405B]/80 max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
          Sua jornada de pesca começa aqui. Descubra os melhores locais, as técnicas certas e tudo o que você precisa para uma pescaria de sucesso no coração do Brasil.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 px-4 mb-6">
          <a 
            href="#lago-paranoa" 
            className="bg-[#81B29A] hover:bg-[#81B29A]/90 text-white font-bold py-3 px-6 sm:px-8 rounded-full transition-all duration-300 transform hover:scale-105"
            onClick={(e) => handleSmoothScroll(e, '#lago-paranoa')}
          >
            Explorar o Lago Paranoá
          </a>
          <a 
            href="#pesque-pagues" 
            className="bg-[#F2CC8F] hover:bg-[#F2CC8F]/90 text-[#3D405B] font-bold py-3 px-6 sm:px-8 rounded-full transition-all duration-300 transform hover:scale-105"
            onClick={(e) => handleSmoothScroll(e, '#pesque-pagues')}
          >
            Conhecer os Pesque-Pagues
          </a>
        </div>
        
        <div className="flex justify-center">
          <button
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center justify-center font-semibold rounded-full transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 border-2 border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-white focus:ring-[#25D366] px-8 py-3 text-base"
          >
            <svg 
              className="w-4 h-4 mr-2" 
              fill="currentColor" 
              viewBox="0 0 24 24"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488"/>
            </svg>
            Escolher lugar de pesca
          </button>
        </div>
      </div>
      
      <LocalSelectionModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
};

export default HeroSection;

'use client';

import { useState } from 'react';
import WhatsAppCTA from './WhatsAppCTA';

interface RoteiroStep {
  step: number;
  title: string;
  subtitle: string;
  details: string;
}

const RoteiroSection = () => {
  const [activeStep, setActiveStep] = useState(1);

  const roteiro: RoteiroStep[] = [
    {
      step: 1,
      title: 'Primeira Experiência',
      subtitle: 'Foco em Captura e Diversão',
      details: 'Inicie no <strong>Centro de Lazer Flamboyant</strong>. O ambiente é acolhedor, ideal para famílias, e a alta probabilidade de capturar Tilápias garante uma experiência positiva para aprender os fundamentos sem frustração. Não precisa de licença.'
    },
    {
      step: 2,
      title: 'Buscando o Troféu',
      subtitle: 'Foco em Emoção e Peixes Grandes',
      details: 'Com a confiança adquirida, o próximo desafio é o <strong>Rancho Palhoça</strong>. O objetivo aqui é testar suas habilidades contra peixes de grande porte, como Tambacus e Pirararas, vivenciando a emoção de uma briga mais intensa.'
    },
    {
      step: 3,
      title: 'A Conquista do Lago',
      subtitle: 'Foco em Pesca de Barranco',
      details: 'Após obter a <strong>Licença RGP</strong>, você está pronto para o Lago Paranoá. Comece pelos pontos de fácil acesso como o <strong>Deck Sul</strong> e a <strong>Ponte JK</strong>. Foque em Tilápias e Carpas com iscas naturais, que exigem mais paciência e leitura da água.'
    },
    {
      step: 4,
      title: 'Nível Avançado',
      subtitle: 'Foco em Pesca Esportiva Embarcada',
      details: 'O ápice da jornada é a pesca embarcada. Alugue um caiaque para explorar as estruturas da <strong>Ponte JK</strong> e da <strong>Ermida Dom Bosco</strong> com iscas artificiais. O alvo aqui é o peixe mais esportivo do lago: o Tucunaré.'
    }
  ];

  const currentStep = roteiro.find(step => step.step === activeStep);

  return (
    <section id="roteiro" className="py-12 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#3D405B] mb-4">
            Sua Jornada de Pescador
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#3D405B]/70 max-w-2xl mx-auto px-4">
            Siga nosso roteiro sugerido para evoluir na pesca em Brasília, desde seus primeiros arremessos até a captura do seu grande troféu.
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row justify-center items-start gap-6 lg:gap-8">
          <div className="flex flex-row lg:flex-col justify-around lg:justify-start w-full lg:w-1/4 mb-6 lg:mb-0 gap-2 lg:gap-4">
            {roteiro.map((item) => (
              <button
                key={item.step}
                onClick={() => setActiveStep(item.step)}
                className={`step text-left lg:text-center p-3 lg:p-4 rounded-lg cursor-pointer border border-gray-200 transition-all duration-300 flex-1 lg:flex-none ${
                  activeStep === item.step 
                    ? 'bg-[#81B29A] text-white border-[#81B29A]' 
                    : 'bg-white text-[#3D405B] hover:bg-gray-50'
                }`}
              >
                <span className="font-bold text-sm lg:text-base">
                  Passo {item.step}:
                </span>
                <span className="hidden lg:inline"> {item.title}</span>
              </button>
            ))}
          </div>
          
          {currentStep && (
            <div className="w-full lg:w-3/4 bg-white p-6 sm:p-8 rounded-lg shadow-lg">
              <span className="inline-block bg-[#F2CC8F] text-[#3D405B] text-sm font-bold px-3 py-1 rounded-full mb-4">
                {currentStep.subtitle}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-[#3D405B] mb-4">
                {currentStep.title}
              </h3>
              <div 
                className="text-[#3D405B]/80 leading-relaxed mb-6"
                dangerouslySetInnerHTML={{ __html: currentStep.details }}
              />
              <WhatsAppCTA 
                local={`orientações para ${currentStep.title.toLowerCase()}`}
                tipoLocal="local"
                variant="secondary"
                size="md"
                className="w-full sm:w-auto"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default RoteiroSection;

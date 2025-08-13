'use client';

import { useState } from 'react';

interface BaitRecommendation {
  name: string;
  details: string;
}

interface FishData {
  title: string;
  description: string;
  recommendations: BaitRecommendation[];
}

const PeixesIscasSection = () => {
  const [selectedFish, setSelectedFish] = useState<'tucunare' | 'tilapia' | 'carpa' | 'traira'>('tucunare');

  const fishData: Record<string, FishData> = {
    tucunare: {
      title: 'Estratégia para Tucunaré (Predador)',
      description: 'O objetivo é imitar uma presa em fuga ou se debatendo. Ataques explosivos são comuns.',
      recommendations: [
        { name: 'Iscas de Superfície (Plugs)', details: 'Como Zaras e Poppers. Proporcionam ataques visuais emocionantes.' },
        { name: 'Iscas de Meia-Água', details: 'Trabalho errático para simular um peixe ferido. Muito eficazes.' },
        { name: 'Spinners', details: 'Extremamente versáteis, atraem peixes pela vibração e brilho.' }
      ]
    },
    tilapia: {
      title: 'Estratégia para Tilápia (Onívoro)',
      description: 'A atração é pelo olfato e paladar. A pesca de espera com iscas naturais é muito produtiva.',
      recommendations: [
        { name: 'Milho Verde', details: 'Um clássico que nunca falha. Pode ser usado diretamente no anzol.' },
        { name: 'Massa de Pesca', details: 'Receitas prontas ou caseiras são excelentes para atrair Tilápias.' },
        { name: 'Camarão', details: 'Especialmente eficaz para a pesca noturna, seja vivo ou morto.' },
        { name: 'Spinners Pequenos', details: 'Para uma abordagem mais ativa, imitando pequenos insetos ou alevinos.'}
      ]
    },
    carpa: {
      title: 'Estratégia para Carpa (Onívoro)',
      description: 'Exige paciência e iscas específicas. A pesca de fundo com massas é a técnica predominante.',
      recommendations: [
        { name: 'Massas Específicas', details: 'Massas doces, com amendoim ou outras essências são as mais recomendadas.' },
        { name: 'Milho Azedo', details: 'Deixar o milho fermentar por alguns dias cria um atrativo poderoso.' },
        { name: 'Pesca de Fundo (Chuveirinho)', details: 'Técnica que usa uma mola com massa e vários anzóis escondidos.' }
      ]
    },
    traira: {
      title: 'Estratégia para Traíra (Predador)',
      description: 'Busca-se a Traíra perto de estruturas e vegetação. Seus ataques são agressivos e rápidos.',
      recommendations: [
        { name: 'Iscas Soft (Frogs)', details: 'Imitando sapos, são perfeitas para trabalhar sobre a vegetação aquática.' },
        { name: 'Spinners e Spinnerbaits', details: 'A vibração e o brilho são irresistíveis para a Traíra.' },
        { name: 'Iscas Naturais', details: 'Pequenos peixes (lambaris) ou pedaços de peixe como isca viva.' }
      ]
    }
  };

  const currentData = fishData[selectedFish];

  return (
    <section id="peixes-iscas" className="py-12 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#3D405B] mb-4">
            Peixes & Iscas: O Arsenal Correto
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#3D405B]/70 max-w-2xl mx-auto px-4">
            A escolha da isca é um dos fatores mais críticos para o sucesso. Selecione o peixe que você quer capturar e veja as iscas mais eficazes.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="mb-6">
            <label htmlFor="fish-select" className="block text-lg font-medium text-[#3D405B] mb-2">
              Qual peixe você quer pescar?
            </label>
            <select 
              id="fish-select"
              value={selectedFish}
              onChange={(e) => setSelectedFish(e.target.value as 'tucunare' | 'tilapia' | 'carpa' | 'traira')}
              className="w-full p-3 border border-gray-300 rounded-lg bg-white shadow-sm focus:ring-2 focus:ring-[#81B29A] focus:border-[#81B29A] text-[#3D405B]"
            >
              <option value="tucunare">Tucunaré</option>
              <option value="tilapia">Tilápia</option>
              <option value="carpa">Carpa</option>
              <option value="traira">Traíra</option>
            </select>
          </div>
          
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md">
            <h3 className="font-bold text-lg sm:text-xl mb-2 text-[#81B29A]">
              {currentData.title}
            </h3>
            <p className="text-[#3D405B]/70 mb-4 leading-relaxed">
              {currentData.description}
            </p>
            <div className="space-y-3">
              {currentData.recommendations.map((rec, index) => (
                <div key={index} className="border-l-4 border-[#81B29A] pl-4">
                  <h4 className="font-semibold text-[#3D405B] mb-1">
                    {rec.name}
                  </h4>
                  <p className="text-sm text-[#3D405B]/70 leading-relaxed">
                    {rec.details}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PeixesIscasSection;

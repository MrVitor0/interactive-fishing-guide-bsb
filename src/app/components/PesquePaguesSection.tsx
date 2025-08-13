'use client';

import { useState } from 'react';
import WhatsAppCTA from './WhatsAppCTA';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

interface PesquePagueData {
  name: string;
  profile: string;
  description: string;
  pros: string;
  cons: string;
  scores: {
    lazer: number;
    trofeu: number;
    custoBeneficio: number;
  };
}

const PesquePaguesSection = () => {
  const [activeProfile, setActiveProfile] = useState<'iniciante' | 'familia' | 'trofeu'>('iniciante');

  const pesquePaguesData: Record<string, PesquePagueData> = {
    iniciante: {
      name: 'Centro de Lazer Flamboyant',
      profile: 'Refúgio para Iniciantes e Famílias',
      description: 'Consistentemente descrito como um local tranquilo, bem cuidado e acolhedor. Representa o ponto de partida perfeito, oferecendo um ambiente controlado e alta probabilidade de captura (mesmo que de peixes menores).',
      pros: 'Ideal para iniciantes, alta chance de sucesso, ambiente familiar.',
      cons: 'Menos opções de peixes de grande porte.',
      scores: { lazer: 7, trofeu: 3, custoBeneficio: 8 }
    },
    familia: {
      name: 'Pesque Pague Taguatinga',
      profile: 'Gigante de Lazer Familiar',
      description: 'Um dos maiores e mais antigos da capital, se posiciona como um grande complexo de lazer com piscinas e restaurante. É a escolha ideal para um dia em família, onde a pesca é uma das várias atividades.',
      pros: 'Excelente estrutura de lazer para toda a família.',
      cons: 'Relatos mistos sobre a produtividade da pesca; preços considerados altos por alguns.',
      scores: { lazer: 9, trofeu: 5, custoBeneficio: 5 }
    },
    trofeu: {
      name: 'Rancho Palhoça',
      profile: 'Point dos Peixes de Troféu',
      description: 'Sua reputação é solidamente construída sobre a promessa de peixes grandes, com relatos de Pirararas e Tambacus de até 45kg. É o destino para quem busca a emoção de brigar com um peixe gigante.',
      pros: 'Alta chance de capturar peixes de grande porte (&ldquo;troféus&rdquo;).',
      cons: 'Menos opções de lazer para não-pescadores.',
      scores: { lazer: 4, trofeu: 10, custoBeneficio: 7 }
    }
  };

  const currentData = pesquePaguesData[activeProfile];

  const chartData = {
    labels: ['Lazer Familiar', 'Potencial de Troféu', 'Custo-Benefício'],
    datasets: [
      {
        label: 'Pontuação do Perfil',
        data: Object.values(currentData.scores),
        backgroundColor: 'rgba(129, 178, 154, 0.2)',
        borderColor: 'rgba(129, 178, 154, 1)',
        borderWidth: 2,
        pointBackgroundColor: 'rgba(129, 178, 154, 1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(129, 178, 154, 1)'
      }
    ]
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      r: {
        angleLines: {
          color: 'rgba(61, 64, 91, 0.2)'
        },
        grid: {
          color: 'rgba(61, 64, 91, 0.2)'
        },
        pointLabels: {
          font: {
            size: 12
          },
          color: '#3D405B'
        },
        suggestedMin: 0,
        suggestedMax: 10,
        ticks: {
          stepSize: 2,
          backdropColor: 'rgba(253, 251, 248, 0.75)'
        }
      }
    },
    plugins: {
      legend: {
        display: false
      }
    }
  };

  return (
    <section id="pesque-pagues" className="py-12 sm:py-16 bg-[#F4F1DE]">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#3D405B] mb-4">
            Sucesso Garantido nos Pesque-Pagues
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#3D405B]/70 max-w-2xl mx-auto px-4">
            Para um dia de lazer, aprendizado ou para garantir o peixe do almoço, os pesque-pagues são a escolha ideal. Selecione seu perfil e encontre o local perfeito para você.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <button
            onClick={() => setActiveProfile('iniciante')}
            className={`font-semibold py-2 px-4 sm:px-6 rounded-full transition-all duration-300 ${
              activeProfile === 'iniciante'
                ? 'bg-[#81B29A] text-white'
                : 'bg-white text-[#3D405B] border border-gray-300'
            }`}
          >
            Sou Iniciante
          </button>
          <button
            onClick={() => setActiveProfile('familia')}
            className={`font-semibold py-2 px-4 sm:px-6 rounded-full transition-all duration-300 ${
              activeProfile === 'familia'
                ? 'bg-[#81B29A] text-white'
                : 'bg-white text-[#3D405B] border border-gray-300'
            }`}
          >
            Lazer em Família
          </button>
          <button
            onClick={() => setActiveProfile('trofeu')}
            className={`font-semibold py-2 px-4 sm:px-6 rounded-full transition-all duration-300 ${
              activeProfile === 'trofeu'
                ? 'bg-[#81B29A] text-white'
                : 'bg-white text-[#3D405B] border border-gray-300'
            }`}
          >
            Busco Troféus
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="order-2 lg:order-1">
            <h3 className="text-xl sm:text-2xl font-bold text-[#3D405B] mb-2">
              {currentData.name}
            </h3>
            <p className="text-[#81B29A] font-semibold mb-4">
              {currentData.profile}
            </p>
            <p className="text-[#3D405B]/80 mb-4 leading-relaxed">
              {currentData.description}
            </p>
            <div className="space-y-2 mb-6">
              <p>
                <span className="font-bold text-green-600">Prós:</span> {currentData.pros}
              </p>
              <p>
                <span className="font-bold text-red-600">Contras:</span> {currentData.cons}
              </p>
            </div>
            
            <WhatsAppCTA 
              local={currentData.name}
              tipoLocal="pesque-pague"
              variant="primary"
              size="md"
              className="w-full sm:w-auto"
            />
          </div>
          
          <div className="order-1 lg:order-2 w-full max-w-md mx-auto">
            <div className="relative w-full h-64 sm:h-80">
              <Radar data={chartData} options={chartOptions} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PesquePaguesSection;

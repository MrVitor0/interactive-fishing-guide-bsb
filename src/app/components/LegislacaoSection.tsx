const LegislacaoSection = () => {
  return (
    <section id="legislacao" className="py-12 sm:py-16 bg-[#F4F1DE]">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#3D405B] mb-4">
            Pesque Dentro da Lei
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#3D405B]/70 max-w-2xl mx-auto px-4">
            A pesca amadora é uma atividade regulamentada. Evite multas e contribua para a sustentabilidade do esporte conhecendo as regras básicas.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md border-l-4 border-[#E07A5F]">
            <h3 className="font-bold text-lg sm:text-xl mb-3 text-[#3D405B]">
              Preciso de Licença?
            </h3>
            <p className="text-[#3D405B]/80 mb-2">
              <strong>No Lago Paranoá:</strong> <span className="text-red-600 font-bold">SIM</span>. É obrigatória a Licença de Pescador Amador (RGP).
            </p>
            <p className="text-[#3D405B]/80">
              <strong>Em Pesque-Pagues:</strong> <span className="text-green-600 font-bold">NÃO</span>. Por serem estabelecimentos privados, a licença não é necessária.
            </p>
          </div>
          
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md border-l-4 border-[#81B29A]">
            <h3 className="font-bold text-lg sm:text-xl mb-3 text-[#3D405B]">
              Licença RGP (Lago Paranoá)
            </h3>
            <p className="text-[#3D405B]/80 mb-2">
              Emitida pelo Governo Federal, válida por 1 ano em todo o país.
            </p>
            <ul className="list-disc list-inside text-[#3D405B]/80 space-y-1 mb-4">
              <li><strong>Desembarcada:</strong> R$ 20,00/ano</li>
              <li><strong>Embarcada:</strong> R$ 60,00/ano</li>
            </ul>
            <a 
              href="https://www.gov.br/mpa/pt-br/assuntos/pesca/pesca-amadora-ou-esportiva-1" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block mt-2 text-[#81B29A] font-bold hover:underline transition-colors duration-300"
            >
              Obter Licença →
            </a>
          </div>
          
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md border-l-4 border-[#F2CC8F] md:col-span-2 lg:col-span-1">
            <h3 className="font-bold text-lg sm:text-xl mb-3 text-[#3D405B]">
              Nova Lei do Lago (2024)
            </h3>
            <p className="text-[#3D405B]/80 leading-relaxed">
              A Lei nº 7.399/2024 reforça a fiscalização e a necessidade da licença. O lago agora é um &ldquo;recurso gerenciado&rdquo;, promovendo a pesca sustentável e o pesque e solte.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LegislacaoSection;

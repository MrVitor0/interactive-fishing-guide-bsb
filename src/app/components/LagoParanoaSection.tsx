import WhatsAppCTA from './WhatsAppCTA';

const LagoParanoaSection = () => {
  const hotspots = [
    {
      id: 'ponte-jk',
      name: 'Ponte JK e Proximidades',
      description: 'Considerado um "hotspot" clássico e um dos pontos mais produtivos. A estrutura da ponte atrai cardumes e a presença constante de pescadores confirma sua fama.',
      fish: ['Tucunaré', 'Tilápia', 'Traíra'],
      tip: 'A pesca de camarão na área pode fornecer iscas vivas extremamente eficazes.',
      horarios: {
        manha: '05:30 - 09:00',
        tarde: '16:30 - 19:00',
        justificativa: 'Períodos de transição de luz são ideais para predadores como Tucunaré e Traíra.'
      }
    },
    {
      id: 'ermida',
      name: 'Ermida Dom Bosco',
      description: 'Esta área é famosa pela grande concentração de estruturas rochosas submersas, que servem de abrigo para muitos peixes, especialmente Tucunarés.',
      fish: ['Tucunaré', 'Tilápia'],
      tip: 'Explore bem as margens. A paciência para encontrar o ponto certo entre as pedras é recompensada.',
      horarios: {
        manha: '05:30 - 09:00',
        tarde: '16:30 - Pôr do sol',
        justificativa: 'Tucunarés patrulham as estruturas rochosas nos picos de atividade matinal e vespertino.'
      }
    },
    {
      id: 'deck-sul',
      name: 'Deck Sul',
      description: 'Excelente ponto de partida pela fácil acessibilidade e infraestrutura. Ótimo para pescarias rápidas e para testar novos equipamentos.',
      fish: ['Tilápia'],
      tip: 'Relatos indicam sucesso na captura de Tilápias grandes com iscas artificiais, como spinners pequenos.',
      horarios: {
        manha: '09:00 - 15:00',
        tarde: 'A partir das 16:00',
        justificativa: 'Tilápias preferem águas mais quentes. Sol alto acelera seu metabolismo e atividade alimentar.'
      }
    },
    {
      id: 'ponte-garcas',
      name: 'Ponte das Garças',
      description: 'Este ponto se destaca como um local preferencial para a pesca noturna, oferecendo uma alternativa para quem não pode pescar durante o dia.',
      fish: ['Tilápia', 'Carpa'],
      tip: 'O camarão é a isca mais citada para o sucesso nas pescarias noturnas neste local.',
      horarios: {
        noite: 'A partir das 19:00',
        justificativa: 'Único local com indicação explícita para pesca noturna. Ideal para Carpas de hábitos noturnos.'
      }
    },
    {
      id: 'orla-sul',
      name: 'Orla do Lago Sul',
      description: 'De forma geral, a orla do Lago Sul é um "lugar top para pescaria de tilápia". A exploração de seus vários deques e píeres públicos pode render boas capturas.',
      fish: ['Tilápia', 'Carpa'],
      tip: 'Não se prenda a um único ponto. Caminhe pela orla e teste diferentes locais.',
      horarios: {
        manha: '06:00 - 10:00',
        tarde: 'A partir das 17:00',
        justificativa: 'Combina atividade dos peixes com menor movimentação de pessoas na orla.'
      }
    }
  ];

  return (
    <section id="lago-paranoa" className="py-12 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#3D405B] mb-4">
            Aventura no Lago Paranoá
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#3D405B]/70 max-w-2xl mx-auto px-4">
            O Lago Paranoá oferece o desafio e a emoção da pesca esportiva em um cenário urbano único. O sucesso aqui depende de técnica, conhecimento dos pontos certos e principalmente do <strong>timing perfeito</strong>. Explore os hotspots mais famosos com os melhores horários para cada local!
          </p>
        </div>

        {/* Dicas Gerais de Horários */}
        <div className="mb-8 sm:mb-12">
          <div className="bg-gradient-to-r from-[#81B29A]/10 to-[#F2CC8F]/10 p-4 sm:p-6 rounded-lg border-l-4 border-[#81B29A] max-w-4xl mx-auto">
            <h3 className="font-bold text-lg text-[#3D405B] mb-3 flex items-center">
              ⏰ Regra de Ouro dos Horários
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div className="text-center">
                <div className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full font-semibold mb-2">
                  🌅 Amanhecer
                </div>
                <p className="text-[#3D405B]/70">
                  <strong>05:30 - 09:00</strong><br/>
                  Ideal para predadores (Tucunaré, Traíra)
                </p>
              </div>
              <div className="text-center">
                <div className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full font-semibold mb-2">
                  ☀️ Meio-dia
                </div>
                <p className="text-[#3D405B]/70">
                  <strong>09:00 - 15:00</strong><br/>
                  Perfeito para Tilápias (águas quentes)
                </p>
              </div>
              <div className="text-center">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full font-semibold mb-2">
                  🌅 Entardecer
                </div>
                <p className="text-[#3D405B]/70">
                  <strong>16:30 - 19:00+</strong><br/>
                  Excelente para todas as espécies
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {hotspots.map((spot) => (
            <div 
              key={spot.id} 
              className="hotspot-card bg-white p-4 sm:p-6 rounded-lg shadow-md cursor-pointer border-l-4 border-[#81B29A] hover:shadow-lg transition-all duration-300"
            >
              <h3 className="font-bold text-lg sm:text-xl mb-2 text-[#3D405B]">
                {spot.name}
              </h3>
              <p className="text-[#3D405B]/70 text-sm mb-4 leading-relaxed">
                {spot.description}
              </p>
              
              {/* Seção de Horários */}
              <div className="mb-4 p-3 bg-[#F4F1DE] rounded-lg">
                <h4 className="font-semibold text-sm mb-2 text-[#E07A5F] flex items-center">
                  🕐 Melhores Horários:
                </h4>
                <div className="space-y-1">
                  {spot.horarios.manha && (
                    <p className="text-xs text-[#3D405B]">
                      <span className="font-medium">Manhã:</span> {spot.horarios.manha}
                    </p>
                  )}
                  {spot.horarios.tarde && (
                    <p className="text-xs text-[#3D405B]">
                      <span className="font-medium">Tarde:</span> {spot.horarios.tarde}
                    </p>
                  )}
                  {spot.horarios.noite && (
                    <p className="text-xs text-[#3D405B]">
                      <span className="font-medium">Noite:</span> {spot.horarios.noite}
                    </p>
                  )}
                </div>
                <p className="text-xs text-[#3D405B]/60 mt-2 italic">
                  {spot.horarios.justificativa}
                </p>
              </div>

              <div className="mb-4">
                <h4 className="font-semibold text-sm mb-2 text-[#3D405B]">
                  Peixes Comuns:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {spot.fish.map((fish) => (
                    <span 
                      key={fish}
                      className="bg-[#81B29A]/20 text-[#3D405B] text-xs font-semibold px-2 py-1 rounded-full"
                    >
                      {fish}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-sm mb-2 text-[#E07A5F]">
                  💡 Dica do Mestre:
                </h4>
                <p className="text-[#3D405B]/70 text-sm italic leading-relaxed mb-4">
                  &ldquo;{spot.tip}&rdquo;
                </p>
                <WhatsAppCTA 
                  local={spot.name}
                  tipoLocal="lago"
                  variant="secondary"
                  size="sm"
                  className="w-full"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LagoParanoaSection;

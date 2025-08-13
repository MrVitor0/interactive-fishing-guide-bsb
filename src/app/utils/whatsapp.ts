export const generateWhatsAppLink = (local: string, tipoLocal: string = 'local') => {
  const phoneNumber = '5521973362782'; // Formato internacional
  
  let message = '';
  
  if (tipoLocal === 'lago') {
    message = `Olá! 🎣 Gostaria de saber mais sobre a pesca no *${local}* do Lago Paranoá. Podem me ajudar com dicas específicas de horários, iscas e técnicas para este local? Vi no guia que é um ótimo ponto para pescar!`;
  } else if (tipoLocal === 'pesque-pague') {
    message = `Olá! 🎣 Tenho interesse em visitar o *${local}*. Gostaria de saber sobre valores, horários de funcionamento e dicas para ter uma boa pescaria. Podem me ajudar?`;
  } else {
    message = `Olá! 🎣 Vi no Guia Interativo de Pesca em Brasília e gostaria de saber mais sobre a pesca no *${local}*. Podem me ajudar com informações e dicas?`;
  }
  
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
};

export const openWhatsApp = (local: string, tipoLocal: string = 'local') => {
  const link = generateWhatsAppLink(local, tipoLocal);
  window.open(link, '_blank');
};

'use client';

import { useState } from 'react';
import { openWhatsApp } from '../utils/whatsapp';

interface LocalSelectionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LocalSelectionModal = ({ isOpen, onClose }: LocalSelectionModalProps) => {
  const [selectedLocal, setSelectedLocal] = useState('');
  const [tipoLocal, setTipoLocal] = useState<'lago' | 'pesque-pague'>('lago');

  const locaisLago = [
    'Ponte JK e Proximidades',
    'Ermida Dom Bosco',
    'Deck Sul',
    'Ponte das Garças',
    'Orla do Lago Sul'
  ];

  const locaisPesquePague = [
    'Centro de Lazer Flamboyant',
    'Pesque Pague Taguatinga',
    'Rancho Palhoça'
  ];

  const handleSubmit = () => {
    if (selectedLocal) {
      openWhatsApp(selectedLocal, tipoLocal);
      onClose();
      setSelectedLocal('');
    }
  };

  const handleClose = () => {
    onClose();
    setSelectedLocal('');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold text-[#3D405B]">
              Escolha seu Local de Pesca
            </h2>
            <button
              onClick={handleClose}
              className="text-gray-500 hover:text-gray-700 text-2xl"
            >
              ×
            </button>
          </div>

          <p className="text-[#3D405B]/70 mb-6">
            Selecione o tipo de local e depois o local específico para receber orientações personalizadas via WhatsApp.
          </p>

          {/* Seleção do tipo de local */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-[#3D405B] mb-3">
              Tipo de Local:
            </label>
            <div className="flex gap-3">
              <button
                onClick={() => {
                  setTipoLocal('lago');
                  setSelectedLocal('');
                }}
                className={`flex-1 py-2 px-4 rounded-lg border transition-colors ${
                  tipoLocal === 'lago'
                    ? 'bg-[#81B29A] text-white border-[#81B29A]'
                    : 'bg-white text-[#3D405B] border-gray-300 hover:border-[#81B29A]'
                }`}
              >
                🏞️ Lago Paranoá
              </button>
              <button
                onClick={() => {
                  setTipoLocal('pesque-pague');
                  setSelectedLocal('');
                }}
                className={`flex-1 py-2 px-4 rounded-lg border transition-colors ${
                  tipoLocal === 'pesque-pague'
                    ? 'bg-[#81B29A] text-white border-[#81B29A]'
                    : 'bg-white text-[#3D405B] border-gray-300 hover:border-[#81B29A]'
                }`}
              >
                🎣 Pesque-Pague
              </button>
            </div>
          </div>

          {/* Seleção do local específico */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-[#3D405B] mb-3">
              Local Específico:
            </label>
            <div className="space-y-2 max-h-64 overflow-y-auto">
              {(tipoLocal === 'lago' ? locaisLago : locaisPesquePague).map((local) => (
                <button
                  key={local}
                  onClick={() => setSelectedLocal(local)}
                  className={`w-full text-left p-3 rounded-lg border transition-colors ${
                    selectedLocal === local
                      ? 'bg-[#81B29A] text-white border-[#81B29A]'
                      : 'bg-white text-[#3D405B] border-gray-200 hover:border-[#81B29A] hover:bg-[#81B29A]/5'
                  }`}
                >
                  {local}
                </button>
              ))}
            </div>
          </div>

          {/* Preview da mensagem */}
          {selectedLocal && (
            <div className="mb-6 p-3 bg-[#F4F1DE] rounded-lg">
              <h4 className="font-semibold text-sm text-[#3D405B] mb-2">
                Preview da mensagem:
              </h4>
              <p className="text-xs text-[#3D405B]/70 italic">
                {tipoLocal === 'lago' ? (
                  `"Olá! 🎣 Gostaria de saber mais sobre a pesca no ${selectedLocal} do Lago Paranoá. Podem me ajudar com dicas específicas de horários, iscas e técnicas para este local?"`
                ) : (
                  `"Olá! 🎣 Tenho interesse em visitar o ${selectedLocal}. Gostaria de saber sobre valores, horários de funcionamento e dicas para ter uma boa pescaria."`
                )}
              </p>
            </div>
          )}

          {/* Botões de ação */}
          <div className="flex gap-3">
            <button
              onClick={handleClose}
              className="flex-1 py-2 px-4 border border-gray-300 rounded-lg text-[#3D405B] hover:bg-gray-50 transition-colors"
            >
              Cancelar
            </button>
            <button
              onClick={handleSubmit}
              disabled={!selectedLocal}
              className={`flex-1 py-2 px-4 rounded-lg transition-colors flex items-center justify-center gap-2 ${
                selectedLocal
                  ? 'bg-[#25D366] hover:bg-[#128C7E] text-white'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488"/>
              </svg>
              Enviar WhatsApp
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocalSelectionModal;

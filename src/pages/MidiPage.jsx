// src/pages/MidiPage.jsx
import React from 'react';
import { Music, MessageSquare, BatteryCharging } from 'lucide-react';
import ContentPage from './ContentPage';

const MidiPage = () => (
    <ContentPage title="Música MIDI (Musical Instrument Digital Interface)">
        <div className="space-y-10 max-w-5xl mx-auto">
            
            {/* Introdução e Definição */}
            <section className="bg-indigo-50 p-6 rounded-xl border-l-4 border-indigo-500 shadow-md">
                <h2 className="text-2xl font-bold text-indigo-800 mb-3 flex items-center gap-2">
                    <Music className="text-indigo-600" /> MIDI: A Partitura Digital
                </h2>
                <p className="text-lg text-slate-700">
                    MIDI não é uma forma de áudio gravado (como MP3 ou WAV). É um protocolo de comunicação — uma linguagem digital — que permite que instrumentos musicais eletrônicos, computadores e outros dispositivos se comuniquem e coordenem. Ele transmite instruções, e não o som em si.
                </p>
                <p className="mt-4 text-md text-slate-600 italic">
                    Pense no MIDI como uma partitura digital detalhada, enquanto o MP3 é a gravação final da música.
                </p>
            </section>

            {/* Como Funciona: Eventos MIDI */}
            <section className="space-y-6">
                <h2 className="text-2xl font-bold text-slate-800 border-b pb-2 mb-4 flex items-center gap-2">
                    <MessageSquare className="text-purple-600" /> O Princípio dos Eventos
                </h2>
                
                <p className="text-lg text-gray-700">
                    Os arquivos MIDI são uma sequência de Mensagens (ou Eventos) que descrevem o que deve acontecer musicalmente.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Evento 1: Note On/Off */}
                    <div className="p-4 bg-purple-100 rounded-lg border border-purple-300">
                        <h3 className="font-semibold text-purple-800">1. Note On / Note Off</h3>
                        <p className="text-sm text-gray-700 mt-1">
                            Define quando uma tecla é pressionada (Note On) e quando é solta (Note Off). Isso informa a nota musical e a sua duração.
                        </p>
                    </div>
                    {/* Evento 2: Velocity */}
                    <div className="p-4 bg-purple-100 rounded-lg border border-purple-300">
                        <h3 className="font-semibold text-purple-800">2. Velocity (Velocidade)</h3>
                        <p className="text-sm text-gray-700 mt-1">
                            Mede a força com que a tecla foi pressionada. Isso se traduz na intensidade (volume) do som, variando de 0 a 127.
                        </p>
                    </div>
                    {/* Evento 3: Instrumento/Patch */}
                    <div className="p-4 bg-purple-100 rounded-lg border border-purple-300">
                        <h3 className="font-semibold text-purple-800">3. Instrumento (Patch)</h3>
                        <p className="text-sm text-gray-700 mt-1">
                            Define qual timbre o som deve ter (Ex: piano, bateria, violino). O arquivo MIDI apenas indica o instrumento.
                        </p>
                    </div>
                </div>
            </section>

            {/* Visualização de Piano Roll (Mantida) */}
            <section>
                <div className="bg-slate-900 p-6 rounded-xl shadow-2xl">
                    <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                        <Music className="text-purple-400" /> Visualização de Piano Roll MIDI
                    </h3>
                    <div className="h-48 relative bg-slate-800 rounded border border-slate-700 overflow-hidden">
                        {/* Exemplo Visual de Notas MIDI (animação simples) */}
                        <div className="absolute top-4 h-6 bg-purple-500 rounded shadow-lg animate-pulse" style={{left: '10%', width: '15%'}}></div>
                        <div className="absolute top-12 h-6 bg-green-500 rounded shadow-lg animate-pulse" style={{left: '28%', width: '8%', animationDelay: '0.3s'}}></div>
                        <div className="absolute top-20 h-6 bg-blue-500 rounded shadow-lg animate-pulse" style={{left: '40%', width: '20%', animationDelay: '0.6s'}}></div>
                        <div className="absolute top-28 h-6 bg-yellow-500 rounded shadow-lg animate-pulse" style={{left: '65%', width: '12%', animationDelay: '0.9s'}}></div>
                    </div>
                    <p className="text-xs text-slate-400 mt-3 text-center">
                        Representação visual do "Piano Roll", onde cada barra colorida é um evento Note On/Off (uma nota musical).
                    </p>
                </div>
            </section>

            {/* Vantagens e Desvantagens */}
            <section>
                <h2 className="text-2xl font-bold text-slate-800 border-b pb-2 mb-4 flex items-center gap-2">
                    <BatteryCharging className="text-yellow-600" /> Vantagens em Sistemas Multimídia
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Vantagens */}
                    <div className="p-5 bg-green-50 rounded-lg border-l-4 border-green-400">
                        <h3 className="font-semibold text-green-800 mb-2">✅ Leveza e Tamanho</h3>
                        <p className="text-sm text-gray-700">
                            Arquivos MIDI são extremamente pequenos (geralmente KB), pois armazenam apenas dados de instrução, tornando-os ideais para sistemas com restrição de banda ou armazenamento.
                        </p>
                    </div>
                    {/* Limitações */}
                    <div className="p-5 bg-red-50 rounded-lg border-l-4 border-red-400">
                        <h3 className="font-semibold text-red-800 mb-2">❌ Dependência do Sintetizador</h3>
                        <p className="text-sm text-gray-700">
                            A qualidade e o timbre do áudio final dependem do sintetizador (ou *soundfont*) do sistema operacional ou do player. O som pode variar drasticamente de um dispositivo para outro.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    </ContentPage>
);

export default MidiPage;
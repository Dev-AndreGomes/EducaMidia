// src/pages/AudioPage.jsx
import React from 'react';
import { Volume2, Cpu, SlidersHorizontal, HardDrive, Waves, Speaker } from 'lucide-react';
import ContentPage from './ContentPage';
import localAudio from '../assets/aula.mp3'; 

// Componente auxiliar para caixas de conceito
const ConceptBox = ({ title, text, color }) => (
    <div className={`p-4 ${color} rounded-lg border-l-4 border-current shadow-sm`}>
        <h3 className={`font-semibold text-lg mb-1 text-slate-800`}>{title}</h3>
        <p className="text-sm text-gray-700">{text}</p>
    </div>
);

const AudioPage = () => ( 
    <ContentPage title="Áudio Digital e seus Pilares">
        <div className="space-y-10 max-w-5xl mx-auto">
 
            {/* 1. Player de Áudio (FIXO) */}
            <section>
                <div className="bg-gradient-to-r from-blue-100 to-cyan-100 p-6 rounded-xl border-2 border-blue-400 shadow-lg">
                    <h3 className="font-bold text-xl text-slate-800 mb-4 flex items-center gap-2">
                        <Volume2 className="text-blue-600" /> Player de Demonstração (Material Original: aula.mp3)
                    </h3>

                    {/* PLAYER FIXO USANDO localAudio */}
                    <audio controls className="w-full mb-3">
                        <source src={localAudio} type="audio/mpeg" />
                            Seu navegador não suporta o elemento de áudio.
                    </audio>
                    <p className="text-sm text-slate-500 italic text-center">
                        Áudio fixo: usado para demonstrar os conceitos de compressão e conversão.
                    </p>
                </div>
            </section>

            <hr className="border-gray-300" />
            
            {/* NOVO: 2. FUNDAMENTOS DO SOM */}
            <section className="space-y-6">
                <h2 className="text-3xl font-bold text-slate-800 border-b pb-2 mb-6 flex items-center gap-3">
                    <Waves className="text-pink-600" size={30} /> 1. Fundamentos Físicos do Som
                </h2>
                
                <p className="text-lg text-gray-700">
                    O som analógico é uma onda de pressão. Para entender sua digitalização, precisamos conhecer as duas características primárias de qualquer onda sonora: a frequência e a amplitude.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Frequência (Tom) */}
                    <ConceptBox 
                        title="Frequência (Tom/Pitch)" 
                        text="Determina o quão agudo ou grave o som é. É medida em Hertz (Hz). A audição humana vai de ~20 Hz (grave) a ~20,000 Hz (agudo)." 
                        color="bg-pink-100 border-pink-400"
                    />
                    
                    {/* Amplitude (Volume) */}
                    <ConceptBox 
                        title="Amplitude (Volume/Loudness)" 
                        text="Determina a intensidade ou volume do som. É medida em Decibéis (dB). No áudio digital, é mapeada para a Profundidade de Bits." 
                        color="bg-red-100 border-red-400"
                    />
                </div>
                
                <div className="my-4 text-center p-4 bg-gray-50 rounded-lg shadow-inner">
                    {/* Diagrama de Onda Sonora */}
                    

[Image of sine wave sampling]

                    <p className="text-sm italic text-gray-600 mt-2">
                        O eixo horizontal (Tempo) se relaciona com a Frequência. O eixo vertical (Amplitude) se relaciona com o Volume.
                    </p>
                </div>
            </section>

            <hr className="border-gray-300" />

            {/* 3. CONVERSÃO ANALÓGICO-DIGITAL (ADC) - EXPANDIDO */}
            <section className="space-y-6">
                <h2 className="text-3xl font-bold text-slate-800 border-b pb-2 mb-6 flex items-center gap-3">
                    <SlidersHorizontal className="text-indigo-600" size={30} /> 2. Conversão: Amostragem e Faixa Dinâmica
                </h2>
                
                <p className="text-lg text-gray-700">
                    A conversão de Analógico para Digital define os limites da qualidade sonora. Seus dois pilares (Taxa de Amostragem e Profundidade de Bits) definem a fidelidade da frequência e o nível de detalhe do volume.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Amostragem e Taxa */}
                    <ConceptBox 
                        title="Taxa de Amostragem (Sample Rate)" 
                        text="Frequência de 'fatiamento' da onda. Controla a faixa de frequências audíveis capturadas (Teorema de Nyquist: Sample Rate ≥ 2 x Frequência Máxima)." 
                        color="bg-purple-100 border-purple-400"
                    />
                    
                    {/* Profundidade de Bits + Faixa Dinâmica */}
                    <div className="p-4 bg-cyan-100 rounded-lg border-l-4 border-cyan-400 shadow-sm">
                        <h3 className={`font-semibold text-lg mb-1 text-slate-800`}>Profundidade de Bits & Faixa Dinâmica</h3>
                        <p className="text-sm text-gray-700">
                            Define o número de níveis de volume disponíveis. Controla o alcance entre o som mais baixo e o mais alto (Faixa Dinâmica).
                        </p>
                        <p className="text-xs font-bold text-cyan-600 mt-2">
                            16 bits = 65.536 níveis / ~96 dB de Faixa Dinâmica.
                        </p>
                    </div>
                </div>
                
                <div className="p-4 bg-red-50 rounded-lg border-l-4 border-red-400 shadow-inner">
                    <p className="text-sm font-bold text-red-800 mb-1">Ruído de Quantização:</p>
                    <p className="text-sm text-gray-700">
                        O erro de arredondamento inerente à Quantização (Profundidade de Bits). Em 8 bits, esse ruído é perceptível; em 16 bits, é insignificante, mas representa o limite teórico da qualidade sem perdas.
                    </p>
                </div>
            </section>

            <hr className="border-gray-300" />

            {/* NOVO: 4. CANAIS DE ÁUDIO */}
            <section className="space-y-6">
                <h2 className="text-3xl font-bold text-slate-800 border-b pb-2 mb-6 flex items-center gap-3">
                    <Speaker className="text-orange-600" size={30} /> 3. Canais de Áudio e Espacialização
                </h2>

                <p className="text-lg text-gray-700">
                    O número de canais de áudio define a espacialidade e a imersão na experiência multimídia. Cada canal representa um fluxo de áudio independente, geralmente ligado a um alto-falante específico.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Mono */}
                    <div className="p-4 bg-orange-100 rounded-lg border-l-4 border-orange-400">
                        <h3 className="font-semibold text-orange-800 mb-1">Mono (1.0)</h3>
                        <p className="text-sm text-gray-700">
                            Um único canal. Todo o som é reproduzido de forma idêntica, independentemente do número de alto-falantes. Usado principalmente para voz e sistemas de baixa fidelidade.
                        </p>
                    </div>
                    
                    {/* Estéreo */}
                    <div className="p-4 bg-orange-100 rounded-lg border-l-4 border-orange-400">
                        <h3 className="font-semibold text-orange-800 mb-1">Estéreo (2.0)</h3>
                        <p className="text-sm text-gray-700">
                            Dois canais: Esquerdo (Left) e Direito (Right). Permite a percepção de direção do som, essencial para música e experiência básica de jogos/vídeos.
                        </p>
                    </div>

                    {/* Surround */}
                    <div className="p-4 bg-orange-100 rounded-lg border-l-4 border-orange-400">
                        <h3 className="font-semibold text-orange-800 mb-1">Surround (Ex: 5.1)</h3>
                        <p className="text-sm text-gray-700">
                            Múltiplos canais (Ex: 5 canais + 1 subwoofer). Cria uma experiência imersiva com som vindo de diferentes direções, crucial para filmes e jogos modernos.
                        </p>
                    </div>
                </div>
            </section>

            <hr className="border-gray-300" />
            
            {/* 5. COMPRESSÃO DE ÁUDIO (Mantido e Renumerado) */}
            <section className="space-y-6">
                <h2 className="text-3xl font-bold text-slate-800 border-b pb-2 mb-6 flex items-center gap-3">
                    <HardDrive className="text-teal-600" size={30} /> 4. Compressão: Eficiência e Psicoacústica
                </h2>

                <p className="text-lg text-gray-700">
                    A compressão é vital para sistemas multimídia distribuídos pela web. Ela permite reduzir o tamanho do arquivo mantendo uma qualidade aceitável para o usuário final.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Compressão Sem Perdas (Lossless) */}
                    <div className="p-5 bg-teal-100 rounded-lg border-l-4 border-teal-400">
                        <h3 className="font-semibold text-teal-800 mb-2">Sem Perdas (Lossless)</h3>
                        <p className="text-sm text-gray-700">
                            Usa algoritmos de compressão de dados (como ZIP) para codificar a informação de forma mais eficiente, sem descartar dados.
                        </p>
                        <p className="text-xs font-bold text-teal-600 mt-2">Formatos: FLAC, ALAC.</p>
                    </div>
                    
                    {/* Compressão Com Perdas (Lossy) */}
                    <div className="p-5 bg-teal-100 rounded-lg border-l-4 border-teal-400">
                        <h3 className="font-semibold text-teal-800 mb-2">Com Perdas (Lossy)</h3>
                        <p className="text-sm text-gray-700">
                            Baseia-se na Psicoacústica (como o ouvido humano funciona) para remover seletivamente frequências inaudíveis (mascaramento).
                        </p>
                        <p className="text-xs font-bold text-teal-600 mt-2">Formatos: MP3, AAC, OGG Vorbis.</p>
                    </div>
                </div>
            </section>
            
            <hr className="border-gray-300" />

            {/* 6. SÍNTESE DE ÁUDIO (Mantido e Renumerado) */}
            <section className="space-y-6">
                <h2 className="text-3xl font-bold text-slate-800 border-b pb-2 mb-6 flex items-center gap-3">
                    <Cpu className="text-red-600" size={30} /> 5. Síntese: Geração de Áudio e MIDI
                </h2>

                <p className="text-lg text-gray-700">
                    A síntese é o caminho para o áudio totalmente gerado por software, sendo crucial para música interativa e acessibilidade.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4 p-5 bg-red-100 border-l-4 border-red-400 rounded-lg">
                        <h3 className="text-xl font-semibold text-red-800">MIDI (Partitura Digital)</h3>
                        <p className="text-gray-700 text-sm">
                            MIDI não é áudio, são metadados que instruem um sintetizador sobre quais notas tocar, quando e com qual instrumento. É a espinha dorsal de muitas trilhas sonoras de jogos antigos e softwares musicais.
                        </p>
                    </div>

                    <div className="space-y-4 p-5 bg-orange-100 border-l-4 border-orange-400 rounded-lg">
                        <h3 className="text-xl font-semibold text-orange-800">Síntese de Voz (TTS)</h3>
                        <p className="text-gray-700 text-sm">
                            Converte texto em fala. Essencial para acessibilidade. As técnicas atuais (como a síntese concatenativa e o machine learning) criam vozes incrivelmente naturais.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    </ContentPage>
);

export default AudioPage;
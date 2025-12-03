// src/pages/VectorPage.jsx
import React from 'react';
import { Layout, Compass, ZoomIn, Scaling, Code } from 'lucide-react';
import ContentPage from './ContentPage';

const VectorPage = () => (
    <ContentPage title="Imagens Vetoriais (Vector)">
        <div className="space-y-10 max-w-5xl mx-auto">
            
            {/* 1. Definição: A Mágica Matemática */}
            <section className="bg-orange-50 p-6 rounded-xl border-l-4 border-orange-500 shadow-md">
                <h2 className="text-2xl font-bold text-orange-800 mb-3 flex items-center gap-2">
                    <Compass className="text-orange-600" /> 1. O Conceito: Imagens Baseadas em Fórmulas
                </h2>
                <p className="text-lg text-slate-700">
                    Diferente das imagens matriciais (pixels), as imagens vetoriais são construídas a partir de fórmulas matemáticas (pontos, linhas, curvas e polígonos) que definem formas geométricas. Um círculo vetorial, por exemplo, é definido por seu centro e raio.
                </p>
                <p className="mt-4 text-md text-slate-600 italic">
                    Quando você amplia uma imagem vetorial, o software simplesmente refaz o cálculo matemático para desenhar as formas na nova escala, garantindo qualidade perfeita em qualquer tamanho.
                </p>
            </section>
            
            <hr className="border-gray-300" />

            {/* 2. Escala e Ampliação (Zoom) */}
            <section className="space-y-6">
                <h2 className="text-3xl font-bold text-slate-800 border-b pb-2 mb-6 flex items-center gap-3">
                    <Scaling className="text-purple-600" size={30} /> 2. O Poder da Escalabilidade Infinita
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                    {/* SVG de Exemplo (Mantido e com foco na escalabilidade) */}
                    <div className="bg-white border-2 border-orange-300 p-8 rounded-2xl flex flex-col justify-center items-center shadow-lg">
                         <div className="text-center mb-4">
                            <span className="text-xl font-bold text-gray-700">Demonstração SVG</span>
                         </div>
                        <svg width="250" height="250" viewBox="0 0 200 200" className="drop-shadow-lg" style={{ animation: 'spin-slow 8s linear infinite' }}>
                            <defs>
                                <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" style={{stopColor: '#1638f9ff', stopOpacity: 1}} />
                                    <stop offset="100%" style={{stopColor: '#350ceaff', stopOpacity: 1}} />
                                </linearGradient>
                            </defs>
                            <circle cx="100" cy="100" r="90" fill="url(#grad1)" opacity="0.2" />
                            <polygon points="100,20 40,180 190,75 10,75 160,180" fill="none" stroke="url(#grad1)" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
                            <text x="50%" y="55%" textAnchor="middle" fill="#150cc2ff" fontWeight="bold" fontSize="20">SVG</text>
                        </svg>
                        <p className="text-sm text-center text-gray-600 mt-4">
                            Este é um SVG. Se você ampliar a tela do navegador, ele continuará nítido.
                        </p>
                    </div>

                    {/* Vantagem da Escala */}
                    <div className="p-5 bg-purple-100 rounded-lg border-l-4 border-purple-400 self-center">
                        <h3 className="font-semibold text-purple-800 mb-2 flex items-center gap-2">
                            <ZoomIn size={24} /> Sem Pixelização!
                        </h3>
                        <p className="text-sm text-gray-700">
                            A principal vantagem é a independência de resolução. Não importa se o elemento é exibido em um ícone de 16x16 pixels ou em um outdoor; o vetor sempre será renderizado com máxima nitidez.
                        </p>
                        <div className="mt-3 text-center">
                            

[Image of X]

                        </div>
                        <p className="text-xs text-gray-500 italic mt-3">
                            A fórmula vetorial do ponto A ao ponto B é constante, independentemente da distância.
                        </p>
                    </div>
                </div>
            </section>

            <hr className="border-gray-300" />
            
            {/* 3. Aplicações e Formatos */}
            <section className="space-y-6">
                <h2 className="text-3xl font-bold text-slate-800 border-b pb-2 mb-6 flex items-center gap-3">
                    <Layout className="text-green-600" size={30} /> 3. Aplicações e Formatos Comuns
                </h2>

                <div className="p-5 bg-green-50 rounded-lg border-l-4 border-green-400 shadow-md">
                    <h3 className="text-xl font-bold text-green-800 mb-2">Ideal para Sistemas Multimídia:</h3>
                    <ul className="list-disc list-inside ml-4 text-md text-gray-700 space-y-2">
                        <li>
                            Interfaces de Usuário (UI): Ícones, botões e elementos de navegação devem ser vetoriais para garantir que pareçam nítidos em todas as telas (retina, 4K, etc.).
                        </li>
                        <li>
                            Logotipos e Branding: A identidade visual de uma marca deve ser sempre vetorial para uso em qualquer tamanho, de um cartão de visita a um painel.
                        </li>
                        <li>
                            Gráficos e Infográficos: Para diagramas e ilustrações técnicas onde a clareza e a precisão das linhas são cruciais.
                        </li>
                    </ul>
                </div>

                <h3 className="text-xl font-bold text-slate-800 mt-6 flex items-center gap-2">
                    <Code className="text-green-600" /> Formatos de Arquivo:
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-3 bg-gray-50 rounded-lg border border-gray-200">
                        <p className="font-bold text-lg text-red-800">SVG (.svg)</p>
                        <p className="text-sm text-gray-700">
                            Scalable Vector Graphics. O formato padrão da web. É baseado em XML, o que significa que pode ser lido e editado como texto (código) e renderizado diretamente por navegadores.
                        </p>
                    </div>
                    <div className="p-3 bg-gray-50 rounded-lg border border-gray-200">
                        <p className="font-bold text-lg text-blue-800">AI / EPS</p>
                        <p className="text-sm text-gray-700">
                            Formatos de software: Adobe Illustrator (.ai) e PostScript Encapsulado (.eps). Usados para edição e criação de gráficos vetoriais complexos por designers.
                        </p>
                    </div>
                </div>
            </section>

        </div>
    </ContentPage>
);

export default VectorPage;
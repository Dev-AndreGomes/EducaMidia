// src/pages/HomePage.jsx
import React from 'react';
import { BookOpen } from 'lucide-react';

const HomePage = ({ startQuiz }) => (
    <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-xl space-y-8">
        <header className="text-center mb-8 border-b pb-6">
            <BookOpen className="w-16 h-16 text-indigo-600 mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-800 tracking-tight">
                Sistema <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">EducaMídia</span>
            </h1>
        </header>

        <div className="p-8 bg-white shadow-lg rounded-xl max-w-4xl mx-auto my-10">
      
        {/* Título e Boas-Vindas */}
        <header className="text-center mb-8">
            <h1 className="text-3xl font-bold text-indigo-700 mb-2">
                🚀 Boas-Vindas ao Seu Sistema Multimídia Educacional!
            </h1>
            <p className="text-gray-600 italic">
                Olá! Seja muito bem-vindo(a) ao nosso protótipo interativo, uma ferramenta de aprendizado desenvolvida para consolidar seus conhecimentos sobre os pilares dos Sistemas Multimídia.
            </p>
        </header>

        <hr className="my-6 border-indigo-200" />

        {/* Seção de Conteúdo */}
        <section>
            <h2 className="text-2xl font-semibold text-indigo-600 mb-4">
            O Que Você Vai Encontrar?
            </h2>
            
            <p className="mb-6 text-gray-700">
                Navegue pelas diferentes seções para explorar o conteúdo e, em seguida, desafie-se no <span className="font-bold text-red-500">QUIZ Interativo</span> ao final.
            </p>

            {/* Tabela de Conteúdo */}
            <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-indigo-50">
                        <tr>
                            <th 
                            scope="col" 
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                            Tipo de Mídia
                            </th>
                            <th 
                            scope="col" 
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                            Resumo do Conteúdo
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            Imagens
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-700">
                            Conceitos de imagens matriciais (como fotos) e vetoriais (como ilustrações), essenciais para o design multimídia.
                            </td>
                        </tr>
                        <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            Áudio
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-700">
                            Princípios de áudio digital, incluindo gravação, amostragem, além de música e voz sintetizadas.
                            </td>
                        </tr>
                        <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            Vídeo & Animação
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-700">
                            Tudo sobre o vídeo digital (formatos, compressão) e o uso da animação como recurso poderoso para sistemas interativos.
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            </section>

            {/* Chamada Final */}
            <footer className="mt-8 text-center">
                <p className="text-lg font-medium text-green-600">
                 Nosso objetivo é tornar o aprendizado sobre a autoria de sistemas multimídia dinâmico e eficaz. Prepare-se para começar!
                </p>
            </footer>
        </div>
    </div>
);

export default HomePage;
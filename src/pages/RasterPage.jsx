// src/pages/RasterPage.jsx
import React from 'react';
import { Grid, Droplet, Maximize, FileText } from 'lucide-react';
import ContentPage from './ContentPage';
import localImage from '../assets/vitrolaimage.jpeg'; 

const RasterPage = () => ( 
     <ContentPage title="Imagens Matriciais (Raster)">
          <div className="space-y-10 max-w-5xl mx-auto">
               
               {/* 1. Definição e Demonstração */}
               <section className="space-y-6">
                    <h2 className="text-3xl font-bold text-slate-800 border-b pb-2 mb-6 flex items-center gap-3">
                         <Grid className="text-blue-600" size={30} /> 1. O Conceito: A Rede de Pixels
                    </h2>
                    
                    <p className="text-lg text-gray-700">
                         Imagens Matriciais (ou Raster) são a forma mais comum de mídia visual digital, utilizadas em fotografias, digitalizações e na maioria dos gráficos da web. Elas são construídas a partir de uma grade retangular de pequenos pontos coloridos chamados pixels.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                         {/* Demonstração de Imagem FIXA */}
                         <div className="bg-blue-50 border-2 border-blue-300 p-6 rounded-xl flex flex-col items-center">
                              <h3 className="font-bold text-lg text-blue-900 mb-4">📷 Imagem de Referência (vitrolaimage.jpeg)</h3>
                              <div className="space-y-4 w-full">
                                   {/* Imagem fixa com src hardcoded para localImage */}
                                   <img src={localImage} alt="Ceu" className="w-full max-h-96 object-contain rounded-lg shadow-lg border border-gray-300" />
                                   <p className="text-sm text-slate-500 italic text-center">
                                        Arquivo fixo: `vitrolaimage.jpeg` (usado para demonstrar os conceitos de pixelização).
                                   </p>
                              </div>
                         </div>
                         
                         {/* Visual de Pixelização (Mantido) */}
                         <div className="bg-gray-100 p-6 rounded-xl flex flex-col items-center justify-center">
                              <div className="w-48 h-48 grid grid-cols-8 grid-rows-8 gap-0 shadow-xl border-4 border-gray-600">
                                   {[...Array(64)].map((_, i) => (
                                        <div 
                                             key={i} 
                                             className="transition-colors hover:opacity-75" 
                                             style={{backgroundColor: `hsl(${(i*13) % 360}, 70%, 60%)`}}
                                        ></div>
                                   ))}
                              </div>
                              <p className="font-bold text-lg text-slate-700 mt-4">Zoom Digital: Pixel é a Base</p>
                              <p className="text-sm text-gray-600 italic text-center mt-1">
                                   Cada bloco no grid é um pixel que armazena uma cor específica.
                              </p>
                         </div>
                    </div>
               </section>            
            <hr className="border-gray-300" />

            {/* 2. PROPRIEDADES CHAVE */}
            <section className="space-y-6">
                <h2 className="text-3xl font-bold text-slate-800 border-b pb-2 mb-6 flex items-center gap-3">
                    <Droplet className="text-green-600" size={30} /> 2. Propriedades que Definem a Qualidade
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Propriedade 1: Resolução */}
                    <div className="p-4 bg-green-100 rounded-lg border-l-4 border-green-400">
                        <h3 className="font-semibold text-green-800 mb-2">Resolução (Pixels x Pixels)</h3>
                        <p className="text-sm text-gray-700">
                            O número total de pixels na imagem (largura x altura). Quanto maior a resolução, mais detalhada a imagem e maior o tamanho do arquivo.
                        </p>
                        <p className="text-xs font-bold text-green-600 mt-2">Ex: 1920x1080, 4000x3000.</p>
                    </div>
                    
                    {/* Propriedade 2: Profundidade de Cor */}
                    <div className="p-4 bg-green-100 rounded-lg border-l-4 border-green-400">
                        <h3 className="font-semibold text-green-800 mb-2">Profundidade de Cor (Bit Depth)</h3>
                        <p className="text-sm text-gray-700">
                            O número de bits usados para armazenar a cor de cada pixel. Define a riqueza e a quantidade de cores que a imagem pode exibir.
                        </p>
                        <p className="text-xs font-bold text-green-600 mt-2">Ex: 24 bits (True Color) = ~16.7 milhões de cores.</p>
                    </div>
                    
                    {/* Propriedade 3: DPI (Contexto de Impressão) */}
                    <div className="p-4 bg-green-100 rounded-lg border-l-4 border-green-400">
                        <h3 className="font-semibold text-green-800 mb-2">DPI / PPI</h3>
                        <p className="text-sm text-gray-700">
                            Pixels Por Polegada (PPI) ou Pontos Por Polegada (DPI). Define a densidade de pixels quando a imagem é exibida (em tela) ou impressa.
                        </p>
                        <p className="text-xs font-bold text-green-600 mt-2">Ex: 72 PPI (web) vs 300 DPI (impressão).</p>
                    </div>
                </div>
            </section>

            <hr className="border-gray-300" />

            {/* 3. LIMITE E FORMATOS */}
            <section className="space-y-6">
                <h2 className="text-3xl font-bold text-slate-800 border-b pb-2 mb-6 flex items-center gap-3">
                    <Maximize className="text-red-600" size={30} /> 3. Desvantagem e Formatos Comuns
                </h2>

                <div className="p-5 bg-red-50 rounded-lg border-l-4 border-red-400 shadow-md">
                    <h3 className="text-xl font-bold text-red-800 mb-2">⚠ Limitação: Perda de Qualidade ao Ampliar</h3>
                    <p className="text-md text-gray-700">
                        O principal ponto fraco das imagens matriciais é que elas não escalam bem. Ao ampliar (dar *zoom*), o software precisa esticar os pixels existentes, resultando na visível pixelização ou serrilhamento, e perda de definição.
                    </p>
                </div>

                <h3 className="text-xl font-bold text-slate-800 mt-6 flex items-center gap-2">
                    <FileText className="text-red-600" /> Formatos de Arquivo Comuns
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="p-3 bg-gray-50 rounded-lg border border-gray-200">
                        <p className="font-bold text-lg text-yellow-800">JPEG (.jpg)</p>
                        <p className="text-sm text-gray-700">Compressão com perdas (*lossy*), ideal para fotos e imagens com muitas cores e gradações, pois oferece ótimo equilíbrio entre qualidade e tamanho de arquivo.</p>
                    </div>
                    <div className="p-3 bg-gray-50 rounded-lg border border-gray-200">
                        <p className="font-bold text-lg text-blue-800">PNG (.png)</p>
                        <p className="text-sm text-gray-700">Compressão sem perdas (*lossless*), suporta transparência. Ideal para gráficos, logos e imagens com blocos de cor sólida.</p>
                    </div>
                    <div className="p-3 bg-gray-50 rounded-lg border border-gray-200">
                        <p className="font-bold text-lg text-purple-800">GIF (.gif)</p>
                        <p className="text-sm text-gray-700">Suporta apenas 256 cores (paleta limitada) e compressão sem perdas. Famoso por sua capacidade de armazenar pequenas animações.</p>
                    </div>
                </div>
            </section>

        </div>
    </ContentPage>
);

export default RasterPage;
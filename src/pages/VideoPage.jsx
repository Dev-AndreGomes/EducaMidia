// src/pages/VideoPage.jsx
import React from 'react';
import { Video, Layers, Aperture, HardDrive } from 'lucide-react';
import ContentPage from './ContentPage';
import localVideo from '../assets/Vitrola.mp4'; 

const VideoPage = () => ( 
    <ContentPage title="Vídeo Digital: Conceitos e Compressão">
        <div className="space-y-10 max-w-5xl mx-auto">
 
            {/* 1. Player de Vídeo (FIXO) */}
            <section>
                <div className="rounded-xl overflow-hidden shadow-2xl bg-black border-4 border-red-500">

                    <h3 className="font-bold text-lg text-white p-3 bg-red-800 flex items-center gap-2">
                        <Video className="text-white" /> Player de Demonstração (Material Original: Vitrola.mp4) Equipamento de Alexandre
                    </h3>

                    {/* PLAYER FIXO USANDO localVideo */}
                    <video controls className="w-full">
                        <source src={localVideo} type="video/mp4" />
                        Seu navegador não suporta o elemento de vídeo.
                    </video>
 
                    <p className="text-xs text-gray-400 p-2 text-center">
                        Vídeo fixo: usado para demonstrar os conceitos de quadros e compressão.
                    </p>

                </div>

                {/* REMOÇÃO DO BOTÃO DE UPLOAD AQUI */}

            </section>

            <hr className="border-gray-300" />
            
            {/* 2. PILARES DO VÍDEO DIGITAL */}
            <section className="space-y-6">
                <h2 className="text-3xl font-bold text-slate-800 border-b pb-2 mb-6 flex items-center gap-3">
                    <Aperture className="text-blue-600" size={30} /> 1. O Essencial: Quadros e Velocidade
                </h2>

                <p className="text-lg text-gray-700">
                    Um vídeo é, essencialmente, uma sequência rápida de imagens estáticas (quadros ou *frames*). A ilusão de movimento é criada quando a velocidade de exibição é alta o suficiente para enganar o olho humano.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Resolução */}
                    <div className="p-4 bg-blue-100 rounded-lg border-l-4 border-blue-400">
                        <h3 className="font-semibold text-blue-800 mb-2">Resolução (Ex: 1080p, 4K)</h3>
                        <p className="text-sm text-gray-700">
                            Define a qualidade da imagem, indicando o número total de pixels horizontais e verticais. Mais pixels = mais detalhes, mas maior tamanho de arquivo.
                        </p>
                    </div>
                    
                    {/* Taxa de Quadros (FPS) - Do código original */}
                    <div className="p-4 bg-blue-100 rounded-lg border-l-4 border-blue-400">
                        <h3 className="font-semibold text-blue-800 mb-2">Taxa de Quadros (FPS)</h3>
                        <p className="text-sm text-gray-700">
                            FPS (*Frames Per Second*) é a frequência em que quadros são exibidos. 24 FPS é o padrão de cinema, 30/60 FPS é comum em televisão e jogos.
                        </p>
                    </div>
                </div>

                <div className="bg-red-50 p-5 rounded-lg border border-red-300 mt-4">
                    <span className="block text-xl font-bold text-red-700">FPS na Prática:</span>
                    <p className="text-sm text-gray-700 mt-2">
                        Vídeos de 60 FPS oferecem um movimento mais suave e realista (útil para esportes ou jogos), enquanto 24 FPS confere um visual mais "cinemático" e consome menos dados.
                    </p>
                </div>
            </section>

            <hr className="border-gray-300" />

            {/* 3. CODECS E COMPRESSÃO */}
            <section className="space-y-6">
                <h2 className="text-3xl font-bold text-slate-800 border-b pb-2 mb-6 flex items-center gap-3">
                    <HardDrive className="text-green-600" size={30} /> 2. O Segredo da Distribuição: Codecs e Containers
                </h2>
                
                <p className="text-lg text-gray-700">
                    O vídeo não-comprimido ocupa um espaço gigantesco. Para torná-lo viável na web e em sistemas multimídia, usamos a compressão, controlada pelo Codec e empacotada no Container.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Codec */}
                    <div className="p-4 bg-green-100 rounded-lg border-l-4 border-green-400">
                        <h3 className="font-semibold text-green-800 mb-2">Codec (Compressor/Decompressor)</h3>
                        <p className="text-sm text-gray-700">
                            O algoritmo que comprime os dados do vídeo na gravação e os descomprime na reprodução.
                        </p>
                        <ul className="list-disc list-inside ml-4 mt-2 text-sm text-gray-600">
                            <li>Exemplos: H.264 (muito popular), H.265 (mais eficiente), VP9, AV1.</li>
                        </ul>
                    </div>
                    
                    {/* Container (ou Formato) */}
                    <div className="p-4 bg-green-100 rounded-lg border-l-4 border-green-400">
                        <h3 className="font-semibold text-green-800 mb-2">Container (Formato)</h3>
                        <p className="text-sm text-gray-700">
                            O invólucro ou "pacote" que armazena o vídeo (comprimido pelo codec), o áudio e metadados (legendas, capítulos).
                        </p>
                        <ul className="list-disc list-inside ml-4 mt-2 text-sm text-gray-600">
                            <li>Exemplos: .MP4, .MKV, .MOV, .AVI.</li>
                        </ul>
                    </div>
                </div>
                
                <div className="p-5 bg-yellow-50 rounded-lg border-l-4 border-yellow-400">
                    <span className="block text-xl font-bold text-yellow-800">Compressão Intracodro e Interquadro:</span>
                    <p className="text-sm text-gray-700 mt-2">
                        A maioria dos codecs usa compressão interquadro, onde apenas as mudanças entre os quadros consecutivos são armazenadas (Ex: o fundo estático do vídeo não é refeito em cada frame, economizando muito espaço).
                    </p>
                </div>

            </section>
            
            <hr className="border-gray-300" />

            {/* 4. ANIMAÇÃO (COMO RECURSO) */}
            <section className="space-y-6">
                <h2 className="text-3xl font-bold text-slate-800 border-b pb-2 mb-6 flex items-center gap-3">
                    <Layers className="text-purple-600" size={30} /> 3. Animação em Multimídia
                </h2>

                <p className="text-lg text-gray-700">
                    A Animação é fundamental em sistemas multimídia educativos, pois pode simplificar conceitos complexos, ilustrar processos dinâmicos (como a conversão de áudio ou a compressão de vídeo) e manter o usuário engajado.
                </p>

                <div className="p-4 bg-purple-100 rounded-lg border-2 border-purple-300">
                    <h3 className="font-semibold text-purple-800 mb-2">Tipos Comuns de Animação:</h3>
                    <ul className="list-disc list-inside ml-4 text-sm text-gray-700">
                        <li>Animação 2D (vetorial): Usa formas e gráficos escaláveis, ideal para infográficos e interfaces leves.</li>
                        <li>Animação por Quadros: Semelhante ao vídeo, onde cada imagem é desenhada individualmente (útil para movimento complexo).</li>
                        <li>Animação CSS/JavaScript: Usada para dar vida e interatividade aos elementos da interface de usuário (como a transição de botões e módulos de conteúdo).</li>
                    </ul>
                </div>
            </section>
        </div>
    </ContentPage>
);

export default VideoPage;
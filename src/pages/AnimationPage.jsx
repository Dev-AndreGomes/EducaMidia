// src/pages/AnimationPage.jsx
import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, Zap, MoveRight, Layers } from 'lucide-react';
import ContentPage from './ContentPage';

const AnimationPage = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0); 
    const animationFrameRef = useRef();
    const startTimeRef = useRef(null);
    const DURATION = 2000; 

    // 1. Lógica de Animação usando requestAnimationFrame e Easing
    useEffect(() => {
        if (!isPlaying) {
            cancelAnimationFrame(animationFrameRef.current);
            startTimeRef.current = null;
            return;
        }

        const animate = (timestamp) => {
            if (!startTimeRef.current) {
                startTimeRef.current = timestamp;
            }

            const elapsed = timestamp - startTimeRef.current;
            
            // Ciclo de 4 segundos (ida e volta)
            const cycleDuration = DURATION * 2;
            const timeInCycle = elapsed % cycleDuration;

            let currentProgress;
            
            if (timeInCycle < DURATION) {
                // Primeira metade: 0 a 1 (Indo)
                currentProgress = timeInCycle / DURATION;
            } else {
                // Segunda metade: 1 a 0 (Voltando)
                currentProgress = 1 - ((timeInCycle - DURATION) / DURATION);
            }

            // Função de Easing (Simulação de Aceleração/Desaceleração)
            // Usa Math.pow para um efeito mais dramático de "ease in/out"
            let easedProgress;
            if (currentProgress < 0.5) {
                // Ease In (Começa lento)
                easedProgress = 2 * currentProgress * currentProgress;
            } else {
                // Ease Out (Termina lento)
                easedProgress = 1 - Math.pow(-2 * currentProgress + 2, 2) / 2;
            }

            setProgress(easedProgress);

            animationFrameRef.current = requestAnimationFrame(animate);
        };

        animationFrameRef.current = requestAnimationFrame(animate);

        return () => {
            cancelAnimationFrame(animationFrameRef.current);
        };
    }, [isPlaying]);

    // 2. Cálculo da Posição (0% a 95%)
    const ballPosition = progress * 95;


    return (
        <ContentPage title="Animação: Movimento e Interpolação">
            <div className="space-y-10 max-w-5xl mx-auto">

                {/* 1. Demonstração Interativa com Easing */}
                <section>
                    <div className="bg-pink-100 p-6 rounded-xl border-2 border-pink-400 shadow-xl">
                        <h3 className="font-bold text-xl text-pink-900 mb-4 flex items-center gap-2">
                            <Zap className="text-pink-600" /> Demonstração: Interpolação e Easing
                        </h3>

                        <div className="bg-white rounded-lg p-4 h-32 relative overflow-hidden shadow-lg border border-slate-300">
                            {/* Linha do tempo e Keyframes */}
                            <div className="absolute top-4 w-full h-1 bg-gray-200">
                                <div className="absolute left-0 w-3 h-3 bg-red-500 rounded-full top-1/2 -translate-y-1/2" title="Keyframe Inicial (0%)"></div>
                                <div className="absolute right-0 w-3 h-3 bg-red-500 rounded-full top-1/2 -translate-y-1/2" style={{right: '5%'}} title="Keyframe Final (100%)"></div>
                            </div>

                            {/* Bola Animada */}
                            <div
                                className="w-10 h-10 bg-green-600 rounded-full shadow-2xl absolute top-1/2 -translate-y-1/2 border-4 border-white"
                                style={{ left: `${ballPosition}%`, transform: `translateX(-50%)` }}
                            ></div>
                        </div>

                        <div className="mt-6 flex items-center justify-center gap-4">
                            <button
                                onClick={() => setIsPlaying(!isPlaying)}
                                className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold transition-colors ${
                                    isPlaying
                                        ? 'bg-red-500 hover:bg-red-600 text-white'
                                        : 'bg-green-600 hover:bg-green-700 text-white'
                                }`}
                            >
                                {isPlaying ? <Pause size={20} /> : <Play size={20} />}
                                {isPlaying ? 'Pausar Animação' : 'Iniciar Animação'}
                            </button>
                            <button
                                onClick={() => { setIsPlaying(false); setProgress(0); startTimeRef.current = null; }}
                                className="flex items-center gap-2 px-4 py-3 rounded-full font-bold bg-slate-200 text-slate-700 hover:bg-slate-300 transition-colors"
                            >
                                Reset
                            </button>
                        </div>
                        <p className="text-sm text-gray-600 italic mt-3 text-center">
                            Note como a animação começa e termina devagar, mas acelera no meio (Efeito Easing).
                        </p>
                    </div>
                </section>

                <hr className="border-gray-300" />

                {/* 2. Keyframes e Interpolação */}
                <section className="space-y-6">
                    <h2 className="text-3xl font-bold text-slate-800 border-b pb-2 mb-6 flex items-center gap-3">
                        <MoveRight className="text-pink-600" size={30} /> 2. O Processo de Criação de Movimento
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Keyframes */}
                        <div className="p-5 bg-purple-50 rounded-lg border-l-4 border-purple-400">
                            <h3 className="font-semibold text-purple-800 mb-2">Chave de Quadros (Keyframes)</h3>
                            <p className="text-sm text-gray-700">
                                São os quadros essenciais que definem o início e o fim de uma ação ou transformação. O animador (ou designer) define apenas esses pontos principais.
                            </p>
                            <p className="text-xs font-bold text-purple-600 mt-2">Ex: Posição inicial (0%) e Posição final (100%).</p>
                        </div>
                        
                        {/* Interpolação (Tweening) */}
                        <div className="p-5 bg-purple-50 rounded-lg border-l-4 border-purple-400">
                            <h3 className="font-semibold text-purple-800 mb-2">Interpolação (Tweening)</h3>
                            <p className="text-sm text-gray-700">
                                É o processo automático de gerar os quadros intermediários (*in-between*) entre os Keyframes. Isso é feito pelo software, economizando o trabalho manual do animador.
                            </p>
                            <p className="text-xs font-bold text-purple-600 mt-2">Sua demo usa interpolação para preencher o espaço entre 0% e 100%.</p>
                        </div>
                    </div>
                </section>

                <hr className="border-gray-300" />

                {/* 3. Easing e Tipos de Animação */}
                <section className="space-y-6">
                    <h2 className="text-3xl font-bold text-slate-800 border-b pb-2 mb-6 flex items-center gap-3">
                        <Layers className="text-teal-600" size={30} /> 3. Easing e Aplicações em Multimídia
                    </h2>
                    
                    <div className="p-5 bg-teal-50 rounded-lg border-l-4 border-teal-400 shadow-md">
                        <h3 className="text-xl font-bold text-teal-800 mb-2">Curvas de Animação (Easing)</h3>
                        <p className="text-md text-gray-700">
                            Define a taxa de mudança da animação ao longo do tempo (aceleração). Em vez de um movimento linear (que parece robótico), o *easing* simula a física do mundo real:
                        </p>
                        <ul className="list-disc list-inside ml-4 text-sm text-gray-700 mt-2">
                            <li>Ease-In: Começa lento e acelera.</li>
                            <li>Ease-Out: Começa rápido e desacelera.</li>
                            <li>Ease-In-Out: Começa e termina lento, sendo rápido no meio (como na demo acima).</li>
                        </ul>
                    </div>

                    <h3 className="text-xl font-bold text-slate-800 mt-6 flex items-center gap-2">
                        Tipos de Animação em Sistemas Multimídia:
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="p-3 bg-gray-50 rounded-lg border border-gray-200">
                            <p className="font-bold text-lg text-indigo-800">Animação 2D (Vetorial/Gráfica)</p>
                            <p className="text-sm text-gray-700">Focada em gráficos vetoriais, ideal para explicar conceitos complexos, infográficos e interfaces de usuário (UI).</p>
                        </div>
                        <div className="p-3 bg-gray-50 rounded-lg border border-gray-200">
                            <p className="font-bold text-lg text-yellow-800">Animação por Quadros (Vídeo)</p>
                            <p className="text-sm text-gray-700">Série de imagens estáticas que, quando tocadas rapidamente, criam a ilusão de movimento. Usada em desenhos animados tradicionais e GIFs.</p>
                        </div>
                    </div>
                </section>
                
            </div>
        </ContentPage>
    );
};

export default AnimationPage;
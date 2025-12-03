// src/data/content.js
import { Volume2, Music, Video, Image, Pencil, Play, Award, Home } from 'lucide-react';

// --- BANCO DE DADOS DO QUIZ ---
export const quizDatabase = [
    { id: 1, question: "O que é áudio digital?", options: ["Gravação analógica", "Representação numérica do som", "Apenas música", "Som natural"], correct: 1 },
    { id: 2, question: "Qual a taxa de amostragem padrão para CD?", options: ["22050 Hz", "44100 Hz", "48000 Hz", "96000 Hz"], correct: 1 },
    { id: 3, question: "O que significa MIDI?", options: ["Musical Instrument Digital Interface", "Music Internet Data Interface", "Media Instrument Design Interface", "Musical Internet Digital Input"], correct: 0 },
    { id: 4, question: "Qual formato de imagem é vetorial?", options: ["JPG", "PNG", "SVG", "GIF"], correct: 2 },
    { id: 5, question: "O que é frame rate em vídeo?", options: ["Resolução", "Quadros por segundo", "Tamanho do arquivo", "Codec usado"], correct: 1 },
    { id: 6, question: "Qual a diferença principal entre imagem matricial e vetorial?", options: ["Número de cores", "Pixels vs Fórmulas matemáticas", "Tamanho da tela", "Extensão do arquivo"], correct: 1 },
    { id: 7, question: "O que é um Codec?", options: ["Um editor de vídeo", "Software de compressão/descompressão", "Um tipo de monitor", "Um formato de áudio"], correct: 1 },
    { id: 8, question: "Quantos bits tem um sample de áudio padrão de CD?", options: ["8 bits", "16 bits", "24 bits", "32 bits"], correct: 1 },
    { id: 9, question: "O que caracteriza uma animação?", options: ["Imagem estática", "Ilusão de movimento por sequência de imagens", "apenas vídeo gravado", "Fotografia de alta exposição"], correct: 1 },
    { id: 10, question: "Qual destes formatos de áudio utiliza compressão com perdas?", options: ["WAV", "MP3", "AIFF", "FLAC"], correct: 1 },
    { id: 11, question: "O que acontece ao ampliar muito uma imagem matricial?", options: ["Ela fica mais nítida", "Ocorre pixelização (serrilhado)", "As cores mudam", "Ela vira vetorial"], correct: 1 },
    { id: 12, question: "Para que serve o canal Alpha em imagens?", options: ["Definir o brilho", "Definir a transparência", "Definir o contraste", "Definir a saturação"], correct: 1 },
    { id: 13, question: "O que é síntese de som?", options: ["Gravação de microfone", "Geração artificial de áudio", "Edição de corte", "Mixagem de faixas"], correct: 1 },
    { id: 14, question: "Qual a principal vantagem do SVG?", options: ["Qualidade fotográfica", "Escalabilidade infinita", "Suporte a áudio", "Compressão alta"], correct: 1 },
    { id: 15, question: "O que é bitrate em multimídia?", options: ["Velocidade da internet", "Taxa de bits processados por unidade de tempo", "Tamanho da tela", "Volume do áudio"], correct: 1 },
    { id: 16, question: "Qual a diferença entre MP3 e WAV?", options: ["MP3 é menor", "MP3 usa compressão com perda", "WAV não tem qualidade", "São idênticos"], correct: 1 },
    { id: 17, question: "O que é keyframe em animação?", options: ["Quadro importante", "Quadro principal que define posição", "Último quadro", "Quadro deletado"], correct: 1 }
];

// --- Configurações da Navegação ---
export const navItems = [
    { id: 'home', title: 'Início', icon: Home, color: 'text-indigo-600' },
    { id: 'audio', title: 'Áudio Digital', icon: Volume2, color: 'text-blue-600' },
    { id: 'midi', title: 'Música MIDI', icon: Music, color: 'text-purple-600' },
    { id: 'video', title: 'Vídeo Digital', icon: Video, color: 'text-red-600' },
    { id: 'raster', title: 'Img. Matricial', icon: Image, color: 'text-green-600' },
    { id: 'vector', title: 'Img. Vetorial', icon: Pencil, color: 'text-yellow-600' },
    { id: 'animation', title: 'Animação', icon: Play, color: 'text-pink-600' },
    { id: 'quiz', title: 'Quiz Avaliativo', icon: Award, color: 'text-indigo-800', isQuiz: true },
];
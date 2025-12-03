// src/App.jsx
import React, { useState, useCallback } from 'react';

// Dados
import { quizDatabase } from './data/content';

// Layout
import Layout from './components/layout/Layout';

// Páginas
import HomePage from './pages/HomePage';
import AudioPage from './pages/AudioPage';
import MidiPage from './pages/MidiPage';
import VideoPage from './pages/VideoPage';
import RasterPage from './pages/RasterPage';
import VectorPage from './pages/VectorPage';
import AnimationPage from './pages/AnimationPage';
import QuizPage from './pages/QuizPage';

// Constante para definir o número de perguntas
const QUIZ_SIZE = 5; 

function App() {
    // Estado de navegação principal
    const [currentPage, setCurrentPage] = useState('home');
    
    // Estados do Quiz
    const [quizQuestions, setQuizQuestions] = useState([]);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedAnswers, setSelectedAnswers] = useState([]);
    const [showResults, setShowResults] = useState(false);
    
    const [uploadedAudio, setUploadedAudio] = useState('/media/audio_original.mp3'); 
    const [uploadedVideo, setUploadedVideo] = useState('/media/video_original.mp4');
    const [uploadedImage, setUploadedImage] = useState('/media/imagem_original.jpg');

    // --- LÓGICA DO QUIZ ---
    
    const startQuiz = useCallback(() => {
        const shuffled = [...quizDatabase].sort(() => 0.5 - Math.random());
        // Seleciona 5 perguntas
        const selected = shuffled.slice(0, QUIZ_SIZE); 
        setQuizQuestions(selected);
        setCurrentQuestion(0);
        setSelectedAnswers(new Array(selected.length).fill(null));
        setShowResults(false);
        setCurrentPage('quiz'); 
    }, []);

    const handleAnswer = useCallback((optionIndex) => {
        const newAnswers = [...selectedAnswers];
        newAnswers[currentQuestion] = optionIndex;
        setSelectedAnswers(newAnswers);
    }, [currentQuestion, selectedAnswers]);

    const getScore = useCallback(() => {
        let correct = 0;
        quizQuestions.forEach((q, index) => {
            if (selectedAnswers[index] === q.correct) {
                correct++;
            }
        });
        return (correct / quizQuestions.length) * 100;
    }, [quizQuestions, selectedAnswers]);

    const nextQuestion = useCallback(() => {
        if (currentQuestion < quizQuestions.length - 1) {
            setCurrentQuestion(prev => prev + 1);
        } else {
            setShowResults(true);
        }
    }, [currentQuestion, quizQuestions.length]);
    
    const handleRestart = useCallback(() => {
        startQuiz(); // Re-inicia o Quiz
        setShowResults(false);
    }, [startQuiz]);


    // Handlers de upload
    const handleFileUpload = useCallback((e, type) => {
        const file = e.target.files[0];
        if (file) {
            const url = URL.createObjectURL(file); 
            if (type === 'audio') setUploadedAudio(url);
            if (type === 'video') setUploadedVideo(url);
            if (type === 'image') setUploadedImage(url);
        }
    }, []);

    // --- RENDERIZAÇÃO DE PÁGINAS ---
    let ContentComponent;
    
    switch (currentPage) {
        case 'home':
            ContentComponent = <HomePage startQuiz={startQuiz} />;
            break;
        case 'audio':
            ContentComponent = <AudioPage uploadedAudio={uploadedAudio} handleFileUpload={handleFileUpload} />;
            break;
        case 'midi':
            ContentComponent = <MidiPage />;
            break;
        case 'video':
            ContentComponent = <VideoPage uploadedVideo={uploadedVideo} handleFileUpload={handleFileUpload} />;
            break;
        case 'raster':
            ContentComponent = <RasterPage uploadedImage={uploadedImage} handleFileUpload={handleFileUpload} />;
            break;
        case 'vector':
            ContentComponent = <VectorPage />;
            break;
        case 'animation':
            ContentComponent = <AnimationPage />;
            break;
        case 'quiz':
            ContentComponent = (
                <QuizPage 
                    quizQuestions={quizQuestions}
                    currentQuestion={currentQuestion}
                    selectedAnswers={selectedAnswers}
                    showResults={showResults}
                    handleAnswer={handleAnswer}
                    nextQuestion={nextQuestion}
                    getScore={getScore}
                    handleRestart={handleRestart}
                />
            );
            break;
        default:
            ContentComponent = <HomePage startQuiz={startQuiz} />;
    }

    return (
        <Layout 
            currentPage={currentPage} 
            setCurrentPage={setCurrentPage} 
            startQuiz={startQuiz}
        >
            {ContentComponent}
        </Layout>
    );
}

export default App;
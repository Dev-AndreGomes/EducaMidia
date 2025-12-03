// src/pages/QuizPage.jsx
import React from 'react';
import { Award, ArrowLeft, HelpCircle } from 'lucide-react';
import ContentPage from './ContentPage';

// Componente de Resultados
const ResultsPage = ({ score, quizQuestions, handleRestart }) => {
    const correctCount = quizQuestions.length * (score / 100);
    const totalQuestions = quizQuestions.length;

    return (
        <ContentPage title="Resultados do Quiz">
            <div className="max-w-4xl mx-auto space-y-8">
                <div className={`p-8 rounded-xl text-center shadow-xl ${score >= 60 ? 'bg-green-100 border-4 border-green-500' : 'bg-red-100 border-4 border-red-500'}`}>
                    <Award className={`w-16 h-16 mx-auto mb-4 ${score >= 60 ? 'text-green-600' : 'text-red-600'} animate-pulse`} />
                    <h3 className="text-4xl font-extrabold text-slate-800 mb-2">
                        Sua Pontuação: {score.toFixed(0)}%
                    </h3>
                    <p className="text-xl text-slate-700 font-semibold">
                        Você acertou {correctCount} de {totalQuestions} questões.
                    </p>
                    <button 
                        onClick={handleRestart}
                        className="mt-6 bg-indigo-600 text-white px-6 py-3 rounded-full font-bold hover:bg-indigo-700 transition-colors"
                    >
                        Tentar Novamente
                    </button>
                </div>
            </div>
        </ContentPage>
    );
};


// Componente Principal do Quiz
const QuizPage = ({ 
    quizQuestions, 
    currentQuestion, 
    selectedAnswers, 
    showResults, 
    handleAnswer, 
    nextQuestion, 
    getScore,
    handleRestart 
}) => {
    
    if (showResults) {
        return <ResultsPage score={getScore()} quizQuestions={quizQuestions} handleRestart={handleRestart} />;
    }

    if (quizQuestions.length === 0) {
        return (
            <ContentPage title="Quiz Avaliativo">
                <div className="text-center p-10 bg-white rounded-xl shadow-md">
                    <HelpCircle className="w-12 h-12 text-indigo-400 mx-auto mb-4" />
                    <p className="text-xl text-slate-700">
                        O quiz não foi iniciado. Clique em "Quiz Avaliativo" no menu lateral para começar.
                    </p>
                </div>
            </ContentPage>
        );
    }
    
    const q = quizQuestions[currentQuestion];
    const isAnswered = selectedAnswers[currentQuestion] !== null;
    const isLastQuestion = currentQuestion === quizQuestions.length - 1;

    return (
        <ContentPage title={`Questão ${currentQuestion + 1} de ${quizQuestions.length}`}>
            <div className="max-w-3xl mx-auto space-y-8">
                <div className="bg-white p-8 rounded-xl shadow-2xl border-t-4 border-indigo-600">
                    <p className="text-xl font-semibold text-slate-800 mb-6">
                        {q.question}
                    </p>

                    <div className="space-y-3">
                        {q.options.map((option, index) => (
                            <button
                                key={index}
                                onClick={() => handleAnswer(index)}
                                className={`w-full text-left p-4 rounded-lg border-2 transition-colors flex items-center gap-3
                                    ${selectedAnswers[currentQuestion] === index
                                        ? 'bg-indigo-100 border-indigo-600 font-bold text-indigo-800'
                                        : 'bg-slate-50 border-slate-300 hover:bg-slate-100'
                                    }`}
                            >
                                <span className={`w-6 h-6 rounded-full flex items-center justify-center text-white text-sm font-bold ${
                                    selectedAnswers[currentQuestion] === index ? 'bg-indigo-600' : 'bg-slate-400'
                                }`}>
                                    {String.fromCharCode(65 + index)}
                                </span>
                                {option}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="flex justify-end items-center">
                    <button
                        onClick={nextQuestion}
                        disabled={!isAnswered}
                        className={`px-8 py-3 rounded-full font-bold transition-all flex items-center gap-2
                            ${isAnswered
                                ? 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-lg hover:scale-105'
                                : 'bg-slate-300 text-slate-600 cursor-not-allowed'
                            }`}
                    >
                        {isLastQuestion ? (
                            <> <Award size={20} /> Ver Resultados </>
                        ) : (
                            <> Próxima Questão <ArrowLeft size={20} className="rotate-180"/> </>
                        )}
                    </button>
                </div>
            </div>
        </ContentPage>
    );
};

export default QuizPage;
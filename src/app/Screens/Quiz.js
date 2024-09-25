"use client"
import { useState } from 'react';


const questions = [
    {
        question: 'Which is the largest animal in the world?',
        answers: [
            { text: 'Shark', correct: false },
            { text: 'Blue Whale', correct: true },
            { text: 'Elephant', correct: false },
            { text: 'Giraffe', correct: false },
        ],
    },
    {
        question: 'Which is the smallest country in the world?',
        answers: [
            { text: 'Vatican City', correct: true },
            { text: 'Bhutan', correct: false },
            { text: 'Nepal', correct: false },
            { text: 'Shri Lanka', correct: false },
        ],
    },
    {
        question: 'What is the capital of Australia?',
        answers: [
            { text: 'Sydney', correct: false },
            { text: 'Canberra', correct: true },
            { text: 'Melbourne', correct: false },
            { text: 'Brisbane', correct: false },
        ],
    },
    {
        question: 'What is the fastest land animal?',
        answers: [
            { text: 'Lion', correct: false },
            { text: 'Cheetah', correct: true },
            { text: 'Tiger', correct: false },
            { text: 'Leopard', correct: false },
        ],
    },
    {
        question: 'Which planet is closest to the Sun?',
        answers: [
            { text: 'Earth', correct: false },
            { text: 'Venus', correct: false },
            { text: 'Mercury', correct: true },
            { text: 'Mars', correct: false },
        ],
    },
];


export default function Quiz() {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [selectedAnswer, setSelectedAnswer] = useState(null);

    const handleAnswerClick = (answer, index) => {
        setSelectedAnswer(index);
        if (answer.correct) {
            setScore(score + 1);
        }
    };

    const handleNextClick = () => {
        const nextQuestion = currentQuestionIndex + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestionIndex(nextQuestion);
            setSelectedAnswer(null);
        } else {
            setShowScore(true);
        }
    };

    const resetQuiz = () => {
        setScore(0);
        setCurrentQuestionIndex(0);
        setShowScore(false);
        setSelectedAnswer(null);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-white p-6">
            <div className="bg-white text-gray-900 p-10 rounded-3xl shadow-2xl w-full max-w-2xl space-y-6">
                <h1 className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-8">
                    Ultimate Quiz
                </h1>
                {showScore ? (
                    <div className="text-center space-y-6">
                        <h2 className="text-3xl font-bold">You scored {score} out of {questions.length}!</h2>
                        <button
                            className="mt-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 py-3 rounded-full hover:shadow-lg transform hover:scale-105 transition duration-500 ease-in-out"
                            onClick={resetQuiz}
                        >
                            Play Again
                        </button>
                    </div>
                ) : (
                    <div>
                        <h2 className="text-2xl mb-6 font-semibold text-center">
                            {questions[currentQuestionIndex].question}
                        </h2>
                        <div className="space-y-4">
                            {questions[currentQuestionIndex].answers.map((answer, index) => (
                                <button
                                    key={index}
                                    className={`w-full py-4 px-6 rounded-xl font-semibold text-left transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none ${selectedAnswer === null
                                        ? 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                                        : selectedAnswer === index
                                            ? answer.correct
                                                ? 'bg-green-500 text-white'
                                                : 'bg-red-500 text-white'
                                            : answer.correct
                                                ? 'bg-green-500 text-white'
                                                : 'bg-gray-100 text-gray-900'
                                        }`}
                                    onClick={() => handleAnswerClick(answer, index)}
                                    disabled={selectedAnswer !== null}
                                >
                                    {answer.text}
                                </button>
                            ))}
                        </div>
                        {selectedAnswer !== null && (
                            <div className="text-center mt-6">
                                <button
                                    className="mt-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 py-3 rounded-full hover:shadow-lg transform hover:scale-105 transition duration-500 ease-in-out"
                                    onClick={handleNextClick}
                                >
                                    Next
                                </button>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}

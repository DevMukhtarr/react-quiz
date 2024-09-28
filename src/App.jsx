import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [quizFinished, setQuizFinished] = useState(false);
  const [score, setScore] = useState(0);

  const quizQuestions = [
    {
      question: "What is the capital of France?",
      options: ["Paris", "London", "Berlin", "Madrid"],
      correctAnswer: "Paris"
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Earth", "Mars", "Jupiter", "Venus"],
      correctAnswer: "Mars"
    },
    {
      question: "Who wrote 'To Kill a Mockingbird'?",
      options: ["Harper Lee", "J.K. Rowling", "Ernest Hemingway", "Jane Austen"],
      correctAnswer: "Harper Lee"
    },
    {
      question: "What is the largest mammal in the world?",
      options: ["Elephant", "Blue Whale", "Giraffe", "Great White Shark"],
      correctAnswer: "Blue Whale"
    },
    {
      question: "Which element has the chemical symbol 'O'?",
      options: ["Oxygen", "Osmium", "Oxide", "Ozone"],
      correctAnswer: "Oxygen"
    }
  ];

  useEffect(() => {
    setUserAnswers(new Array(quizQuestions.length).fill(null));
  }, []);

  const handleAnswer = (answer) => {
    const newAnswers = [...userAnswers];
    newAnswers[currentQuestionIndex] = answer;
    setUserAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleFinish = () => {
    const newScore = userAnswers.reduce((acc, answer, index) => {
      if (answer === quizQuestions[index].correctAnswer) {
        return acc + 1;
      }
      return acc;
    }, 0);
    setScore(newScore);
    setQuizFinished(true);
  };

  const currentQuestion = quizQuestions[currentQuestionIndex];

  if (quizFinished) {
    return (
      <div className="quiz-app">
        <h1>Quiz Finished!</h1>
        <p>Your score: {score} out of {quizQuestions.length}</p>
        <button onClick={() => window.location.reload()}>Restart Quiz</button>
      </div>
    );
  }

  return (
    <div className="quiz-app">
      <h1>Quiz App</h1>
      <div className="question-card">
        <h2>Question {currentQuestionIndex + 1}</h2>
        <p>{currentQuestion.question}</p>
        <div className="options">
          {currentQuestion.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(option)}
              className={userAnswers[currentQuestionIndex] === option ? 'selected' : ''}
            >
              {option}
            </button>
          ))}
        </div>
        <div className="navigation">
          <button onClick={handlePrevious} disabled={currentQuestionIndex === 0}>
            Previous
          </button>
          {currentQuestionIndex === quizQuestions.length - 1 ? (
            <button onClick={handleFinish}>Finish</button>
          ) : (
            <button onClick={handleNext}>Next</button>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
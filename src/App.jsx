import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [answers, setAnwers] = useState([]);

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

  return (
    <>
      <h1>Quiz APP</h1>
      <div className="card">
        {/* <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button> */}
        <div className="question">

        </div>
        <div className='options'>

        </div>
        <button>
          Previous
        </button>
        <button>
          Next
        </button>
      </div>
    </>
  )
}

export default App
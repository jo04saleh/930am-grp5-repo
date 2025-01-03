import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


const Quiz = ({ questions }) => {
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const navigate = useNavigate();

  const handleAnswer = (index) => {
    setSelectedAnswer(index);
    if (index === questions[currentQuestion].correct) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
    } else {
      navigate("/result", { state: { score, total: questions.length } });
    }
  };

  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setSelectedAnswer(null);
    }
  };

  return (
    <div className="quiz-container">
      <h2 className="question">{questions[currentQuestion].question}</h2>
      <div className="answers">
        {questions[currentQuestion].answers.map((answer, index) => (
          <button
            key={index}
            className={selectedAnswer === index ? "selected" : ""}
            onClick={() => handleAnswer(index)}
          >
            {answer}
          </button>
        ))}
      </div>
      <div className="buttons-container">
        <button onClick={handleBack} disabled={currentQuestion === 0}>
          Back
        </button>
        <button onClick={handleNext} disabled={selectedAnswer === null}>
          {currentQuestion === questions.length - 1 ? "Finish" : "Next"}
        </button>
      </div>
    </div>
  );
};

export default Quiz;

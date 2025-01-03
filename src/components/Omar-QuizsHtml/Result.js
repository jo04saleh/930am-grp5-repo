import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Result = () => {
  const { state } = useLocation();
  const { score, total } = state || { score: 0, total: 0 };
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/");
  };

  const goToCssLearning = () => {
   
  };

  return (
    <div className="result">
      <h1>Quiz Result</h1>
      <p>
        You answered {score} out of {total} questions correctly!
      </p>
      <div className="buttons-container">
        <button onClick={goHome}>Go to Home</button>
        <button onClick={goToCssLearning} disabled>
          Learn CSS
        </button>
      </div>
    </div>
  );
};

export default Result;


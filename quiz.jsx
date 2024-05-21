import React, { useState } from 'react';

const quizQuestions = [
  {
    question: "Qual foi o estado brasileiro onde o funk se desenvolveu inicialmente?",
    options: ["São Paulo", "Rio de Janeiro", "Bahia", "Minas Gerais"],
    correctAnswer: "Rio de Janeiro",
    feedback: "O funk se desenvolveu inicialmente no Rio de Janeiro, principalmente nas favelas da cidade, e rapidamente se espalhou por todo o Brasil."
  },
  {
    question: "Quem é conhecido como um dos pioneiros do funk no Brasil?",
    options: ["MC Guimê", "MC Marcinho", "DJ Marlboro", "Anitta"],
    correctAnswer: "DJ Marlboro",
    feedback: "DJ Marlboro é considerado um dos pioneiros do funk no Brasil, popularizando o gênero e ajudando a levá-lo para um público mais amplo."
  },
  {
    question: "Qual é um dos temas frequentemente abordados nas letras das músicas de funk?",
    options: ["Amor e relacionamentos", "Política internacional", "Vida nas favelas", "Esportes"],
    correctAnswer: "Vida nas favelas",
    feedback: "As músicas de funk frequentemente abordam temas como a vida nas favelas, a luta diária, e as dificuldades enfrentadas pelas comunidades periféricas."
  }
];

function Quiz() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const currentQuestion = quizQuestions[currentQuestionIndex];

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmit = () => {
    if (selectedOption) {
      const correct = selectedOption === currentQuestion.correctAnswer;
      setIsCorrect(correct);
      setShowFeedback(true);
    }
  };

  const handleNextQuestion = () => {
    setSelectedOption('');
    setShowFeedback(false);
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
  };

  return (
    <div className="quiz">
      {currentQuestionIndex < quizQuestions.length ? (
        <>
          <h2>{currentQuestion.question}</h2>
          <form>
            {currentQuestion.options.map((option) => (
              <div key={option}>
                <label>
                  <input
                    type="radio"
                    value={option}
                    checked={selectedOption === option}
                    onChange={handleOptionChange}
                  />
                  {option}
                </label>
              </div>
            ))}
          </form>
          <button onClick={handleSubmit}>Submit</button>
          {showFeedback && (
            <div className="feedback">
              <p>{isCorrect ? 'Correto!' : 'Incorreto!'}</p>
              <p>{currentQuestion.feedback}</p>
              <button onClick={handleNextQuestion}>Próxima Pergunta</button>
            </div>
          )}
        </>
      ) : (
        <h2>Quiz Concluído!</h2>
      )}
    </div>
  );
}

export default Quiz;

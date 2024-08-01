"use client";

import QuestionQuizz from "@/components/QuestionQuizz";
import ResultatTotalJoueur from "@/components/ResultatTotalJoueur";
import { PointsContext } from "@/contexts/PointsContext";
import getAllQuestions from "@/queries/getAllQuestions";
import { Question } from "@/types/questions";
import { Button } from "@mui/material";
import { useEffect, useState } from "react";

const shuffle = (responses: string[]) => {
  return responses.sort(() => Math.random() - 0.5);
};
const Quizz = () => {
  const [questions, setQuestions] = useState<Question[]>(); //RIEN METTRE API - connait pas résultat au départ
  const [currentQuestionNumber, setCurrentQuestionNumber] = useState(0);
  const [isCorrect, setIsCorrect] = useState<boolean>();
  const [point, setPoint] = useState<number>(0);

  console.log(currentQuestionNumber + "oui");

  useEffect(() => {
    const initGetQuestions = async () => {
      setQuestions(await getAllQuestions());
    };
    initGetQuestions();
  }, []);

  // ____ LES HOOKS AU DEBUT

  if (questions === undefined) {
    return "chargement";
  }

  const currentQuestion = questions[currentQuestionNumber];

  console.log(questions[0]);

  const getResponses = () => {
    const newTabResponses = [];
    // Je récupère le correct awnser
    newTabResponses.push(currentQuestion.correct_answer);
    // Je récupère le correct non awnser
    currentQuestion.incorrect_answers.map((anwser) =>
      newTabResponses.push(anwser)
    );
    return newTabResponses;
    // .map((question) => newTabResponses.push(question.correct_answer) && question.incorrect_answers.map((reponse)=>newTabResponses.push(reponse)));
  };

  const responses = shuffle([
    currentQuestion.correct_answer,
    ...currentQuestion.incorrect_answers,
  ]);

  getResponses();
  console.log(getResponses());

  return (
    <>
      <PointsContext.Provider value={{ point: point, setPoint: setPoint }}>
        <>
          {/* {currentQuestionNumber !== questions.length && } */}
          <QuestionQuizz
            currentQuestion={currentQuestion}
            responses={responses}
            setPoint={setPoint}
            setIsCorrect={setIsCorrect}
            isCorrect={isCorrect}
            setCurrentQuestionNumber={setCurrentQuestionNumber}
            currentQuestionNumber={currentQuestionNumber}
            point={point}
            questions={questions}
          />
        </>
      </PointsContext.Provider>
    </>
  );
};

export default Quizz;

import { Question } from "@/types/questions";
import DescriptionQuestion from "./DescriptionQuestion";
import FinQuiz from "./FinQuiz";
import QuestionSuivante from "./QuestionSuivante";
import ResultatTotalJoueur from "./ResultatTotalJoueur";
import Resultats from "./Resultats";

type Props = {
  currentQuestion: {};
  responses: [];
  setPoint: (number: number) => {};
  setIsCorrect: (boolean: boolean) => {};
  isCorrect: boolean;
  setCurrentQuestionNumber: (number: number) => {};
  currentQuestionNumber: number;
  point: number;
  questions: Question[];
};

const QuestionQuizz = ({
  currentQuestion,
  responses,
  setPoint,
  setIsCorrect,
  isCorrect,
  setCurrentQuestionNumber,
  currentQuestionNumber,
  point,
  questions,
}: Props) => {
  const handleNextQuestion = () => {
    setCurrentQuestionNumber(currentQuestionNumber + 1);
    setIsCorrect(undefined);
  };

  return (
    <>
      {console.log(currentQuestion + "conditiion")}
      {currentQuestionNumber < questions.length ? (
        <>
          <DescriptionQuestion currentQuestion={currentQuestion} />
          <Resultats
            isCorrect={isCorrect}
            responses={responses}
            currentQuestion={currentQuestion}
            setPoint={setPoint}
            setIsCorrect={setIsCorrect}
          />
          <QuestionSuivante handleNextQuestion={handleNextQuestion} />
          <ResultatTotalJoueur
            isCorrect={isCorrect}
            point={point}
            questions={questions}
          />
        </>
      ) : (
        <FinQuiz
          point={point}
          questions={questions}
          setCurrentQuestionNumber={setCurrentQuestionNumber}
        />
      )}
    </>
  );
};

export default QuestionQuizz;

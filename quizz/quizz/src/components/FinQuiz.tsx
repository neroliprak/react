import { Button } from "@mui/material";

const FinQuiz = ({ point, questions, setCurrentQuestionNumber }) => {
  const handleRecommencer = () => {
    setCurrentQuestionNumber(0);
    console.log("NON");
  };

  return (
    <>
      <p>Bravo</p>
      <p>
        Voilà ton score = {point} / {questions.length}
      </p>
      <Button onClick={handleRecommencer}>
        Tu peux recommencer ton test stv
      </Button>
    </>
  );
};

export default FinQuiz;

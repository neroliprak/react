import { Button } from "@mui/material";

const QuestionSuivante = ({ handleNextQuestion }) => {
  return (
    <Button variant="contained" onClick={handleNextQuestion}>
      Passer à la question suivante
    </Button>
  );
};

export default QuestionSuivante;

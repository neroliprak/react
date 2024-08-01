import { PointsContext } from "@/contexts/PointsContext";
import { Button } from "@mui/material";
import { useContext } from "react";

const Resultats = ({
  responses,
  isCorrect,
  currentQuestion,
  setPoint,
  setIsCorrect,
}) => {
  const disabled = (isCorrect) => {
    if (isCorrect !== undefined) {
      return true;
    }
  };

  const handleClickResultat = (response) => {
    if (response === currentQuestion.correct_answer) {
      setPoint((point) => point + 1);
      setIsCorrect(true);
      return "Gagné";
    } else {
      setIsCorrect(false);
      return "Perdu";
    }
  };

  return (
    <>
      <ul>
        {responses.map((response, index) => (
          <li key={index}>
            <Button
              onClick={() => {
                handleClickResultat(response);
              }}
              disabled={disabled(isCorrect)}
            >
              {response}
            </Button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Resultats;

import { PointsContext } from "@/contexts/PointsContext";
import { useContext } from "react";

const ResultatTotalJoueur = ({ isCorrect, questions }) => {
  const { point } = useContext(PointsContext);

  const resultat = (isCorrect: boolean | undefined) => {
    if (isCorrect === undefined) {
      return " ";
    }
    if (isCorrect) {
      return " Bravo";
    }
    if (!isCorrect) {
      return " Dommage";
    }
  };

  return (
    <>
      {" "}
      {resultat(isCorrect)}
      <br />
      <br />
      Mon nombre de point : {point} / {questions.length}
    </>
  );
};

export default ResultatTotalJoueur;

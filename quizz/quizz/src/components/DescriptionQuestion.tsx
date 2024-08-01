const DescriptionQuestion = ({ currentQuestion }) => {
  return (
    <>
      {" "}
      La difficulté : {currentQuestion.difficulty}
      mes réponses : <br />
      <br />
      La catégorie : {currentQuestion.category}
      <br />
      <br />
      La question est donc : {currentQuestion.question}
      <br />
      <br />
    </>
  );
};

export default DescriptionQuestion;

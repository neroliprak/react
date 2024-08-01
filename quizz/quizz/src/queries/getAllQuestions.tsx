const data = {
  response_code: 0,
  results: [
    {
      type: "multiple",
      difficulty: "medium",
      category: "Entertainment: Japanese Anime &amp; Manga",
      question:
        "In the series JoJo&#039;s Bizarre Adventure, which main character makes the greatest number of recurring appearances?",
      correct_answer: "Jotaro Kujo",
      incorrect_answers: [
        "Giorno Giovanna",
        "Joseph Joestar",
        "Josuke Higashikata",
      ],
    },
    {
      type: "multiple",
      difficulty: "medium",
      category: "Entertainment: Japanese Anime &amp; Manga",
      question:
        "In &quot;A Certain Magical Index,&quot; what is Accelerator able to control?",
      correct_answer: "Vectors",
      incorrect_answers: ["Velocity", "Quantums", "Wormholes"],
    },
    {
      type: "multiple",
      difficulty: "medium",
      category: "Entertainment: Japanese Anime &amp; Manga",
      question:
        "In the anime Assassination Classroom what is the class that Korosensei teaches?",
      correct_answer: "Class 3-E",
      incorrect_answers: ["Class 3-A", "Class 3-B", "Class 3-D"],
    },
    {
      type: "multiple",
      difficulty: "medium",
      category: "Entertainment: Japanese Anime &amp; Manga",
      question:
        "What is the name of the main character of the anime &quot;One-Punch Man&quot;?",
      correct_answer: "Saitama",
      incorrect_answers: ["Genos", "Sonic", "King"],
    },
    {
      type: "multiple",
      difficulty: "medium",
      category: "Entertainment: Japanese Anime &amp; Manga",
      question:
        "In &quot;Highschool DxD&quot;, what is the name of the item some humans are born with?",
      correct_answer: "Sacred Gear",
      incorrect_answers: ["Imperial Arm", "Hallowed Relic", "Blessed Artifact"],
    },
    {
      type: "multiple",
      difficulty: "medium",
      category: "Entertainment: Japanese Anime &amp; Manga",
      question: "In &quot;Black Lagoon&quot;, what colour is Rock&#039;s tie?",
      correct_answer: "Teal",
      incorrect_answers: ["Crimson", "Dark Brown", "Black"],
    },
    {
      type: "multiple",
      difficulty: "medium",
      category: "Entertainment: Japanese Anime &amp; Manga",
      question:
        "Ikki Kurogane is known by what nickname at the beginning of &quot;Chivalry of a Failed Knight&quot;?",
      correct_answer: "Worst One",
      incorrect_answers: ["Another One", "Blazer", "Princess"],
    },
    {
      type: "multiple",
      difficulty: "medium",
      category: "Entertainment: Japanese Anime &amp; Manga",
      question: "In Haikyuu!!, who is not a member of Karasuno VBC?",
      correct_answer: "Shigeru Yahaba",
      incorrect_answers: [
        "Tadashi Yamaguchi",
        "Hisashi Kinoshita",
        "Kazuhito Narita",
      ],
    },
    {
      type: "multiple",
      difficulty: "medium",
      category: "Entertainment: Japanese Anime &amp; Manga",
      question:
        "In &quot;JoJo&#039;s Bizzare Adventure: Stardust Crusaders&quot;, what is the last name of the protagonist Jotaro?",
      correct_answer: "Kujo",
      incorrect_answers: ["Cujoh", "Joestar", "Higashikata"],
    },
    {
      type: "multiple",
      difficulty: "medium",
      category: "Entertainment: Japanese Anime &amp; Manga",
      question:
        "In JoJo&#039;s Bizarre Adventure, who says &quot;Yare yare daze&quot;?",
      correct_answer: "Jotaro Kujo",
      incorrect_answers: ["Joseph Joestar", "Jolyne Cujoh", "Koichi Hirose"],
    },
  ],
};
const getAllQuestions = async () => {
  //   const responses = await fetch(
  //     "https://opentdb.com/api.php?amount=10&category=31&difficulty=medium&type=multiple"
  //   );
  //   const jsonResponses = await responses.json();
  //   return jsonResponses.results;
  return data.results;
};

export default getAllQuestions;

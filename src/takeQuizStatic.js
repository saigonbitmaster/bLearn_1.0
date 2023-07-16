import * as React from "react";
import Box from "@mui/material/Box";
import Quiz from "./components/quiz";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import IconButton from "@mui/material/IconButton";
import ToolBar from "./components/toolBar";
import data from "./data/data";

export default function TakeQuiz(props) {
  const navigate = useNavigate();

  //props = {quizSets, timer, handleChange, quizSet}
  const quizSets = data.quizSets;
  let initQuizzes = data.quizzes.find((item) => item.id === 10);
  let initTimer = initQuizzes.length * 60;
  const [timer, resetTimer] = React.useState(initTimer);
  const [selectedQuizSet, setQuizSet] = React.useState(10);
  const [quizSet, setQuizzesSet] = React.useState(initQuizzes);
  const [answerSet, setState] = React.useState(quizSet);

  React.useEffect(() => {
    const interval =
      timer > 0 ? setInterval(() => resetTimer(timer - 1), 1000) : 0;

    return () => {
      clearInterval(interval);
    };
  }, [timer]);

  const handleQuizSetChange = (event) => {
    setQuizSet(event.target.value);
  };

  React.useEffect(() => {
    //sort quiz by id ASC
    let quiz = data.quizzes
      .find((item) => item.id === selectedQuizSet)
      .quiz.sort((a, b) => a.id - b.id);
    setQuizzesSet({
      ...data.quizzes.find((item) => item.id === selectedQuizSet),
      quiz: quiz,
    });
  }, [selectedQuizSet]);

  React.useEffect(() => {
    let newTimer = quizSet.quiz.length * 60;
    resetTimer(newTimer);
  }, [quizSet]);

  React.useEffect(() => {
    setState(quizSet);
  }, [quizSet]);

  const handleChange1 = (event) => {
    //quiz item
    let quizIndex = 0;
    let quizItem = answerSet.quiz.find((element, index) => {
      if (element.id == event.target.id) {
        quizIndex = index;
        return true;
      } else return false;
    });

    //find choice item & index to replace
    let choiceIndex = 0;
    let choiceItem = quizItem.choices.find((element, index) => {
      if (element.name === event.target.name) {
        choiceIndex = index;
        return true;
      } else return false;
    });

    let newItem = { ...choiceItem, value: event.target.checked };
    //reset choice to false if singleChoice = true
    let choices = quizItem.singleChoice
      ? quizItem.choices.map((item) => ({ ...item, value: false }))
      : quizItem.choices;
    choices.splice(choiceIndex, 1, newItem);

    //new quizItem
    let result =
      (quizItem.singleChoice && choiceItem.isRight && newItem.value) ||
      (!quizItem.singleChoice &&
        choices.filter((item) => item.value).length ===
          choices.filter((item) => item.isRight).length)
        ? true
        : false;
    let newQuizItem = { ...quizItem, choices, result };
    let quiz = answerSet.quiz;
    quiz.splice(quizIndex, 1, newQuizItem);
    setState((answerSet) => ({
      ...answerSet,
      quiz: quiz,
    }));
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <ToolBar
        quizSets={quizSets}
        timer={timer}
        handleChange={handleQuizSetChange}
        quizSet={selectedQuizSet}
      ></ToolBar>

      {answerSet.quiz
        ? answerSet.quiz.map((item) => (
            <Quiz handleChange={handleChange1} quiz={item}></Quiz>
          ))
        : null}

      <Button
        style={{ alignSelf: "center", marginBottom: 10 }}
        variant="outlined"
        onClick={() => navigate("result", { state: answerSet })}
        size="small"
      >
        View result
        <IconButton aria-label="goForward" size="small">
          <ArrowForwardIcon />
        </IconButton>
      </Button>
    </Box>
  );
}

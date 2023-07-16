import * as React from "react";
import Box from "@mui/material/Box";
import Quiz from "./components/quiz";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import IconButton from "@mui/material/IconButton";
import ToolBar from "./components/toolBar";
import axios from "axios";
import Typography from "@mui/material/Typography";

export default function TakeQuiz(props) {
  const API_URL = process.env.REACT_APP_API_URL
  const navigate = useNavigate();
  const [quizSets, setQuizSets] = React.useState([]);
  let initTimer = null;
  const [timer, resetTimer] = React.useState(initTimer);
  const [selectedQuizSet, setQuizSet] = React.useState(0);
  const [quizSet, setQuizzesSet] = React.useState([]);
  const [answerSet, setState] = React.useState(quizSet);

  React.useEffect(() => {
    const interval =
      timer > 0 ? setInterval(() => resetTimer(timer - 1), 1000) : 0;

    return () => {
      clearInterval(interval);
    };
  }, [timer]);

  React.useEffect(() => {
    axios
      .get(`${API_URL}/quizSets`, {})
      .then((result) => setQuizSets(result.data))
      .catch((err) => console.error(err))
      .finally(function () {
        // always executed
      });
  }, []);

  const handleQuizSetChange = (event) => {
    setQuizSet(event.target.value);
  };

  React.useEffect(() => {
    //fetch new quizzes
    const quizSetId =
      quizSets.length > 0
        ? quizSets.find((item) => item.value == selectedQuizSet)
        : { _id: null };

    quizSets.length > 0 &&
      axios
        .get(
          `${API_URL}/quizzes?filter={"quizSetId":${JSON.stringify(
            quizSetId._id
          )}}&range=[0,60]&sort=["createdAt","DESC"]`,
          {}
        )
        .then((result) => {
          let data = result.data.map((item, index) => ({
            ...item,
            id: item._id,
            index: index,
          }));

          setQuizzesSet({
            quiz: data,
            id: quizSetId._id,
            passedMessage: quizSetId.passedMessage,
            failedMessage: quizSetId.failedMessage,
          });
        })
        .catch((err) => console.error(err))
        .finally(function () {});
  }, [selectedQuizSet, quizSets]);

  React.useEffect(() => {
    let newTimer =
      quizSet.quiz && quizSet.quiz.length > 0 ? quizSet.quiz.length * 60 : null;
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

  if (quizSets.length === 0)
    return (
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Typography
          variant="subtitle2"
          gutterBottom
          style={{ color: "red", alignSelf: "center", marginTop: 20 }}
        >
          No data, please use cms to set up data first!
        </Typography>
      </Box>
    );

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
      {answerSet?.quiz?.length === 0 ? (
        <Typography
          variant="subtitle2"
          gutterBottom
          style={{ color: "red", alignSelf: "center", marginBottom: 10 }}
        >
          No quiz for this quizSet, please use cms to set up quiz data!
        </Typography>
      ) : (
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
      )}
    </Box>
  );
}

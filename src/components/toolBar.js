import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";
import { orange } from "@mui/material/colors";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import Box from "@mui/material/Box";

import QuizSetSelect from "./quizSetSelect";

export default function ToolBar(props) {
  //props = {quizSets, timer, handleChange, quizSet}
  const quizSets = props.quizSets;
  const quizSet = props.quizSet;
  const timer = props.timer;
  const handleChange = props.handleChange;

  //convert time in second to hh:mm:ss
  const convert = (time) => {
    if (time == null) {
      return "The session is started yet";
    }
    let result = time === 0 ? "Your session is ended" : null;
    if (time === 0) {
      return result;
    }
   
    var hours = Math.floor(time / 3600);
    hours = hours < 10 ? "0" + hours : hours;
    var minutes = Math.floor(time / 60);
    minutes = minutes < 10 ? "0" + minutes : minutes;
    var seconds = time - minutes * 60;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    result = hours + ":" + minutes + ":" + seconds;
    return result;
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <QuizSetSelect
        value={quizSet}
        quizSets={quizSets}
        handleChange={handleChange}
      ></QuizSetSelect>

      <Card sx={{ border: "0px", m: 3 }} variant="outlined">
        <CardHeader
          sx={{ padding: 0 }}
          avatar={
            <Avatar sx={{ bgcolor: orange[500], width: 24, height: 24 }}>
              <AccessTimeIcon />
            </Avatar>
          }
          subheader={convert(timer)}
        />
      </Card>
    </Box>
  );
}

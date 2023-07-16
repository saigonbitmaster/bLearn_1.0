import * as React from "react";
import Typography from "@mui/material/Typography";
import { useLocation } from "react-router-dom";
import Answer from "./components/answer";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import IconButton from "@mui/material/IconButton";

export default function CheckboxesGroup() {
  const state = useLocation().state;
  const navigate = useNavigate();

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      {" "}
      <Typography
        variant="subtitle2"
        gutterBottom
        textAlign="center"
        sx={{ fontWeight: "bold" }}
      >
        Your test result is: {state.quiz.filter((item) => item.result).length}/
        {state.quiz.length} 
        <br></br>

        {state.quiz.filter((item) => item.result).length / state.quiz.length >= 0.5  ? state.passedMessage  : state.failedMessage}

      </Typography>
      <Typography
        variant="subtitle1"
        gutterBottom
        textAlign="center"
      ></Typography>
      {state.quiz
        ? state.quiz.map((item) => <Answer quiz={item}></Answer>)
        : null}
      <Button
        style={{ alignSelf: "center", marginBottom: 10 }}
        variant="outlined"
        size="small"
        onClick={() => navigate("/", { state: state })}
        icon={<ArrowBackIcon />}
      >
        <IconButton aria-label="goBack" size="small">
          <ArrowBackIcon />
        </IconButton>
        Go back
      </Button>
    </Box>
  );
}

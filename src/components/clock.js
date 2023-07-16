import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";
import { orange } from "@mui/material/colors";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import Box from "@mui/material/Box";

import QuizSetSelect from "./quizSetSelect";

export default function Result() {
  const quizSets = [
    { value: 10, name: "General cardano" },
    { value: 20, name: "Haskell & plutus" },
    { value: 30, name: "General catalyst" },
  ];

  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
    setValue(3599);
  };

  const [value, setValue] = React.useState(3599);

  React.useEffect(() => {
    const interval =
      value > 0 ? setInterval(() => setValue(value - 1), 1000) : 0;

    return () => {
      clearInterval(interval);
    };
  }, [value]);

  const convert = (time) => {
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
        value={age}
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
          subheader={convert(value)}
        />
      </Card>
    </Box>
  );
}

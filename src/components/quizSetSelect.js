import * as React from "react";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function SelectQuizSet(props) {
  const handleChange = props.handleChange;
  const value = props.value;
  const quizSets = props.quizSets;

  return (
    <FormControl variant="standard" sx={{ m: 3, marginTop: 1, minWidth: 120 }}>
      <InputLabel id="simple-select-quiz">Select a quiz set</InputLabel>
      <Select
        labelId="select-quiz"
        id="select-quiz"
        value={value}
        onChange={handleChange}
        label="quiz"
      >
       
        {quizSets
          ? quizSets.map((item) => (
              <MenuItem value={item.value}>{item.name}</MenuItem>
            ))
          : null}
      </Select>
    </FormControl>
  );
}

import * as React from "react";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormHelperText from "@mui/material/FormHelperText";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from '@mui/material/TextField';

export default function CheckboxesGroup(props) {
  const handleChange = props.handleChange;

  const choices = props.quiz.choices; 
  return (
    <Grid container spacing={2}>
      <Grid
        item
        xs={6}
        textAlign="center"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Typography
          variant="subtitle1"
          gutterBottom
          sx={{ textDecoration: "underline" }}
        >
          quiz {props.quiz.index}
        </Typography>
        <Typography variant="subtitle1" gutterBottom align="left">
        <pre style={{ fontFamily: 'inherit' }}>
        {props.quiz.title}
    </pre>
        
        </Typography>
      </Grid>
      <Grid item xs={6} textAlign="left">
        <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
          <FormHelperText>
            {props.quiz.singleChoice
              ? "Select only one answer"
              : "Select all that apply"}
          </FormHelperText>
          <FormGroup>
            {choices.map((item) => (
              <FormControlLabel
                control={
                  <Checkbox
                    checked={item.value}
                    onChange={handleChange}
                    name={item.name}
                    id={item.id}
                  />
                }
                label={item.label}
              />
            ))}
          </FormGroup>
        </FormControl>
      </Grid>

      <Grid
        item
        xs={12}
        textAlign="center"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      ></Grid>
    </Grid>
  );
}

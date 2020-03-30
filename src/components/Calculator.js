import React from "react";
import { useForm } from "react-hook-form";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const Calculator = () => {
    const { handleSubmit, register, errors } = useForm();

    const onSubmit = values => {
        console.log(values);
    };

    return (
        <div className = "calculatorform">
            <form onSubmit={handleSubmit(onSubmit)}>

            <TextField
            label="Current Age"
            variant="outlined"
            name="age"
            type="text"
            inputRef={register({
              required: "Please enter your current age.",
              validate: value =>
              Number.isInteger(parseInt(value)) || "You must enter an integer."
            })}
            placeholder="Current Age"
          />
          <br/>
          <p>{errors.age && errors.age.message}</p>
          <br />

          <TextField
            label="Expected Retirement Age"
            variant="outlined"
            name="retirementage"
            type="text"
            inputRef={register({
              required: "Please enter your expected retirement age.",
              validate: value =>
              Number.isInteger(parseInt(value)) || "You must enter an integer."
            })}
            placeholder="Expected Retirement Age"
          />
          <br/>
          <p>{errors.retirementage && errors.retirementage.message}</p>
          <br />

          <TextField
            label="Monthly Contribution"
            variant="outlined"
            name="monthlycontribution"
            type="text"
            inputRef={register({
              required: "Please enter your monthly contribution.",
              validate: value =>
              Number.isInteger(parseInt(value)) || "You must enter an integer."
            })}
            placeholder="Expected Retirement Age"
          />
          <br/>
          <p>{errors.monthlycontribution && errors.monthlycontribution.message}</p>
          <br />

          <Button variant="contained" color="primary" type="submit">
            Calculate
          </Button>

            </form>
        </div>
    )
};

export default Calculator;
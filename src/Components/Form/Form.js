import styles from "./Form.module.css";
import Button from "./Components/Button";
import Input from "./Components/Input";
import { useState } from "react";
const Form = (props) => {
  const [isValid, setIsValid] = useState(true);

  const formSubmitHandler = (event) => {
    event.preventDefault();
    setIsValid(true);
    const userInput = {
      "current-savings": event.target["current-savings"].value,
      "yearly-contribution": event.target["yearly-contribution"].value,
      "expected-return": event.target["expected-return"].value,
      duration: event.target["duration"].value,
    };

    for (var i in userInput) {
      if (userInput[i].length === 0) {
        setIsValid(false);
      }
    }

    props.addYearlyData(userInput);
  };

  const resetHandler = () => {
    setIsValid(true);
    props.onReset();
  };

  return (
    <form
      className={`${styles.form} ${!isValid && styles.invalid} `}
      onSubmit={formSubmitHandler}
    >
      <div className={styles["input-group"]}>
        <Input htmlFor="current-savings" type="number" id="current-savings">
          Current Savings ($)
        </Input>
        <Input
          htmlFor="yearly-contribution"
          type="number"
          id="yearly-contribution"
        >
          Yearly Savings ($)
        </Input>
      </div>
      <div className={styles["input-group"]}>
        <Input htmlFor="expected-return" type="number" id="expected-return">
          Expected Interest (%, per year)
        </Input>

        <Input htmlFor="duration" type="number" id="duration">
          Investment Duration (years)
        </Input>
      </div>
      <h6>{!isValid && "Some feilds are empty!"}</h6>
      <p className={styles.actions}>
        <Button type="reset" className="buttonAlt" onClick={resetHandler}>
          Reset
        </Button>
        <Button type="submit" className="button">
          Calculate
        </Button>
      </p>
    </form>
  );
};

export default Form;

import styles from "./App.module.css";
import Display from "./components/Display";
import ButtonContainer from "./components/ButtonContainer";
import { useState } from "react";

function App() {
  const [calVal, setCalVal] = useState("");

  const onButtonClick = (buttonText) => {
    if (buttonText === "C") {
      setCalVal("");
    } else if (buttonText === "=") {
      const result = eval(calVal);
      setCalVal(result);
    } else {
      const newDisplayValue = calVal + buttonText;
      setCalVal(newDisplayValue);
    }
  };

  return (
    <center>
      <div id={styles.calculator}>
        <h1 className={styles.calHead}>React Calculator</h1>
        <Display displayValue={calVal} />
        <ButtonContainer onButtonClick={onButtonClick} />
      </div>
    </center>
  );
}

export default App;

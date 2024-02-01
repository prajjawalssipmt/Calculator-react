import styles from "./ButtonContainer.module.css";

const ButtonContainer = ({ onButtonClick }) => {
  const buttonNames = [
    "+",
    "1",
    "2",
    "3",
    "-",
    "4",
    "5",
    "6",
    "*",
    "7",
    "8",
    "9",
    "/",
    "=",
    "0",
    ".",
    "%",
    "00",
    "C",
  ];

  return (
    <div id={styles.btnContainer}>
      {buttonNames.map((buttonName) => (
        <button
          key={buttonName}
          className={styles.btn}
          onClick={() => onButtonClick(buttonName)}
        >
          {buttonName}
        </button>
      ))}
    </div>
  );
};
export default ButtonContainer;

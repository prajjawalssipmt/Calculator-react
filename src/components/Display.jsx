import styles from "./Display.module.css";

const Display = ({ displayValue }) => {
  return (
    <input id={styles.display} type="text" value={displayValue} readOnly>
      {/* {displayValue} */}
    </input>
  );
};

export default Display;

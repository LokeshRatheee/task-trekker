import styles from "./input.module.css";

export default function Input({placeholder}) {
  return (
    <>
      <input
        id="name"
        className={styles.inputBox}
        type="text"
        placeholder={placeholder}
        name="name"
        required
      />
    </>
  );
}

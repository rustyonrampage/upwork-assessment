import React from "react";
import styles from "./index.module.css";

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
};

function Input({ label, name, type, ...props }: Props) {
  return (
    <div className={styles.container}>
      {label && (
        <label htmlFor={name} className={styles.label}>
          {label}
        </label>
      )}
      <input
        name={name}
        {...props}
        className={`${styles.input} ${props.className || ""}`}
      />
    </div>
  );
}

export default Input;

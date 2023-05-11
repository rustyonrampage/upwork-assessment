import React from "react";
import styles from "./index.module.css";

type Props = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label?: string;
};

function TextArea({ label, name, rows = 5, ...props }: Props) {
  return (
    <div className={styles.container}>
      {label && (
        <label htmlFor={name} className={styles.label}>
          {label}
        </label>
      )}
      <textarea
        name={name}
        {...props}
        rows={rows}
        className={`${styles.input} ${props.className || ""}`}
      />
    </div>
  );
}

export default TextArea;

import React from "react";
import styles from "./index.module.css";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  icon?: React.ReactNode;
};

function Button({ className, children, ...props }: Props) {
  return (
    <button {...props} className={`${styles.button} ${className || ""}`}>
      {children}
    </button>
  );
}


export default Button;

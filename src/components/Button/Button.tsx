import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import React from "react";
import styles from "./Button.module.scss";

interface ButtonProps {
  variant: "default" | "icon";
  label: string;
  icon?: React.ReactNode;
  disabled?: boolean;
  onClick?: () => void;
}

const Button = ({ variant, label, icon, disabled, onClick }: ButtonProps) => {
  return (
    <button
      className={`${styles.button} ${styles[variant]} `}
      onClick={onClick}
      disabled={disabled}
    >
      {icon && <MagnifyingGlassIcon className={styles.icon} />}
      <span>{label}</span>
    </button>
  );
};

export default Button;

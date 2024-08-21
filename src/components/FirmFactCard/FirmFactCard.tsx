import Button from "../Button/Button";
import React from "react";
import styles from "./FirmFactCard.module.scss";

interface FirmFactCardProps {
  variant: "default" | "border";
  icon?: boolean;
  description: string;
  disabled?: boolean;
}

const FirmFactCard = ({
  variant,
  icon,
  description,
  disabled,
}: FirmFactCardProps) => {
  return (
    <div className={`${styles.card} ${styles[variant]}`}>
      <Button
        variant={icon ? "icon" : "default"}
        label={description}
        icon={<span>🔍</span>}
        disabled={disabled ? true : false}
      />
    </div>
  );
};

export default FirmFactCard;

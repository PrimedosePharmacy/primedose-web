import React from "react";
import { ButtonInterface } from "../interfaces/index";

const Button: React.FC<ButtonInterface> = ({
  children,
  onClick,
  variant = "default",
  size = "md",
  disabled,
  ...rest
}) => {
  return (
    <button
      className={
        `btn ${variant} ${size} font-medium` + (disabled ? " disabled" : "")
      }
      onClick={onClick}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;

import "./Button.css";
import type { ReactNode } from "react";

interface ButtonProps {
  title?: string;
  children?: ReactNode;
  variant?: "default" | "icon";
  onClick?: () => void;
  backgroundColor?: string;
  color?: string;
}

export function Button({
  title,
  children,
  variant = "default",
  onClick,
  backgroundColor,
  color
}: ButtonProps) {
  return (
    <button className={`btn ${variant === "icon" ? "btn-icon" : ""}`} onClick={onClick} style={{ backgroundColor: backgroundColor, color: color }}>
      {children ?? title}
    </button>
  );
}
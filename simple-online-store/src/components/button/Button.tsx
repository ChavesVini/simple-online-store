import "./Button.css";
import type { ReactNode } from "react";

interface ButtonProps {
  title?: string;
  children?: ReactNode;
  variant?: "default" | "icon";
  onClick?: () => void;
}

export function Button({
  title,
  children,
  variant = "default",
  onClick,
}: ButtonProps) {
  return (
    <button className={`btn ${variant === "icon" ? "btn-icon" : ""}`} onClick={onClick}>
      {children ?? title}
    </button>
  );
}
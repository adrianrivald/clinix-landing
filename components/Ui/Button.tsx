import React, { ButtonHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface ButtonParams {
  title: string;
  onClick?: () => void;
  isPrimary?: boolean;
  className?: string;
  bgColorPrimary?: string;
  bgColorSecondary?: string;
}

type ButtonProps = ButtonParams & ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({
  title,
  isPrimary,
  className,
  onClick,
  bgColorPrimary = "bg-primary-500",
  bgColorSecondary = "bg-white",
  ...rest
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={twMerge(
        "rounded-lg px-4 py-2 border-2 min-h-12",
        isPrimary
          ? `${bgColorPrimary} border-primary-500 text-white`
          : `${bgColorSecondary} border-primary-500 text-primary-500`,
        className
      )}
      {...rest}
    >
      {title}
    </button>
  );
}

import * as React from "react";
import { cn } from "@/lib/utils"; // only if you're using className utility

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline";
  size?: "default" | "icon";
}

export const Button: React.FC<ButtonProps> = ({
  className = "",
  children,
  variant = "default",
  size = "default",
  ...props
}) => {
  const base = "inline-flex items-center justify-center rounded-md transition-colors font-medium";

  const variants: Record<string, string> = {
    default: "bg-blue-600 text-white hover:bg-blue-700",
    outline: "border border-gray-300 text-gray-800 hover:bg-gray-100",
  };

  const sizes: Record<string, string> = {
    default: "px-4 py-2",
    icon: "p-2 w-10 h-10",
  };

  return (
    <button
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
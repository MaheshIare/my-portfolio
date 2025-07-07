import * as React from "react";

export const Button = ({ className = '', children, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) => (
  <button
    className={`px-4 py-2 rounded-md font-medium transition-colors bg-blue-600 text-white hover:bg-blue-700 ${className}`}
    {...props}
  >
    {children}
  </button>
);
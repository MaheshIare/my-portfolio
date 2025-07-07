import * as React from "react";

export const Tabs = ({ value, onValueChange, children, className }: any) => {
  return <div className={`tabs ${className}`}>{children}</div>;
};

export const TabsList = ({ children, className }: any) => (
  <div className={`flex space-x-2 ${className}`}>{children}</div>
);

export const TabsTrigger = ({ value, children, onClick, className = "" }: any) => (
  <button
    className={`px-4 py-2 rounded bg-slate-800 text-white hover:bg-slate-700 ${className}`}
    onClick={() => onClick?.(value)}
  >
    {children}
  </button>
);

export const TabsContent = ({ value, children, className }: any) => (
  <div className={`mt-4 ${className}`}>{children}</div>
);
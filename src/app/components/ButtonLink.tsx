import React from 'react';

interface ButtonLinkProps{
  children: React.ReactNode,
  className?: string
};


const ButtonLink = ({children, className = ""}: ButtonLinkProps) => {
  return (
    <button
      className={`p-2 rounded bg-blue-500 text-white hover:bg-blue-600 ${className}`}
    >
      {children}
    </button>
  );
};

export default ButtonLink
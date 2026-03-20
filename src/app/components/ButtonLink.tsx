'use client';

import React from 'react';

interface ButtonLinkProps{
  children: React.ReactNode,
  className?: string
  onClick?: React.MouseEventHandler<HTMLButtonElement>
};


const ButtonLink = ({children, className = "", onClick}: ButtonLinkProps) => {
  return (
    <button
      onClick={onClick}
      className={`p-2 rounded bg-blue-500 text-white hover:bg-blue-600 ${className}`}
    >
      {children}
    </button>
  );
};

export default ButtonLink
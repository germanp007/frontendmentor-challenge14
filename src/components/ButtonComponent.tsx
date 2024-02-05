import React, { ReactNode } from "react";

type ButtonComponentProps = {
  children: ReactNode;
};

const ButtonComponent: React.FC<ButtonComponentProps> = ({ children }) => {
  return (
    <button className="bg-CharcoalGrey rounded-md w-full h-14 font-bold text-white hover:bg-Tomato transition-colors duration-500">
      {children}
    </button>
  );
};

export default ButtonComponent;

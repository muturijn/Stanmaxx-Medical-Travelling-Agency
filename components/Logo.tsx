import React from 'react';

interface LogoProps {
  className?: string;
  vertical?: boolean; // Option to stack logo for footer or large displays
}

const Logo: React.FC<LogoProps> = ({ className = "h-12", vertical = false }) => {
  return (
    <div className={`flex ${vertical ? 'flex-col justify-center' : 'flex-row items-center'} select-none ${className}`}>
      {/* 
         Text-Only Logo 
         Inherits text color from parent (allows for Green in header, White in footer)
      */}
      <div className={`flex flex-col ${vertical ? 'items-center' : 'justify-center'}`}>
         <span className={`font-sans font-extrabold uppercase tracking-tighter leading-none ${vertical ? 'text-4xl' : 'text-3xl'}`}>
           Stanmaxx
         </span>
         <span className="text-[0.65rem] tracking-[0.35em] uppercase font-bold mt-1 opacity-90 pl-1">
           Medical Agency
         </span>
      </div>
    </div>
  );
};

export default Logo;
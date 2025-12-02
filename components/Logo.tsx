import React from 'react';

// In a real scenario, we would import the image file. 
// Since we are in a code generation environment, we will use a reliable placeholder 
// that represents the user's uploaded image concept (Green brackets with text).

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "h-12" }) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {/* 
        This is a CSS recreation of the logo concept provided:
        Green Code Brackets <> with a central element and the name.
      */}
      <div className="relative flex items-center justify-center w-10 h-10 bg-gradient-to-br from-primary-800 to-primary-600 rounded-lg shadow-md border border-primary-400">
        <span className="text-white font-bold text-xl tracking-tighter">
          {`<>`}
        </span>
        <div className="absolute h-6 w-1 bg-accent-400 transform rotate-12 opacity-80 mix-blend-overlay"></div>
      </div>
      
      <div className="flex flex-col justify-center">
        <span className="font-bold text-xl tracking-wide text-gray-800 leading-none">
          STAN<span className="text-primary-600">MAXX</span>
        </span>
        <span className="text-[0.6rem] uppercase tracking-widest text-gray-500 font-semibold">
          Medical Travelling Agency
        </span>
      </div>
    </div>
  );
};

export default Logo;
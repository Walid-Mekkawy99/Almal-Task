import React from 'react';

export const BlurBackground: React.FC = () => {
  return (
    <div className="absolute inset-0">
      <div className="absolute opacity-50 mix-blend-difference blur-[2px] h-[1738px] left-[-150px] top-[-221px] w-[1840px] bg-white" />
      <div
        className="absolute left-[17px] top-[23px] w-[349px] h-[349px] rounded-full bg-blue-500/50 blur-[200px]"
        style={{
          background: 'rgba(3, 140, 217, 0.50)',
          filter: 'blur(200px)'
        }}
      />
    </div>
  );
};

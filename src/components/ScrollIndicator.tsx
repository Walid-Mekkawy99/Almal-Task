import React from 'react';

export const ScrollIndicator: React.FC = () => {
  return (
    <div className="absolute left-2/4 top-[689px] -translate-x-2/4">
      <div
        dangerouslySetInnerHTML={{
          __html:
            "<svg width=\"22\" height=\"24\" viewBox=\"0 0 22 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" class=\"down-arrow\" style=\"width: 24px; height: 22px; transform: rotate(90deg); fill: #373737\"> <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M22 13.025L19.172 10.178L12.996 16.354L12.996 0L9.004 0L9.004 16.354L2.828 10.178L0 13.025L11 24L22 13.025Z\" fill=\"#373737\"></path> </svg>",
        }}
      />
    </div>
  );
};

import React from 'react';

export const BlurEffect: React.FC = () => {
  return (
    <div>
      <div
        dangerouslySetInnerHTML={{
          __html:
            "<svg id=\"28:86\" width=\"1100\" height=\"956\" viewBox=\"0 0 1100 956\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" class=\"blur-circle\" style=\"width: 300px; height: 300px; border-radius: 300px; background: rgba(51,157,255,0.53); filter: blur(200px); position: absolute; left: 529px; top: 256px; z-index: 2\"> <g filter=\"url(#filter0_f_28_86)\"> <circle cx=\"550\" cy=\"406\" r=\"150\" fill=\"#339DFF\" fill-opacity=\"0.53\"></circle> </g> <defs> <filter id=\"filter0_f_28_86\" x=\"0\" y=\"-144\" width=\"1100\" height=\"1100\" filterUnits=\"userSpaceOnUse\" color-interpolation-filters=\"sRGB\"> <feFlood flood-opacity=\"0\" result=\"BackgroundImageFix\"></feFlood> <feBlend mode=\"normal\" in=\"SourceGraphic\" in2=\"BackgroundImageFix\" result=\"shape\"></feBlend> <feGaussianBlur stdDeviation=\"200\" result=\"effect1_foregroundBlur_28_86\"></feGaussianBlur> </filter> </defs> </svg>",
        }}
      />
    </div>
  );
};

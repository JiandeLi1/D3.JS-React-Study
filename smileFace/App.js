import React from 'react'
import { arc } from 'd3'

const width = 960*2;
const height = 500*2;
const centerX = width/2;
const centerY = height/2;
const radius = 200;
const strokeWidth = 10;
const eyeRadius = 30;
const eyeOffsetX = 90;
const eyeOffsetY = 70;
const mouthArc = arc()
  .innerRadius(130)
  .outerRadius(150)
  .startAngle(Math.PI /2)
  .endAngle(Math.PI * 3/2)

export default function App() {
  return (
    <svg width={width} height={height}>
      <g transform={`translate(${centerX}, ${centerY})`}>
        <circle
        r={radius}
        fill='yellow'
        stroke='black'
        stroke-width={ strokeWidth}
      />

      <circle
        cx={eyeOffsetX}
        cy={-eyeOffsetY}
        r={eyeRadius}
      />
      <circle
        cx={-eyeOffsetX}
        cy={-eyeOffsetY}
        r={eyeRadius}
      />
      <path d={mouthArc()} />
      </g>
    </svg>
  )
}


import React from 'react'
import Face from './container/Face';
import { range } from 'd3'

const width = 150;
const height = 150;

const array = range(72)

export default function App() {
  return (
    <div>
      {
        array.map(()=>(
        <Face
          width={width}
          height={height}
          radius={width / 2.2}
          strokeWidth={ 10}
          eyeRadius={1+ Math.random()*15}
          eyeOffsetX={width / 5}
          eyeOffsetY={height / 5}
          mouthRadius={width / 5}
          mouthWidth={1+(width / 15) * Math.random()}
          />
        ))
      }
    </div>
  )
}


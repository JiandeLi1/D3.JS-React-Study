import React from 'react'
import Eye from '../component/Eye'
import Mouth from '../component/Mouth'
import BackGroundCircle from '../component/BackGroundCircle'
import FaceContainer from './FaceContainer'

export default function Face({
    width,
    height,
    radius,
    strokeWidth,
    eyeOffsetX,
    eyeOffsetY,
    eyeRadius,
    mouthRadius,
    mouthWidth
}) {
    return (
        <FaceContainer width={width} height={ height}>
            <BackGroundCircle
                    radius={radius}
                    fill='yellow'
                    stroke='black'
                    strokeWidth={ strokeWidth}
                />
                <Eye
                    eyeOffsetX={eyeOffsetX}
                    eyeOffsetY={eyeOffsetY}
                    eyeRadius={ eyeRadius }
                />
                <Mouth
                    mouthRadius={ mouthRadius }
                    mouthWidth={ mouthWidth }
                />
        </FaceContainer>    
            
    )
}

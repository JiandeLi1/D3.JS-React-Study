import React from 'react'

export default function Eye({ eyeOffsetX, eyeOffsetY, eyeRadius}) {
    return (
        <>
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
        </>
    )
}

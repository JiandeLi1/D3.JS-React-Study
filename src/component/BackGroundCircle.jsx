import React from 'react'

export default function BackGroundCircle({ radius, fill, stroke,strokeWidth}) {
    return (
        <circle
        r={radius}
        fill={ fill }
        stroke={ stroke }
        stroke-width={ strokeWidth}
      />
    )
}

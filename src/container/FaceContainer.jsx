import React from 'react'

export default function FaceContainer({children,width,height}) {
    return (
        <svg width={ width } height={ height }>
            <g transform={`translate(${width / 2}, ${height / 2})`}>
                { children }
            </g>
        </svg>
    )
}

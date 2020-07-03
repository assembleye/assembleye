import React, {
    useRef,
} from "react"

import {Seat} from "./Seat"

export const Canvas = props => {
    const canvasRef = useRef(null)    
    return <canvas ref={canvasRef} {...props}>
        <Seat canvasRef={canvasRef} />
    </canvas>
}
import React, {
    useRef,
    useEffect,
    MutableRefObject,
} from "react"
import {render} from "react-dom"
import usePaint from "./usePaint"

const Canvas = props => {
    const canvasRef = useRef(null)    
    return <canvas ref={canvasRef} {...props}>
        <Seat canvasRef={canvasRef} />
    </canvas>
}
const Seat = ({canvasRef}: {canvasRef: MutableRefObject<HTMLCanvasElement>}) => {
    usePaint(canvasRef, context => {
        context.fillStyle = "#000000"
        context.fillRect(0, 0, context.canvas.width, context.canvas.height)
    })
    return null
}


render(
    <Canvas width="150" height="150"></Canvas>,
    document.getElementById("app")
)
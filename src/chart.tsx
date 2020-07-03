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
    usePaint(canvasRef, ctx => {
        ctx.beginPath()
        ctx.arc(ctx.canvas.width / 2, ctx.canvas.height / 2, 50, 0, Math.PI * 2)
        ctx.fill()
    })
    return null
}


render(
    <Canvas width="150" height="150"></Canvas>,
    document.getElementById("app")
)
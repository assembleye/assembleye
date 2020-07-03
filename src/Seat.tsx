import {MutableRefObject} from "react"
import usePaint from "./usePaint"

export const Seat = ({canvasRef}: {canvasRef: MutableRefObject<HTMLCanvasElement>}) => {
    usePaint(canvasRef, ctx => {
        ctx.beginPath()
        ctx.arc(ctx.canvas.width / 2, ctx.canvas.height / 2, 50, 0, Math.PI * 2)
        ctx.fill()
    })
    return null
}
import React, {
    useEffect,
    MutableRefObject,
} from "react"

export default (canvasRef: MutableRefObject<HTMLCanvasElement>, painter: (context: CanvasRenderingContext2D) => void) => {
    useEffect(() => {
        const canvas = canvasRef.current
        const context = canvas.getContext("2d")
        painter(context)
    })
    return null
}
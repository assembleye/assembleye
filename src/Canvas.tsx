import React, {
    useRef,
} from "react"

import styled from "styled-components"
import { useWindowSize } from "@react-hook/window-size"
import {Seat} from "./Seat"

const FullCanvas = styled.canvas`
    position: fixed;
    left: 0;
    top: 0;
`
export const Canvas = props => {
    const canvasRef = useRef(null)
    const [width, height] = useWindowSize()
    return <FullCanvas width={width} height={height} ref={canvasRef} {...props}>
        <Seat canvasRef={canvasRef} />
    </FullCanvas>
}
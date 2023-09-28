/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback } from "react"
import ReactCanvasConfetti from "react-canvas-confetti"

import { useConfetti } from "./context"

const canvasStyles: React.CSSProperties = {
  position: "fixed",
  pointerEvents: "none",
  width: "100%",
  height: "100%",
  top: 0,
  left: 0,
}

export function Confetti() {
  const { refAnimationInstance } = useConfetti()

  const getInstance = useCallback((instance: any) => {
    refAnimationInstance.current = instance
  }, [])

  return <ReactCanvasConfetti refConfetti={getInstance} style={canvasStyles} />
}

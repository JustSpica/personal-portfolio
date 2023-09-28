import React, { createContext, useCallback, useContext, useRef } from "react"

interface ConfettiContextProps {
  fire: () => void
  refAnimationInstance: React.MutableRefObject<any>
}

const ConfettiContext = createContext<ConfettiContextProps | null>(null)

export interface ConfettiProviderProps {
  children: React.ReactNode
}

export function ConfettiProvider({ children }: ConfettiProviderProps) {
  const refAnimationInstance = useRef<any>(null)

  const makeShot = useCallback((particleRatio: any, opts: any) => {
    refAnimationInstance.current?.({
      ...opts,
      origin: { y: 0.7 },
      particleCount: Math.floor(200 * particleRatio),
    })
  }, [])

  const fire = useCallback(() => {
    makeShot(0.25, {
      spread: 26,
      startVelocity: 55,
    })

    makeShot(0.2, {
      spread: 60,
    })

    makeShot(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8,
    })

    makeShot(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2,
    })

    makeShot(0.1, {
      spread: 120,
      startVelocity: 45,
    })
  }, [makeShot])

  return (
    <ConfettiContext.Provider value={{ fire, refAnimationInstance }}>
      {children}
    </ConfettiContext.Provider>
  )
}

export function useConfetti() {
  const context = useContext(ConfettiContext)

  if (!context) {
    throw new Error("useConfetti must be inside <ConfettiProvider />")
  }

  return context
}

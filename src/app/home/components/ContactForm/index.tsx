"use client"

import { ConfettiProvider } from "@/components/Confetti/context"
import * as ToastPrimitive from "@radix-ui/react-toast"

import { Form } from "./Form"

export function ContactForm() {
  return (
    <section>
      <header className="mb-6 w-full">
        <h2 className="text-center text-2xl font-semibold text-gray-800">
          Conte-me sobre o que você precisa👋
        </h2>
        <h3 className="mt-1 text-center text-sm text-gray-400">
          Compartilhe sua ideia e proposta e veja a mágica acontecer 🧙‍♂️✨
        </h3>
      </header>

      <ToastPrimitive.Provider swipeDirection="down">
        <ConfettiProvider>
          <Form />
        </ConfettiProvider>

        <ToastPrimitive.Viewport className="fixed right-0 top-0 z-50 w-full p-4 md:w-[420px]" />
      </ToastPrimitive.Provider>
    </section>
  )
}

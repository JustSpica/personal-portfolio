"use client"

import { ConfettiProvider } from "@/components/Confetti/context"

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

      <ConfettiProvider>
        <Form />
      </ConfettiProvider>
    </section>
  )
}

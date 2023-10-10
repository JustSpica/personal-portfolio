"use client"
import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { Controller, useForm } from "react-hook-form"
import * as zod from "zod"

import { Confetti } from "@/components/Confetti/"
import { useConfetti } from "@/components/Confetti/context"
import { Button, Input, TextArea } from "@/components/Form"
import * as Select from "@/components/Form/Select"
import { Toast } from "@/components/Toast"

import { sendEmail } from "@/services/email"

import { subjectList } from "./subject_list"

const contactFormSchema = zod.object({
  name: zod.string().min(1, { message: "Required" }),
  email: zod.string().optional(),
  subject: zod.string().min(1, { message: "Required" }),
  message: zod.string().min(1, { message: "Required" }),
})

type ContactFormType = zod.infer<typeof contactFormSchema>

export function Form() {
  const [successToast, setSuccessToast] = useState(false)
  const [errorToast, setErrorToast] = useState(false)

  const { fire } = useConfetti()

  const {
    control,
    handleSubmit,
    register,
    formState: { isSubmitting },
  } = useForm<ContactFormType>({
    resolver: zodResolver(contactFormSchema),
  })

  async function handleSendContact(data: ContactFormType) {
    try {
      await sendEmail(data)

      setErrorToast(true)

      fire()
    } catch (error) {
      setErrorToast(true)

      throw new Error(String(error))
    }
  }

  return (
    <>
      <form
        className="flex flex-col gap-4"
        onSubmit={handleSubmit(handleSendContact)}
      >
        <section className="flex flex-col gap-4 lg:grid lg:grid-cols-2">
          <Input
            required
            label="Nome"
            placeholder="Seu nome"
            {...register("name")}
          />
          <Input
            label="Email"
            placeholder="Seuemail@exemplo.com"
            {...register("email")}
          />
        </section>

        <Controller
          name="subject"
          control={control}
          render={({ field: { onChange, value } }) => (
            <Select.Root value={value} onValueChange={onChange}>
              <Select.Trigger
                label="Assunto"
                placeholder="Projeto Front-end"
                required
              />
              <Select.Content>
                {subjectList.map((subjet) => (
                  <Select.Item key={subjet.label} value={subjet.value}>
                    {subjet.label}
                  </Select.Item>
                ))}
              </Select.Content>
            </Select.Root>
          )}
        />

        <TextArea
          required
          label="Mensagem"
          placeholder="Me diga sobre sua proposta"
          {...register("message")}
        />

        <Button disabled={isSubmitting} type="submit">
          Enviar
        </Button>
      </form>

      <Toast
        open={successToast}
        onOpenChange={(open) => {
          setSuccessToast(open)
        }}
        title="Formulário enviado!"
        description="Seu formulário foi enviado com sucesso."
        variant={{ status: "success" }}
      />

      <Toast
        open={errorToast}
        onOpenChange={(open) => {
          setErrorToast(open)
        }}
        title="Algo de errado aconteceu!"
        description="Erro ao enviar os dados do formulário."
        variant={{ status: "error" }}
      />

      <Confetti />
    </>
  )
}

import * as EmailPrimitive from "@react-email/components"

/* @ts-expect-error Declaration types file expect Typescript 5.x */
import { CodeSimple } from "@phosphor-icons/react/dist/ssr"

interface ContactEmailProps {
  name: string
  email?: string
  subject: string
  message: string
}

export default function ContactEmail({
  message,
  name,
  subject,
  email,
}: ContactEmailProps) {
  return (
    <EmailPrimitive.Tailwind>
      <EmailPrimitive.Html>
        <EmailPrimitive.Head />
        <EmailPrimitive.Preview>
          ✨ Parece que {name} lhe enviou uma proposta pelo seu formulário de
          contato! ✨
        </EmailPrimitive.Preview>

        <EmailPrimitive.Body className="bg-white">
          <EmailPrimitive.Container
            className="mx-auto my-10 max-w-2xl rounded 
            border border-solid border-gray-200 p-8"
          >
            <EmailPrimitive.Section
              className="mt-8 flex justify-center 
              text-gray-800"
            >
              <CodeSimple size={48} weight="bold" />
            </EmailPrimitive.Section>

            <EmailPrimitive.Heading
              className="text-center font-sans text-2xl 
              font-normal text-gray-800"
            >
              Alguém está te <strong>chamando</strong> 👋✉
            </EmailPrimitive.Heading>

            <EmailPrimitive.Text className="font-sans text-gray-800">
              Olá Guilherme,
            </EmailPrimitive.Text>

            <EmailPrimitive.Text className="font-sans text-gray-800">
              <strong>{name}</strong>
              {!!email && (
                <>
                  {" "}
                  (
                  <EmailPrimitive.Link
                    className="text-blue-600 underline"
                    href={`mailto:${email}`}
                  >
                    {email}
                  </EmailPrimitive.Link>
                  )
                </>
              )}{" "}
              lhe mandou uma solicitação com o seguinte assunto:{" "}
              <strong>{subject}</strong>.
            </EmailPrimitive.Text>

            <EmailPrimitive.Text className="font-sans text-gray-800">
              Aqui está a mensagem que <strong>{name}</strong> lhe enviou:
            </EmailPrimitive.Text>

            <EmailPrimitive.Section className="rounded border border-solid border-gray-200 p-4">
              <EmailPrimitive.Text className="m-0 font-sans leading-relaxed text-gray-800">
                {message}
              </EmailPrimitive.Text>
            </EmailPrimitive.Section>
          </EmailPrimitive.Container>
        </EmailPrimitive.Body>
      </EmailPrimitive.Html>
    </EmailPrimitive.Tailwind>
  )
}

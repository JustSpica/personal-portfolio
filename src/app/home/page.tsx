import { findReposByTopic } from "@/services/repos"

import { ContactForm } from "./components/ContactForm"
import { Profile } from "./components/Profile"
import { Repo } from "./components/Repo"

export default async function Home() {
  const repos = await findReposByTopic("personal")

  return (
    <section className="h-screen">
      <header className="h-40 w-full bg-gray-950" />
      <main className="min-h-[calc(100%-160px)] bg-gray-50 px-6 pb-6 lg:px-24 lg:pb-24">
        <Profile />

        <span className="my-6 block h-px w-full bg-gray-200" />

        <section className="mt-3 lg:grid lg:grid-cols-[0.3fr_0.7fr]">
          <h2 className="mb-2 font-bold text-gray-800">Sobre mim</h2>

          <section className="flex flex-col gap-2">
            <p className="text-sm leading-relaxed text-gray-800">
              Sou apenas um Desenvolvedor Front-end apaixonado pela área na qual
              tenho dedicado meu últimos 2 anos na criação de diversas
              aplicações end-to-end.
            </p>
            <p className="text-sm leading-relaxed text-gray-800">
              A nivel profissional, já participei de diversos projetos de
              escalas regionais e nacionais, sempre preservando por uma boa
              organização de código, e reconciliando com a satisfação do
              cliente.
            </p>
            <p className="text-sm leading-relaxed text-gray-800">
              No meu trabalho atual, sou responsável pelas criações de
              interfaces de um CRM automotivo que atende mais de 35 mil pessoas
              diariamente.
            </p>
          </section>
        </section>

        <span className="my-6 block h-px w-full bg-gray-200" />

        <section className="lg:grid lg:grid-cols-[0.3fr_0.7fr]">
          <h2 className="mb-2 font-bold text-gray-800">Projetos pessoais</h2>

          <div className="flex flex-col gap-4 md:grid md:grid-cols-2">
            {repos.map((repo) => (
              <Repo key={repo.name} repo={repo} />
            ))}
          </div>
        </section>

        <span className="my-6 block h-px w-full bg-gray-200" />

        <section className="lg:grid lg:grid-cols-[0.3fr_0.7fr]">
          <h2 className="mb-2 font-bold text-gray-800">Bora conversar ?</h2>

          <ContactForm />
        </section>
      </main>
    </section>
  )
}

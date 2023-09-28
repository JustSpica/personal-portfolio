"use client"

import { GithubLogo, LinkedinLogo } from "@phosphor-icons/react"

export function FavoriteLinks() {
  return (
    <section className="flex gap-2">
      <a
        className="rounded-full bg-zinc-900 p-2 text-zinc-50"
        href="https://github.com/JustSpica"
        target="_blank"
      >
        <GithubLogo size={24} />
      </a>

      <a
        className="rounded-full bg-blue-500 p-2 text-zinc-50"
        href="https://www.linkedin.com/in/guilhermespica"
        target="_blank"
      >
        <LinkedinLogo size={24} />
      </a>
    </section>
  )
}

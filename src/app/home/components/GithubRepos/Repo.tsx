"use client"
import { Star } from "@phosphor-icons/react"

import type { GithubRepo } from "@/@types/github"

import { Button } from "@/components/Form"
import { Chip } from "@/components/Chip"

import { formatRepoTitle } from "@/utils/format-repo-title"

export interface RepoProps {
  repo: GithubRepo
}

export function Repo({ repo }: RepoProps) {
  const hasDeployed = !!repo.homepage
  const hasFinished = repo.topics.includes("finished")

  return (
    <section className="rounded-lg border border-gray-200 bg-gray-50 shadow-sm">
      <section className="p-4">
        <header className="flex items-center">
          <div className="rounded-full bg-emerald-100 p-3">
            <Star className="text-emerald-600" size={20} weight="fill" />
          </div>

          <div className="ml-3 flex flex-col items-start gap-1">
            <strong className="text-gray-800">
              {formatRepoTitle(repo.name)}
            </strong>
            <Chip variant={{ color: hasFinished ? "finished" : "progress" }}>
              {hasFinished ? "Finalizado" : "Em andamento"}
            </Chip>
          </div>
        </header>

        <p className="mt-4 overflow-hidden text-ellipsis whitespace-nowrap text-sm">
          {repo.description}
        </p>
      </section>

      <footer className="flex justify-end gap-2 border-t border-gray-200 p-4">
        <Button variant={{ type: "text" }} asChild>
          <a href={repo.html_url} target="_blank">
            For devs
          </a>
        </Button>
        {hasDeployed && (
          <Button variant={{ type: "fill" }} asChild>
            <a href={repo.homepage} target="_blank">
              Ver projeto
            </a>
          </Button>
        )}
      </footer>
    </section>
  )
}

export function Skeleton() {
  return (
    <section className="rounded-lg border border-gray-200 bg-gray-50 shadow-sm">
      <section className="p-4">
        <header className="flex items-center">
          <div className="h-11 w-11 animate-pulse rounded-full bg-gray-200" />

          <div className="ml-3 flex flex-col items-start gap-1">
            <span className="h-6 w-60 animate-pulse rounded-lg bg-gray-200" />
            <span className="h-6 w-24 animate-pulse rounded-lg bg-gray-200" />
          </div>
        </header>

        <span className="mt-4 block h-5 w-full animate-pulse rounded-lg bg-gray-200" />
      </section>

      <footer className="flex justify-end gap-2 border-t border-gray-200 p-4">
        <span className="h-9 w-20 animate-pulse rounded-lg bg-gray-200" />
        <span className="h-9 w-20 animate-pulse rounded-lg bg-gray-200" />
      </footer>
    </section>
  )
}

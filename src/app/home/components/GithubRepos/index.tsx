"use client"
import { useQuery } from "@tanstack/react-query"
import { v4 as uuid } from "uuid"

import { findReposByTopic } from "@/services/repos"

import { Repo, Skeleton } from "./Repo"

export function GithubRepos() {
  const { data: githubRepos, isLoading } = useQuery({
    queryKey: ["github-repos-query"],
    queryFn: async () => await findReposByTopic("personal"),
  })

  return (
    <div className="flex flex-col gap-4 md:grid md:grid-cols-2">
      {isLoading
        ? Array.from({ length: 4 }, () => <Skeleton key={uuid()} />)
        : githubRepos?.map((repo) => <Repo key={repo.name} repo={repo} />)}
    </div>
  )
}

import type { GithubRepo } from "@/@types/github"

import { api } from "@/lib/axios"

export type TopicsType = "personal" | "work"

export async function findReposByTopic(topic: TopicsType) {
  try {
    const response = await api.get<GithubRepo[]>(`/repos?topic=${topic}`)

    return response.data
  } catch (error) {
    throw new Error(`an unexpected error happened: ${String(error)}`)
  }
}

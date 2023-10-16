import type { GithubRepo } from "@/@types/github"

export type TopicsType = "personal" | "work"

export async function findReposByTopic(topic: TopicsType) {
  try {
    const response = await fetch(`api/repos?topic=${topic}`, {
      method: "GET",
    })

    return (await response.json()) as GithubRepo[]
  } catch (error) {
    throw new Error(`an unexpected error happened: ${String(error)}`)
  }
}

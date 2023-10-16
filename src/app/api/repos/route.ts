import { type NextRequest, NextResponse } from "next/server"

import type { GithubRepo } from "@/@types/github"

export async function GET(request: NextRequest) {
  try {
    const data = await fetch("https://api.github.com/users/JustSpica/repos", {
      next: {
        revalidate: 10,
      },
    })
    const repos = (await data.json()) as GithubRepo[]

    const topic = request.nextUrl.searchParams.get("topic")

    const filteredReposByTopic = repos.filter((repo) => {
      return repo.topics.includes(String(topic))
    })

    return NextResponse.json(filteredReposByTopic)
  } catch (error) {
    return NextResponse.json({ message: String(error) }, { status: 500 })
  }
}

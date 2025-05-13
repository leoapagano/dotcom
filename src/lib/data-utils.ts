import { getCollection, type CollectionEntry } from 'astro:content'

export async function getAllPosts(): Promise<CollectionEntry<'blog'>[]> {
  const posts = await getCollection('blog')
  return posts
    .filter((post) => !post.data.draft)
    .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf())
}

export async function getRecentPosts(
  count: number,
): Promise<CollectionEntry<'blog'>[]> {
  const posts = await getAllPosts()
  return posts.slice(0, count)
}

export async function getAdjacentPosts(currentId: string): Promise<{
  prev: CollectionEntry<'blog'> | null
  next: CollectionEntry<'blog'> | null
}> {
  const posts = await getAllPosts()
  const currentIndex = posts.findIndex((post) => post.id === currentId)

  if (currentIndex === -1) {
    return { prev: null, next: null }
  }

  return {
    next: currentIndex > 0 ? posts[currentIndex - 1] : null,
    prev: currentIndex < posts.length - 1 ? posts[currentIndex + 1] : null,
  }
}

export async function getAllTags(): Promise<Map<string, number>> {
  const posts = await getAllPosts()

  return posts.reduce((acc, post) => {
    post.data.tags?.forEach((tag) => {
      acc.set(tag, (acc.get(tag) || 0) + 1)
    })
    return acc
  }, new Map<string, number>())
}

export async function getSortedTags(): Promise<
  { tag: string; count: number }[]
> {
  const tagCounts = await getAllTags()

  return [...tagCounts.entries()]
    .map(([tag, count]) => ({ tag, count }))
    .sort((a, b) => {
      const countDiff = b.count - a.count
      return countDiff !== 0 ? countDiff : a.tag.localeCompare(b.tag)
    })
}

export function groupPostsByYear(
  posts: CollectionEntry<'blog'>[],
): Record<string, CollectionEntry<'blog'>[]> {
  return posts.reduce(
    (acc: Record<string, CollectionEntry<'blog'>[]>, post) => {
      const year = post.data.date.getFullYear().toString()
      ;(acc[year] ??= []).push(post)
      return acc
    },
    {},
  )
}

export async function getPostsByTag(
  tag: string,
): Promise<CollectionEntry<'blog'>[]> {
  const posts = await getAllPosts()
  return posts.filter((post) => post.data.tags?.includes(tag))
}

export async function getAllProjects(): Promise<CollectionEntry<"portfolio">[]> {
    return await getCollection("portfolio")
}

export async function getSortedTools(): Promise<{ tool: string; count: number }[]> {
    const projects = await getAllProjects()
    const toolCounts: Record<string, number> = {}

    projects.forEach((project) => {
        (project.data.tools || []).forEach((tool) => {
            toolCounts[tool] = (toolCounts[tool] || 0) + 1
        })
    })

    return Object.entries(toolCounts)
        .map(([tool, count]) => ({ tool, count }))
        .sort((a, b) => {
            // Sort by count (descending)
            if (b.count !== a.count) {
                return b.count - a.count
            }
            // If counts are equal, sort alphabetically (ascending)
            return a.tool.localeCompare(b.tool)
        })
}

export function sortProjects(projects: CollectionEntry<"portfolio">[]): CollectionEntry<"portfolio">[] {
  return projects.sort((a, b) => {
    const endDateA = a.data.endDate ? new Date(a.data.endDate) : new Date()
    const endDateB = b.data.endDate ? new Date(b.data.endDate) : new Date()

    // Compare by endDate (descending)
    const endDateComparison = endDateB.getTime() - endDateA.getTime()
    if (endDateComparison !== 0) {
      return endDateComparison
    }

    // If endDates are equal, compare by startDate (ascending)
    const startDateA = new Date(a.data.startDate)
    const startDateB = new Date(b.data.startDate)
    return startDateB.getTime() - startDateA.getTime()
  })
}

export function getProjectsByTool(
  projects: CollectionEntry<"portfolio">[],
): Record<string, CollectionEntry<"portfolio">[]> {
  const grouped: Record<string, CollectionEntry<"portfolio">[]> = {}

  // Group projects by tools
  projects.forEach((project) => {
    (project.data.tools || []).forEach((tool) => {
      if (!grouped[tool]) grouped[tool] = []
      grouped[tool].push(project)
    })
  })

  // Sort projects within each tool group
  Object.keys(grouped).forEach((tool) => {
    grouped[tool] = sortProjects(grouped[tool])
  })

  return grouped
}

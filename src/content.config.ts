import { glob } from "astro/loaders"
import { defineCollection, z } from "astro:content"

const blog = defineCollection({
	loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/archive" }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			date: z.coerce.date(),
			image: image().optional(),
			tags: z.array(z.string()).optional(),
			draft: z.boolean().optional(),
		}),
})

const portfolio = defineCollection({
	loader: glob({ pattern: "**/*.md", base: "./src/content/portfolio" }),
	schema: ({ image }) =>
		z.object({
			name: z.string(),
			description: z.string(),
			tools: z.array(z.string()).optional(),
			image: image().optional(),
			link: z.string().url().optional(),
			startDate: z.coerce.date(),
			endDate: z.coerce.date().optional(),
		}),
})

export const collections = { blog, portfolio }

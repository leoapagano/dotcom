import type { IconMap, SocialLink, Site } from "@/types"

export const SITE: Site = {
	title: "Leo Pagano",
	description:
		"I'm currently a rising junior at the University of Connecticut studying Computer Science and Engineering.",
	href: "https://leoapagano.com",
	locale: "en-US",
	featuredPostCount: 3,
	postsPerPage: 10,
}

export const NAV_LINKS: SocialLink[] = [
	{
		href: "/archive",
		label: "Archive",
	},
	{
		href: "/portfolio",
		label: "portfolio",
	},
	{
		href: "/contact",
		label: "contact me",
	},
]

export const SOCIAL_LINKS: SocialLink[] = [
	{
		href: "https://github.com/leoapagano",
		label: "GitHub",
	},
	{
		href: "https://linkedin.com/in/leoapagano",
		label: "LinkedIn",
	},
	{
		href: "/rss.xml",
		label: "RSS",
	},
]

export const ICON_MAP: IconMap = {
	Website: "lucide:globe",
	GitHub: "lucide:github",
	LinkedIn: "lucide:linkedin",
	Twitter: "lucide:twitter",
	Email: "lucide:mail",
	RSS: "lucide:rss",
}

export const TOOLS_ICON_MAP: IconMap = {
	Astro: "simple-icons:astro",
	Bash: "simple-icons:gnubash",
	CSS: "simple-icons:css3",
	"GitHub Actions": "simple-icons:github",
	JavaScript: "simple-icons:javascript",
	Linux: "simple-icons:linux",
	OOP: "lucide:layers",
	Python: "simple-icons:python",
	React: "simple-icons:react",
	TailwindCSS: "simple-icons:tailwindcss",
	TypeScript: "simple-icons:typescript",
}

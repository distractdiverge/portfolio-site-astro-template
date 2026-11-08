import { getCollection, type CollectionEntry } from 'astro:content';

export type Project = CollectionEntry<'projects'>;

/** "Most recent" everywhere: lastUpdated, falling back to startedDate. */
export const getUpdated = (project: Project): Date =>
  project.data.lastUpdated ?? project.data.startedDate;

const byUpdatedDesc = (a: Project, b: Project) =>
  getUpdated(b).getTime() - getUpdated(a).getTime();

/** All projects, most recently updated first. */
export async function getProjects(): Promise<Project[]> {
  return (await getCollection('projects')).sort(byUpdatedDesc);
}

/** Pinned projects first, then the most recently updated unpinned ones, up to `count`. */
export async function getFeaturedProjects(count = 2): Promise<Project[]> {
  const all = await getProjects(); // already sorted most-recent-first
  const pinned = all.filter((p) => p.data.pinned);
  const rest = all.filter((p) => !p.data.pinned);
  return [...pinned, ...rest].slice(0, count);
}

const monthYear = new Intl.DateTimeFormat('en-US', {
  month: 'short',
  year: 'numeric',
  timeZone: 'UTC', // dates parse as UTC midnight, so format in UTC to avoid off-by-one
});

export const formatMonthYear = (date: Date): string => monthYear.format(date);

// Import all markdown files in the posts directory as Svelte components
export const postFiles = import.meta.glob('../content/posts/*.md', { eager: true });

/**
 * @param {string} str
 */
function normalizeSlug(str) {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '') // remove non-alphanumeric except spaces and hyphens
    .replace(/\s+/g, '-')         // replace spaces with hyphens
    .replace(/-+/g, '-')           // collapse multiple hyphens
    .replace(/^-+|-+$/g, '');      // trim hyphens
}

/**
 * Get all blog posts, sorted by date descending
 * @returns {Array<{ title: string, description: string, date: string, slug: string, type?: string, tags?: string[], component: any }>}
 */
export function getAllPosts() {
  const posts = Object.entries(postFiles)
    .map(([path, mod]) => {
      /** @type {{ metadata?: any, default: any }} */
      const module = /** @type {any} */ (mod);
      const metadata = module.metadata || {};
      const rawSlug = metadata.slug || path.split('/').pop()?.replace(/\.md$/, '') || '';
      return {
        ...metadata,
        slug: normalizeSlug(rawSlug),
        component: module.default
      };
    })
    .filter(post => post.title && post.date); // Only include posts with required metadata

  posts.sort((a, b) => {
    const dateA = a.date ? new Date(a.date).getTime() : 0;
    const dateB = b.date ? new Date(b.date).getTime() : 0;
    return dateB - dateA;
  });

  return posts.map(post => ({
    ...post,
    date: post.date.replace(/-/g, '.')
  }));
}

/**
 * Get a single post by slug
 * @param {string} slug
 * @returns {object | undefined}
 */
export function getPostBySlug(slug) {
  const posts = getAllPosts();
  return posts.find(post => post.slug === normalizeSlug(slug));
} 
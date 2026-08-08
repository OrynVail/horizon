import { getPostBySlug } from '$lib/horizon/posts.js';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
  const { slug } = params;

  if (!slug) throw error(404, 'Post not found');

  const post = getPostBySlug(slug);

  if (!post) throw error(404, 'Post not found');

  // Only return serializable metadata, not the component itself
  const { component, ...metadata } = post as { component?: any; [key: string]: any };

  return {
    post: metadata
  };
}; 
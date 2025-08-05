import { kv } from '@vercel/kv';

export const config = {
  runtime: 'edge',
};

export default async function handler(req) {
  const views = await kv.incr('page_views');

  return new Response(JSON.stringify({ views }), {
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

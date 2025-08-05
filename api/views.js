export const config = {
    runtime: 'edge',
  };
  
  export default async function handler(req) {
    const apiUrl = process.env.KV_REST_API_URL;
    const apiToken = process.env.KV_REST_API_TOKEN;
  
    const response = await fetch(`${apiUrl}/incr/page_views`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiToken}`,
        'Content-Type': 'application/json',
      },
    });
  
    const data = await response.json();
  
    return new Response(JSON.stringify({ count: data.result }), {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
  
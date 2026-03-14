import type { VercelRequest, VercelResponse } from '@vercel/node';

function extractBestImage(html: string): string | null {
  const jsonLdMatches = html.matchAll(
    /<script[^>]+type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi,
  );
  for (const match of jsonLdMatches) {
    try {
      const data = JSON.parse(match[1]);
      const imgs: unknown = data.image ?? data.images;
      if (Array.isArray(imgs) && imgs.length > 0) {
        const candidate = (imgs[1] ?? imgs[0]) as string;
        if (typeof candidate === 'string' && candidate.startsWith('http')) return candidate;
      }
      if (typeof imgs === 'string' && imgs.startsWith('http')) return imgs;
    } catch {
    }
  }

  const ogMatch =
    html.match(/<meta[^>]+property=["']og:image["'][^>]+content=["']([^"']+)["']/i) ??
    html.match(/<meta[^>]+content=["']([^"']+)["'][^>]+property=["']og:image["']/i);
  if (ogMatch?.[1]) return ogMatch[1];

  return null;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const url = req.query.url as string;
  if (!url) return res.status(400).json({ imageUrl: null });

  try {
    const response = await fetch(url, {
      headers: { 'User-Agent': 'Mozilla/5.0 (compatible; Googlebot/2.1)' },
      signal: AbortSignal.timeout(5000),
    });
    const html = await response.text();
    const imageUrl = extractBestImage(html);
    res.setHeader('Cache-Control', 's-maxage=86400, stale-while-revalidate');
    res.json({ imageUrl });
  } catch {
    res.json({ imageUrl: null });
  }
}

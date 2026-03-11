import type { VercelRequest, VercelResponse } from '@vercel/node';

const URLS: Record<string, string | undefined> = {
  video: process.env.VIDEO_SHEET_URL,
  recomendacoes: process.env.RECOMMENDATIONS_SHEET_URL,
};

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const type = req.query.type as string;
  const url = URLS[type];

  if (!url) {
    return res.status(400).json({ error: 'invalid type' });
  }

  try {
    const response = await fetch(url);
    const csv = await response.text();
    res.setHeader('Cache-Control', 's-maxage=10800, stale-while-revalidate');
    res.setHeader('Content-Type', 'text/csv');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.send(csv);
  } catch {
    res.status(500).json({ error: 'failed to fetch sheet' });
  }
}

import { useEffect, useState } from 'react';

const CACHE_TTL = 3 * 60 * 60 * 1000; // 3h

interface CacheEntry {
  data: string[][];
  timestamp: number;
}

const inFlight = new Map<string, Promise<string[][]>>();

export type SheetType = 'video' | 'recomendacoes';

export function useSheetData(type: SheetType, cacheKey: string) {
  const [data, setData] = useState<string[][]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const cached = localStorage.getItem(cacheKey);
    if (cached) {
      try {
        const entry: CacheEntry = JSON.parse(cached);
        if (Date.now() - entry.timestamp < CACHE_TTL) {
          setData(entry.data);
          setLoading(false);
          return;
        }
      } catch {
      }
    }

    const url = `/api/sheet?type=${type}`;

    let promise = inFlight.get(type);
    if (!promise) {
      promise = fetch(url)
        .then((r) => {
          if (!r.ok || !r.headers.get('content-type')?.includes('text/csv')) {
            throw new Error(`Not a CSV response (${r.status})`);
          }
          return r.text();
        })
        .then((csv) => {
          const rows = parseCSV(csv);
          const entry: CacheEntry = { data: rows, timestamp: Date.now() };
          localStorage.setItem(cacheKey, JSON.stringify(entry));
          return rows;
        })
        .finally(() => inFlight.delete(type));
      inFlight.set(type, promise);
    }

    promise
      .then((rows) => setData(rows))
      .catch(() => {
        if (cached) {
          try {
            const entry: CacheEntry = JSON.parse(cached);
            setData(entry.data);
          } catch { }
        }
      })
      .finally(() => setLoading(false));
  }, [type, cacheKey]);

  return { data, loading };
}

function parseCSV(csv: string): string[][] {
  const rows: string[][] = [];
  const lines = csv.split('\n');
  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed) continue;
    rows.push(parseCSVLine(trimmed));
  }
  return rows;
}

function parseCSVLine(line: string): string[] {
  const fields: string[] = [];
  let current = '';
  let inQuotes = false;
  for (let i = 0; i < line.length; i++) {
    const ch = line[i];
    if (ch === '"') {
      if (inQuotes && line[i + 1] === '"') {
        current += '"';
        i++;
      } else {
        inQuotes = !inQuotes;
      }
    } else if (ch === ',' && !inQuotes) {
      fields.push(current.trim());
      current = '';
    } else {
      current += ch;
    }
  }
  fields.push(current.trim());
  return fields;
}

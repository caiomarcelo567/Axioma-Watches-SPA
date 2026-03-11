import { useEffect, useState } from 'react';

export function useOgImage(storeUrl: string | undefined, overrideUrl?: string) {
  const [imageUrl, setImageUrl] = useState<string | null>(overrideUrl ?? null);

  useEffect(() => {
    if (overrideUrl) {
      setImageUrl(overrideUrl);
      return;
    }
    if (!storeUrl) return;

    const key = `og_${storeUrl}`;
    const cached = sessionStorage.getItem(key);
    if (cached !== null) {
      setImageUrl(cached || null);
      return;
    }

    fetch(`/api/og-image?url=${encodeURIComponent(storeUrl)}`)
      .then((r) => r.json())
      .then(({ imageUrl: url }: { imageUrl: string | null }) => {
        sessionStorage.setItem(key, url ?? '');
        setImageUrl(url ?? null);
      })
      .catch(() => sessionStorage.setItem(key, ''));
  }, [storeUrl, overrideUrl]);

  return imageUrl;
}

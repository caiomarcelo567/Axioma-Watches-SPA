import { useState, useRef, useEffect, useCallback } from 'react';
import { Box, Typography, Skeleton, Tooltip, IconButton } from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import CheckIcon from '@mui/icons-material/Check';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { useScrollReveal, revealSx } from '../hooks/useScrollReveal';
import { useLanguage } from '../contexts/LanguageContext';
import { useRecommendations } from '../hooks/useRecommendations';
import type { Watch } from '../hooks/useRecommendations';
import { useOgImage } from '../hooks/useOgImage';

function GalleryItem({ w }: { w: Watch }) {
  const imageUrl = useOgImage(w.storeUrl, w.imageUrl);
  const { t, lang } = useLanguage();
  const description = lang === 'en' && w.descriptionEn ? w.descriptionEn : w.description;
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (!w.coupon) return;
    const fallback = () => {
      const ta = document.createElement('textarea');
      ta.value = w.coupon!;
      ta.style.cssText = 'position:fixed;top:0;left:0;opacity:0;pointer-events:none';
      document.body.appendChild(ta);
      ta.focus();
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
    };
    if (navigator.clipboard?.writeText) {
      navigator.clipboard.writeText(w.coupon).catch(fallback);
    } else {
      fallback();
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <Box>
      {copied && (
        <Box
          sx={{
            position: 'fixed',
            bottom: { xs: 20, md: 32 },
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 9999,
            backgroundColor: 'rgba(13,14,17,0.96)',
            border: '1px solid rgba(201,168,76,0.4)',
            borderRadius: '8px',
            px: 3,
            pt: 1.5,
            pb: 1.25,
            boxShadow: '0 8px 32px rgba(0,0,0,0.6)',
            pointerEvents: 'none',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, justifyContent: 'center', mb: 1 }}>
            <CheckIcon sx={{ fontSize: '0.8rem', color: 'success.main' }} />
            <Typography sx={{ fontSize: '0.72rem', letterSpacing: '0.14em', color: 'primary.main', fontFamily: '"Inter", sans-serif', fontWeight: 600 }}>
              {t.recommendations.copied}
            </Typography>
          </Box>
          <Box
            sx={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              height: '2px',
              backgroundColor: 'primary.main',
              '@keyframes countdownBar': {
                from: { width: '100%' },
                to: { width: '0%' },
              },
              animation: 'countdownBar 2.5s linear forwards',
            }}
          />
        </Box>
      )}

      <Box
        component={w.storeUrl ? 'a' : 'div'}
        href={w.storeUrl || undefined}
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          display: 'block',
          position: 'relative',
          aspectRatio: '1/1',
          textDecoration: 'none',
          clipPath: 'inset(0 round 8px)',
          '@media (hover: hover)': {
            '&:hover .watch-img': {
              transform: 'scale(1.05)',
              filter: 'brightness(0.80)',
            },
          },
        }}
      >
        {imageUrl ? (
          <Box
            className="watch-img"
            role="img"
            aria-label={w.model}
            sx={{
              position: 'absolute',
              inset: 0,
              backgroundImage: `url(${imageUrl})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundColor: '#f5f4f2',
              transition: 'transform 0.45s ease, filter 0.45s ease',
              transformOrigin: 'center',
            }}
          />
        ) : (
          <Box
            className="watch-img"
            sx={{
              position: 'absolute',
              inset: 0,
              background: w.gradient,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'transform 0.45s ease, filter 0.45s ease',
            }}
          >
            <Box
              sx={{
                position: 'absolute',
                inset: 0,
                background: 'radial-gradient(ellipse at center, rgba(201,168,76,0.06) 0%, transparent 70%)',
              }}
            />
            <Typography
              sx={{
                fontFamily: '"Inter", sans-serif',
                fontSize: '3.5rem',
                color: 'rgba(201,168,76,0.15)',
                fontWeight: 700,
                userSelect: 'none',
              }}
            >
              ◷
            </Typography>
          </Box>
        )}

        {w.coupon && (
          <Tooltip
            title={copied ? t.recommendations.tooltipCopied : t.recommendations.tooltipCopy}
            placement="top"
          >
            <Box
              onClick={(e) => { e.preventDefault(); e.stopPropagation(); handleCopy(); }}
              role="button"
              aria-label={`Copiar cupom ${w.coupon}`}
              sx={{
                position: 'absolute',
                bottom: 12,
                left: 12,
                display: 'inline-flex',
                alignItems: 'center',
                gap: 0.75,
                px: 1.5,
                py: 0.6,
                borderRadius: '4px',
                backgroundColor: 'rgba(0,0,0,0.72)',
                border: '1px solid rgba(201,168,76,0.5)',
                backdropFilter: 'blur(6px)',
                zIndex: 2,
                cursor: 'pointer',
                userSelect: 'none',
                transition: 'border-color 0.2s',
                '&:hover': { borderColor: 'rgba(201,168,76,0.9)' },
              }}
            >
              <Typography sx={{ fontSize: '0.52rem', letterSpacing: '0.18em', color: 'rgba(255,255,255,0.45)', fontFamily: '"Inter", sans-serif', fontWeight: 500 }}>
                {t.recommendations.couponLabel}
              </Typography>
              <Typography sx={{ fontSize: '0.65rem', letterSpacing: '0.2em', color: copied ? 'success.main' : 'primary.main', fontFamily: '"Inter", sans-serif', fontWeight: 700, transition: 'color 0.2s' }}>
                {w.coupon.toUpperCase()}
              </Typography>
              {copied
                ? <CheckIcon sx={{ fontSize: '0.65rem', color: 'success.main' }} />
                : <ContentCopyIcon sx={{ fontSize: '0.6rem', color: 'rgba(255,255,255,0.35)' }} />
              }
            </Box>
          </Tooltip>
        )}
      </Box>

      <Box sx={{ mt: 2, px: 0.5 }}>
        <Typography
          sx={{
            fontFamily: '"Inter", sans-serif',
            fontSize: '0.65rem',
            letterSpacing: '0.25em',
            color: 'primary.main',
            fontWeight: 600,
            mb: 0.5,
          }}
        >
          {w.brand.toUpperCase()}
        </Typography>
        <Typography
          sx={{
            fontFamily: '"Inter", sans-serif',
            fontSize: '1.1rem',
            fontWeight: 600,
            color: '#EBEBEB',
            lineHeight: 1.3,
            mb: 1,
          }}
        >
          {w.model}
        </Typography>
        <Box sx={{ minHeight: '5rem' }}>
          {description && (
            <Typography
              variant="body2"
              sx={{
                color: 'text.secondary',
                fontSize: '0.88rem',
                lineHeight: 1.7,
                mb: 1.5,
              }}
            >
              {description}
            </Typography>
          )}
        </Box>
        <Box
          component="a"
          href={w.storeUrl}
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            display: 'flex',
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 0.75,
            mt: 1.5,
            color: 'primary.main',
            textDecoration: 'none',
            fontSize: '0.7rem',
            letterSpacing: '0.2em',
            fontFamily: '"Inter", sans-serif',
            fontWeight: 700,
            border: '1px solid rgba(201,168,76,0.4)',
            borderRadius: '6px',
            py: 1.5,
            minHeight: 48,
            backgroundColor: 'rgba(201,168,76,0.04)',
            transition: 'border-color 0.2s, background-color 0.2s',
            '&:hover': {
              borderColor: 'primary.main',
              backgroundColor: 'rgba(201,168,76,0.1)',
            },
          }}
        >
          {t.recommendations.visitStore}
          <OpenInNewIcon sx={{ fontSize: '0.8rem' }} />
        </Box>
      </Box>
    </Box>
  );
}

function GalleryItemSkeleton() {
  return (
    <Box>
      <Skeleton
        variant="rectangular"
        sx={{
          bgcolor: 'rgba(255,255,255,0.05)',
          borderRadius: 2,
          aspectRatio: '1/1',
          width: '100%',
          height: 'auto',
        }}
      />
      <Box sx={{ mt: 2, px: 0.5 }}>
        <Skeleton width="35%" height={12} sx={{ bgcolor: 'rgba(255,255,255,0.05)', mb: 0.75 }} />
        <Skeleton width="65%" height={18} sx={{ bgcolor: 'rgba(255,255,255,0.05)', mb: 1.5 }} />
        <Skeleton width="90%" height={13} sx={{ bgcolor: 'rgba(255,255,255,0.05)', mb: 0.5 }} />
        <Skeleton width="75%" height={13} sx={{ bgcolor: 'rgba(255,255,255,0.05)', mb: 1.5 }} />
        <Skeleton width="40%" height={13} sx={{ bgcolor: 'rgba(255,255,255,0.05)' }} />
      </Box>
    </Box>
  );
}

const arrowSx = (enabled: boolean) => ({
  flexShrink: 0,
  display: { xs: 'none', md: 'flex' },
  color: enabled ? 'primary.main' : 'rgba(255,255,255,0.15)',
  border: '1px solid',
  borderColor: enabled ? 'rgba(201,168,76,0.4)' : 'rgba(255,255,255,0.08)',
  borderRadius: '50%',
  width: 44,
  height: 44,
  transition: 'all 0.2s',
  '&:hover:not(:disabled)': {
    borderColor: 'primary.main',
    backgroundColor: 'rgba(201,168,76,0.08)',
  },
  '&.Mui-disabled': {
    color: 'rgba(255,255,255,0.15)',
    borderColor: 'rgba(255,255,255,0.08)',
  },
});

export default function Recommendations() {
  const { ref, visible } = useScrollReveal();
  const { t } = useLanguage();
  const { watches, loading } = useRecommendations();
  const trackRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const updateScrollState = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 1);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 1);
  }, []);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const raf = requestAnimationFrame(updateScrollState);
    el.addEventListener('scroll', updateScrollState, { passive: true });
    const ro = new ResizeObserver(updateScrollState);
    ro.observe(el);
    return () => {
      cancelAnimationFrame(raf);
      el.removeEventListener('scroll', updateScrollState);
      ro.disconnect();
    };
  }, [updateScrollState, watches]);

  const scroll = (dir: 'left' | 'right') => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>('[data-carousel-item]');
    const cardWidth = card?.offsetWidth ?? el.clientWidth;
    el.scrollBy({ left: dir === 'left' ? -cardWidth : cardWidth, behavior: 'smooth' });
  };

  return (
    <Box
      id="recomendacoes"
      sx={{
        backgroundColor: '#0D0E11',
        borderTop: '1px solid rgba(201,168,76,0.08)',
        py: { xs: 10, md: 14 },
      }}
    >
      <Box ref={ref} sx={{ maxWidth: 1200, mx: 'auto', px: { xs: 4, sm: 6, md: 8 } }}>
        <Box sx={{ mb: { xs: 8, md: 10 }, textAlign: 'center' }}>
          <Typography
            sx={{
              ...revealSx(visible, 0),
              color: 'primary.main',
              fontSize: '0.78rem',
              letterSpacing: '0.35em',
              mb: 2,
              fontFamily: '"Inter", sans-serif',
            }}
          >
            {t.recommendations.label}
          </Typography>
          <Typography
            variant="h3"
            sx={{
              ...revealSx(visible, 60),
              fontFamily: '"Inter", sans-serif',
              fontSize: { xs: '2rem', md: '2.6rem' },
              fontWeight: 700,
              color: '#EBEBEB',
              lineHeight: 1.2,
              mt: 1.5,
              mb: 2,
            }}
          >
            {t.recommendations.heading}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              ...revealSx(visible, 100),
              color: 'text.secondary',
              maxWidth: 520,
              mx: 'auto',
              lineHeight: 1.8,
            }}
          >
            {t.recommendations.subtitle}
          </Typography>
        </Box>

        <Box
          sx={{
            ...revealSx(visible, 200),
            display: 'flex',
            alignItems: 'center',
            gap: { md: 2 },
          }}
        >
          <IconButton onClick={() => scroll('left')} disabled={!canScrollLeft} sx={arrowSx(canScrollLeft)}>
            <ChevronLeftIcon />
          </IconButton>

          <Box sx={{ overflow: 'hidden', flex: 1, mx: { xs: -4, sm: -6, md: 0 } }}>
            <Box
              ref={trackRef}
              sx={{
                display: 'flex',
                overflowX: 'auto',
                scrollSnapType: 'x mandatory',
                '&::-webkit-scrollbar': { display: 'none' },
                msOverflowStyle: 'none',
                scrollbarWidth: 'none',
                px: { xs: 4, sm: 6, md: 0 },
                scrollPaddingLeft: { xs: '32px', sm: '48px', md: '0px' },
              }}
            >
              {loading
                ? Array.from({ length: 3 }).map((_, i) => (
                    <Box
                      key={i}
                      data-carousel-item
                      sx={{
                        flex: '0 0 auto',
                        width: { xs: '100%', sm: '50%', md: 'calc(33.333%)' },
                        scrollSnapAlign: 'start',
                        px: 1.5,
                      }}
                    >
                      <GalleryItemSkeleton />
                    </Box>
                  ))
                : watches.map((w, i) => (
                    <Box
                      key={i}
                      data-carousel-item
                      sx={{
                        flex: '0 0 auto',
                        width: { xs: '100%', sm: '50%', md: 'calc(33.333%)' },
                        scrollSnapAlign: 'start',
                        px: 1.5,
                      }}
                    >
                      <GalleryItem w={w} />
                    </Box>
                  ))
              }
            </Box>
          </Box>

          <IconButton onClick={() => scroll('right')} disabled={!canScrollRight} sx={arrowSx(canScrollRight)}>
            <ChevronRightIcon />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
}

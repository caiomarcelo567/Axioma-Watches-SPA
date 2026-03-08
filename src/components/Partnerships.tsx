import { useState } from 'react';
import { Box, Typography, Tooltip } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import CloseIcon from '@mui/icons-material/Close';
import CheckIcon from '@mui/icons-material/Check';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import impalaImg from '../assets/banner-empresa-1170x305.jpg';
import terranovaImg from '../assets/d86c3fa9-b022-4d13-91d7-b2246a746426_logo-azul-jpg.jpg';
import { useScrollReveal, revealSx } from '../hooks/useScrollReveal';
import { useLanguage } from '../contexts/LanguageContext';

export default function Partnerships() {
  const { ref, visible } = useScrollReveal();
  const { t } = useLanguage();
  const [copied, setCopied] = useState<string | null>(null);
  const [playing, setPlaying] = useState<string | null>(null);

  const partnerships = [
    {
      image: impalaImg,
      brand: 'Relojoaria Impala',
      description: t.partnerships.brands.impala.description,
      videoId: 'Zhbrgj9DH_4',
      videoUrl: 'https://youtu.be/Zhbrgj9DH_4',
      websiteUrl: 'https://www.relojoariaimpala.com.br/',
      coupon: 'axioma',
      imageFit: 'cover' as const,
      imageBg: '#000',
    },
    {
      image: terranovaImg,
      brand: 'Terranova Watches',
      description: t.partnerships.brands.terranova.description,
      videoId: 'BWQ7Jckc_ok',
      videoUrl: 'https://youtu.be/BWQ7Jckc_ok',
      websiteUrl: 'https://terranovawatches.com/',
      coupon: 'axioma',
      imageFit: 'contain' as const,
      imageBg: '#fff',
    },
  ];

  const handleCopy = (brand: string, coupon: string) => {
    const fallback = () => {
      const textarea = document.createElement('textarea');
      textarea.value = coupon;
      textarea.style.cssText = 'position:fixed;top:0;left:0;opacity:0;pointer-events:none';
      document.body.appendChild(textarea);
      textarea.focus();
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
    };

    if (navigator.clipboard?.writeText) {
      navigator.clipboard.writeText(coupon).catch(fallback);
    } else {
      fallback();
    }

    setCopied(brand);
    setTimeout(() => setCopied(null), 2500);
  };

  return (
    <Box
      id="parcerias"
      sx={{
        backgroundColor: '#0D0E11',
        borderTop: '1px solid rgba(201,168,76,0.08)',
        py: { xs: 10, md: 14 },
        px: { xs: 4, sm: 6, md: 8 },
      }}
    >
      <Box ref={ref} sx={{ maxWidth: 1200, mx: 'auto' }}>

        <Box sx={{ mb: { xs: 8, md: 10 }, textAlign: 'center' }}>
          <Typography
            sx={{
              ...revealSx(visible, 0),
              color: 'primary.main',
              fontSize: '0.65rem',
              letterSpacing: '0.35em',
              mb: 2,
              fontFamily: '"Inter", sans-serif',
            }}
          >
            {t.partnerships.label}
          </Typography>
          <Typography
            variant="h2"
            sx={{
              ...revealSx(visible, 100),
              fontSize: { xs: '2rem', md: '2.6rem' },
              color: '#EBEBEB',
              lineHeight: 1.2,
            }}
          >
            {t.partnerships.headingPart1}{' '}
            <Box component="span" sx={{ color: 'primary.main' }}>{t.partnerships.headingPart2}</Box>
          </Typography>
          <Typography
            variant="body2"
            sx={{
              ...revealSx(visible, 200),
              color: 'text.secondary',
              mt: 2,
              maxWidth: 480,
              mx: 'auto',
              lineHeight: 1.8,
            }}
          >
            {t.partnerships.subtitle}
          </Typography>
        </Box>

        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 3 }}>
          {partnerships.map((p, i) => (
            <Box
              key={p.brand}
              sx={{
                ...revealSx(visible, 320 + i * 150),
                display: 'flex',
                flexDirection: 'column',
                border: '1px solid rgba(201,168,76,0.12)',
                borderRadius: 2,
                overflow: 'hidden',
                backgroundColor: 'rgba(255,255,255,0.02)',
                transition: 'border-color 0.3s, box-shadow 0.3s',
                '&:hover': {
                  borderColor: 'rgba(201,168,76,0.35)',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
                },
              }}
            >
              <Box sx={{ position: 'relative', height: 220, backgroundColor: '#000', overflow: 'hidden', flexShrink: 0 }}>
                {playing === p.brand ? (
                  <>
                    <Box
                      component="iframe"
                      src={`https://www.youtube.com/embed/${p.videoId}?autoplay=1&rel=0`}
                      title={p.brand}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      sx={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 'none' }}
                    />
                    <Box
                      onClick={() => setPlaying(null)}
                      role="button"
                      aria-label="Fechar vídeo"
                      sx={{
                        position: 'absolute', top: 8, right: 8, width: 32, height: 32,
                        borderRadius: '50%', backgroundColor: 'rgba(0,0,0,0.7)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        cursor: 'pointer', zIndex: 2, transition: 'background-color 0.2s',
                        '&:hover': { backgroundColor: 'rgba(0,0,0,0.9)' },
                      }}
                    >
                      <CloseIcon sx={{ fontSize: '1rem', color: '#fff' }} />
                    </Box>
                  </>
                ) : (
                  <>
                    <Box
                      component="img"
                      src={p.image}
                      alt={p.brand}
                      sx={{
                        width: '100%', height: '100%',
                        objectFit: p.imageFit, objectPosition: 'center',
                        ...(p.imageFit === 'contain' && { padding: '24px', backgroundColor: p.imageBg }),
                        transition: 'transform 0.5s ease',
                        '.MuiBox-root:hover &': { transform: 'scale(1.04)' },
                      }}
                    />
                    <Box sx={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: 'linear-gradient(to right, transparent, rgba(201,168,76,0.8), transparent)' }} />
                    <Box
                      onClick={() => setPlaying(p.brand)}
                      role="button"
                      aria-label={`Reproduzir vídeo ${p.brand}`}
                      sx={{
                        position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center',
                        opacity: 0, backgroundColor: 'rgba(0,0,0,0.45)', transition: 'opacity 0.25s', cursor: 'pointer',
                        '.MuiBox-root:hover &': { opacity: 1 },
                      }}
                    >
                      <Box sx={{ width: 56, height: 56, borderRadius: '50%', backgroundColor: 'rgba(201,168,76,0.92)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 20px rgba(0,0,0,0.5)', transition: 'transform 0.2s', '&:hover': { transform: 'scale(1.1)' } }}>
                        <PlayArrowIcon sx={{ color: '#0D0E11', fontSize: '1.9rem' }} />
                      </Box>
                    </Box>
                  </>
                )}
              </Box>

              <Box sx={{ p: { xs: 3, md: 4 }, display: 'flex', flexDirection: 'column', flex: 1 }}>
                <Typography variant="h6" sx={{ color: '#EBEBEB', fontFamily: '"Playfair Display", serif', fontSize: '1.1rem', fontWeight: 600, mb: 1.5 }}>
                  {p.brand}
                </Typography>

                <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.8, fontSize: '0.875rem', mb: 3, flex: 1 }}>
                  {p.description}
                </Typography>

                <Tooltip title={copied === p.brand ? t.partnerships.tooltipCopied : t.partnerships.tooltipCopy} placement="top">
                  <Box
                    onClick={() => handleCopy(p.brand, p.coupon)}
                    role="button"
                    aria-label={`Copiar cupom ${p.coupon}`}
                    sx={{
                      display: 'inline-flex', alignItems: 'center', gap: 1.5,
                      border: '1px solid', borderColor: copied === p.brand ? 'success.main' : 'rgba(201,168,76,0.4)',
                      borderRadius: '6px', px: 2, py: 1.25, mb: 3, alignSelf: 'flex-start',
                      backgroundColor: copied === p.brand ? 'rgba(76,175,80,0.08)' : 'rgba(201,168,76,0.04)',
                      cursor: 'pointer', userSelect: 'none',
                      transition: 'border-color 0.2s, background-color 0.2s, transform 0.1s',
                      minHeight: 44,
                      '&:hover': { borderColor: copied === p.brand ? 'success.main' : 'primary.main', backgroundColor: copied === p.brand ? 'rgba(76,175,80,0.12)' : 'rgba(201,168,76,0.08)' },
                      '&:active': { transform: 'scale(0.97)' },
                    }}
                  >
                    {copied === p.brand ? (
                      <>
                        <CheckIcon sx={{ fontSize: '1rem', color: 'success.main' }} />
                        <Typography sx={{ fontSize: '0.75rem', letterSpacing: '0.12em', color: 'success.main', fontFamily: '"Inter", sans-serif', fontWeight: 600 }}>
                          {t.partnerships.copied}
                        </Typography>
                      </>
                    ) : (
                      <>
                        <Typography sx={{ fontSize: '0.62rem', letterSpacing: '0.18em', color: 'text.secondary', fontFamily: '"Inter", sans-serif', fontWeight: 500 }}>
                          {t.partnerships.couponLabel}
                        </Typography>
                        <Typography sx={{ fontSize: '0.82rem', letterSpacing: '0.2em', color: 'primary.main', fontFamily: '"Inter", sans-serif', fontWeight: 700 }}>
                          {p.coupon}
                        </Typography>
                      </>
                    )}
                  </Box>
                </Tooltip>

                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3, alignItems: 'center' }}>
                  <Box
                    component="a" href={p.videoUrl} target="_blank" rel="noopener noreferrer"
                    sx={{ display: 'inline-flex', alignItems: 'center', gap: 0.75, color: 'primary.main', textDecoration: 'none', fontSize: '0.72rem', letterSpacing: '0.15em', fontFamily: '"Inter", sans-serif', fontWeight: 500, borderBottom: '1px solid rgba(201,168,76,0.3)', pb: 0.5, transition: 'border-color 0.2s', '&:hover': { borderColor: 'primary.main' } }}
                  >
                    <PlayArrowIcon sx={{ fontSize: '0.9rem' }} />
                    {t.partnerships.watchVideo}
                  </Box>

                  <Box
                    component="a" href={p.websiteUrl} target="_blank" rel="noopener noreferrer"
                    sx={{ display: 'inline-flex', alignItems: 'center', gap: 0.75, color: 'text.secondary', textDecoration: 'none', fontSize: '0.72rem', letterSpacing: '0.15em', fontFamily: '"Inter", sans-serif', fontWeight: 500, borderBottom: '1px solid rgba(255,255,255,0.1)', pb: 0.5, transition: 'color 0.2s, border-color 0.2s', '&:hover': { color: '#EBEBEB', borderColor: 'rgba(255,255,255,0.3)' } }}
                  >
                    <OpenInNewIcon sx={{ fontSize: '0.85rem' }} />
                    {t.partnerships.visitSite}
                  </Box>
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

import { Box, Typography } from '@mui/material';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import { useScrollReveal, revealSx } from '../hooks/useScrollReveal';
import { useLanguage } from '../contexts/LanguageContext';

export default function Promo() {
  const { ref, visible } = useScrollReveal();
  const { t } = useLanguage();

  const services = [
    {
      icon: <InstagramIcon sx={{ fontSize: '1.6rem', color: '#E1306C' }} />,
      platform: 'Instagram',
      title: t.promo.instagram.title,
      description: t.promo.instagram.description,
      color: '#E1306C',
      buttonLabel: t.promo.instagram.button,
      href: 'https://www.instagram.com/axiomawatcheschannel',
    },
    {
      icon: <YouTubeIcon sx={{ fontSize: '1.6rem', color: '#FF0000' }} />,
      platform: 'YouTube',
      title: t.promo.youtube.title,
      description: t.promo.youtube.description,
      color: '#FF0000',
      buttonLabel: t.promo.youtube.button,
      href: 'https://www.youtube.com/@axiomawatches',
    },
  ];

  return (
    <Box
      id="divulgacao"
      sx={{
        backgroundColor: '#0D0E11',
        borderTop: '1px solid rgba(201,168,76,0.08)',
      }}
    >
      <Box
        ref={ref}
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
          maxWidth: 1200,
          mx: 'auto',
        }}
      >
        {services.map((s, i) => {
          const base = i * 180;
          return (
            <Box
              key={s.platform}
              sx={{
                px: { xs: 5, sm: 7, md: 8, lg: 12 },
                py: { xs: 10, md: 14 },
                borderRight: i === 0 ? { md: '1px solid rgba(201,168,76,0.08)' } : 'none',
                position: 'relative',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '2px',
                  background: `linear-gradient(to right, transparent, ${s.color}55, transparent)`,
                },
              }}
            >
              <Box
                sx={{
                  ...revealSx(visible, base),
                  width: 48,
                  height: 48,
                  borderRadius: '50%',
                  border: `1px solid ${s.color}40`,
                  backgroundColor: `${s.color}0D`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  mb: 4,
                }}
              >
                {s.icon}
              </Box>

              <Typography
                sx={{
                  ...revealSx(visible, base + 100),
                  color: 'primary.main',
                  fontSize: '0.62rem',
                  letterSpacing: '0.35em',
                  mb: 2,
                  fontFamily: '"Inter", sans-serif',
                }}
              >
                {s.platform.toUpperCase()}
              </Typography>

              <Typography
                variant="h4"
                sx={{
                  ...revealSx(visible, base + 200),
                  fontSize: { xs: '1.5rem', md: '1.8rem' },
                  color: '#EBEBEB',
                  mb: 3,
                  lineHeight: 1.25,
                }}
              >
                {s.title}
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  ...revealSx(visible, base + 300),
                  color: 'text.secondary',
                  lineHeight: 1.9,
                  fontSize: '0.95rem',
                  maxWidth: 400,
                  mb: 5,
                }}
              >
                {s.description}
              </Typography>

              <Box sx={{ ...revealSx(visible, base + 400), mt: 'auto' }}>
                <Box
                  component="a"
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 1,
                    color: 'primary.main',
                    textDecoration: 'none',
                    fontSize: '0.72rem',
                    letterSpacing: '0.18em',
                    fontFamily: '"Inter", sans-serif',
                    fontWeight: 500,
                    borderBottom: '1px solid rgba(201,168,76,0.3)',
                    pb: 0.5,
                    transition: 'border-color 0.2s, opacity 0.2s',
                    '&:hover': { borderColor: 'primary.main', opacity: 0.8 },
                  }}
                >
                  {s.buttonLabel.toUpperCase()}
                </Box>
              </Box>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}

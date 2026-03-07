import { Box, Typography } from '@mui/material';
import { useScrollReveal, revealSx } from '../hooks/useScrollReveal';

export default function Hero() {
  const { ref, visible } = useScrollReveal({ threshold: 0 });

  return (
    <Box
      id="hero"
      sx={{
        backgroundColor: '#0D0E11',
        borderBottom: '1px solid rgba(201,168,76,0.1)',
        overflow: 'hidden',
        position: 'relative',
        minHeight: { xs: 560, sm: 580, md: 580 },
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Box
        component="img"
        src="https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=1400&q=85&auto=format&fit=crop"
        alt=""
        aria-hidden
        sx={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center',
          filter: 'brightness(0.28) saturate(0.7)',
        }}
      />

      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(to bottom, rgba(13,14,17,0.4) 0%, rgba(13,14,17,0.5) 60%, #0D0E11 100%)',
        }}
      />

      <Box
        ref={ref}
        sx={{
          position: 'relative',
          zIndex: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          px: { xs: 4, sm: 6, md: 8 },
          py: { xs: 10, md: 0 },
          maxWidth: 680,
          width: '100%',
        }}
      >
        <Box sx={revealSx(visible, 0)}>
          <Box
            sx={{
              width: 60,
              height: 60,
              borderRadius: '50%',
              border: '1.5px dashed rgba(201,168,76,0.45)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              mb: 4,
              backgroundColor: 'rgba(13,14,17,0.6)',
              backdropFilter: 'blur(4px)',
              position: 'relative',
              '&::after': {
                content: '""',
                position: 'absolute',
                inset: 5,
                borderRadius: '50%',
                border: '1px solid rgba(201,168,76,0.12)',
              },
            }}
          >
            <Typography
              sx={{
                color: 'primary.main',
                fontFamily: '"Playfair Display", serif',
                fontWeight: 700,
                fontSize: '0.85rem',
                letterSpacing: '0.06em',
                lineHeight: 1,
                opacity: 0.8,
              }}
            >
              AW
            </Typography>
            <Typography
              sx={{
                color: 'primary.main',
                opacity: 0.22,
                fontSize: '0.38rem',
                letterSpacing: '0.12em',
                mt: 0.3,
                fontFamily: '"Inter", sans-serif',
              }}
            >
              LOGO
            </Typography>
          </Box>
        </Box>

        <Box sx={revealSx(visible, 150)}>
          <Typography
            sx={{
              color: 'primary.main',
              fontSize: '0.58rem',
              letterSpacing: '0.42em',
              mb: 2,
              fontFamily: '"Inter", sans-serif',
              opacity: 0.75,
            }}
          >
            CLAUDIO VAZ
          </Typography>
        </Box>

        <Typography
          variant="h1"
          sx={{
            ...revealSx(visible, 260),
            fontSize: { xs: '3rem', sm: '4rem', md: '5rem' },
            lineHeight: 0.95,
            fontWeight: 700,
            letterSpacing: '-0.01em',
            color: '#EBEBEB',
            mb: 0.2,
          }}
        >
          AXIOMA
        </Typography>

        <Typography
          variant="h1"
          sx={{
            ...revealSx(visible, 340),
            fontSize: { xs: '3rem', sm: '4rem', md: '5rem' },
            lineHeight: 0.95,
            fontWeight: 700,
            letterSpacing: '-0.01em',
            color: 'primary.main',
            mb: 3.5,
          }}
        >
          WATCHES
        </Typography>

        <Box sx={{ ...revealSx(visible, 440), width: 36, height: '1px', backgroundColor: 'primary.main', opacity: visible ? 0.4 : 0, mb: 3.5 }} />

        <Typography
          sx={{
            ...revealSx(visible, 520),
            fontFamily: '"Inter", sans-serif',
            fontSize: { xs: '0.9rem', md: '0.95rem' },
            color: 'text.secondary',
            lineHeight: 1.8,
            mb: 1,
          }}
        >
          Espaço voltado para a relojoaria quartz e mecânica automática.
        </Typography>

        <Box sx={revealSx(visible, 620)}>
          <Typography
            sx={{
              fontFamily: '"Playfair Display", serif',
              fontStyle: 'italic',
              fontSize: { xs: '0.88rem', md: '0.9rem' },
              color: 'primary.light',
              lineHeight: 1.8,
              mb: { xs: 6, md: 0 },
              opacity: 0.75,
            }}
          >
            Agregar sempre. Mantendo a verdade nas informações apresentadas.
          </Typography>
        </Box>

      </Box>
    </Box>
  );
}

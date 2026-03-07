import { Box, Typography } from '@mui/material';
import { useScrollReveal, revealSx } from '../hooks/useScrollReveal';

const pillars = [
  {
    number: '01',
    title: 'Quartz e Mecânico',
    description:
      'Conteúdo dedicado tanto à relojoaria quartz quanto aos movimentos mecânicos automáticos, explorando o melhor de cada universo.',
  },
  {
    number: '02',
    title: 'Informação Verdadeira',
    description:
      'Compromisso com a precisão e honestidade nas análises, reviews e informações apresentadas ao canal.',
  },
  {
    number: '03',
    title: 'Agregar Sempre',
    description:
      'Cada vídeo é pensado para trazer valor real ao entusiasta de relógios, seja iniciante ou colecionador experiente.',
  },
];

export default function About() {
  const { ref, visible } = useScrollReveal();

  return (
    <Box id="about" sx={{ backgroundColor: '#0D0E11', overflow: 'hidden' }}>
      <Box
        ref={ref}
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', lg: '1fr 1fr' },
          minHeight: { lg: '80vh' },
        }}
      >
        <Box
          sx={{
            position: 'relative',
            minHeight: { xs: 300, md: 420, lg: 'auto' },
            overflow: 'hidden',
          }}
        >
          <Box
            component="img"
            src="https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?w=900&q=85&auto=format&fit=crop"
            alt="Mecanismo de relógio"
            sx={{
              ...revealSx(visible, 0),
              position: { xs: 'relative', lg: 'absolute' },
              width: '100%',
              height: { xs: 300, md: 420, lg: '100%' },
              objectFit: 'cover',
              objectPosition: 'center',
              display: 'block',
              filter: 'brightness(0.65) saturate(0.9)',
            }}
          />
          <Box
            sx={{
              display: { xs: 'none', lg: 'block' },
              position: 'absolute',
              top: 0,
              right: 0,
              bottom: 0,
              width: '40%',
              background: 'linear-gradient(to right, transparent, #0D0E11)',
            }}
          />
          <Box
            sx={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              height: { xs: '50%', lg: '30%' },
              background: 'linear-gradient(to top, #0D0E11, transparent)',
            }}
          />
        </Box>

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            px: { xs: 4, sm: 6, md: 8, lg: 10 },
            py: { xs: 8, lg: 12 },
          }}
        >
          <Typography
            sx={{
              ...revealSx(visible, 120),
              color: 'primary.main',
              fontSize: '0.65rem',
              letterSpacing: '0.35em',
              mb: 3,
              fontFamily: '"Inter", sans-serif',
            }}
          >
            SOBRE O CANAL
          </Typography>

          <Typography
            variant="h2"
            sx={{
              ...revealSx(visible, 220),
              fontSize: { xs: '2rem', md: '2.6rem' },
              lineHeight: 1.2,
              mb: 3,
              color: '#EBEBEB',
            }}
          >
            O Universo<br />
            <Box component="span" sx={{ color: 'primary.main' }}>Axioma Watches</Box>
          </Typography>

          <Typography
            variant="body1"
            sx={{
              ...revealSx(visible, 340),
              color: 'text.secondary',
              lineHeight: 1.9,
              mb: 6,
              maxWidth: 440,
              fontSize: '0.97rem',
            }}
          >
            Criado por{' '}
            <Box component="span" sx={{ color: 'primary.main', fontWeight: 600 }}>
              Claudio Vaz
            </Box>
            , o Axioma Watches é um canal voltado para o universo da relojoaria — onde o quartz
            encontra o mecânico e cada peça tem uma história a contar.
          </Typography>

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            {pillars.map((p, i) => (
              <Box key={p.number} sx={{ ...revealSx(visible, 460 + i * 120), display: 'flex', gap: 3, alignItems: 'flex-start' }}>
                <Typography
                  sx={{
                    color: 'primary.main',
                    fontSize: '0.65rem',
                    fontFamily: '"Inter", sans-serif',
                    fontWeight: 500,
                    letterSpacing: '0.1em',
                    opacity: 0.5,
                    mt: 0.4,
                    minWidth: 24,
                  }}
                >
                  {p.number}
                </Typography>
                <Box
                  sx={{
                    borderLeft: '1px solid rgba(201,168,76,0.2)',
                    pl: 3,
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      color: '#EBEBEB',
                      fontSize: '0.95rem',
                      fontWeight: 600,
                      mb: 0.8,
                      fontFamily: '"Playfair Display", serif',
                    }}
                  >
                    {p.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: 'text.secondary', lineHeight: 1.8, fontSize: '0.87rem' }}
                  >
                    {p.description}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>

    </Box>
  );
}

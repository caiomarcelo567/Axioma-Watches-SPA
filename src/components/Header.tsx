import { AppBar, Toolbar, Box, Typography, Button } from '@mui/material';
import axiomaLogo from '../assets/AXIOMA_LOGO.png';

export default function Header() {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        backgroundColor: 'rgba(13,14,17,0.88)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(201,168,76,0.12)',
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between', px: { xs: 2, md: 6 }, minHeight: { xs: 56, sm: 64 } }}>

        <Box
          onClick={() => scrollTo('#hero')}
          sx={{ display: 'flex', alignItems: 'center', gap: 1.5, cursor: 'pointer', userSelect: 'none' }}
        >
          <Box
            component="img"
            src={axiomaLogo}
            alt="Axioma Watches"
            sx={{
              width: 34,
              height: 34,
              borderRadius: '50%',
              objectFit: 'cover',
              objectPosition: 'center 20%',
              flexShrink: 0,
              border: '1px solid rgba(201,168,76,0.4)',
              display: 'block',
            }}
          />
          <Typography
            sx={{
              display: { xs: 'none', sm: 'block' },
              fontFamily: '"Playfair Display", serif',
              fontSize: '0.85rem',
              letterSpacing: '0.12em',
              color: '#C8C8C8',
              fontWeight: 600,
            }}
          >
            AXIOMA WATCHES
          </Typography>
        </Box>

        <Button
          onClick={() => scrollTo('#contact')}
          variant="outlined"
          size="small"
          sx={{
            color: 'primary.main',
            borderColor: 'rgba(201,168,76,0.4)',
            fontSize: '0.7rem',
            letterSpacing: '0.14em',
            px: 2.5,
            py: 0.75,
            '&:hover': {
              borderColor: 'primary.main',
              backgroundColor: 'rgba(201,168,76,0.06)',
            },
          }}
        >
          Contato
        </Button>

      </Toolbar>
    </AppBar>
  );
}

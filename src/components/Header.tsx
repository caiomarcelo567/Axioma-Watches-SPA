import { useState, useEffect, useRef } from 'react';
import { AppBar, Toolbar, Box, Typography, IconButton, Drawer, List, ListItemButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import axiomaLogo from '../assets/AXIOMA_LOGO.png';

const navLinks = [
  { label: 'Sobre', id: '#about' },
  { label: 'Vídeos', id: '#videos' },
  { label: 'Parcerias', id: '#parcerias' },
  { label: 'Contato', id: '#contact' },
];

export default function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');
  const isScrolling = useRef(false);
  const scrollTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    navLinks.forEach(({ id }) => {
      const el = document.querySelector(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && !isScrolling.current) setActiveSection(id);
        },
        { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const scrollTo = (id: string) => {
    setActiveSection(id);
    setDrawerOpen(false);
    isScrolling.current = true;
    if (scrollTimer.current) clearTimeout(scrollTimer.current);

    setTimeout(() => {
      const el = document.querySelector(id);
      if (!el) return;
      const headerHeight = window.innerWidth < 600 ? 56 : 64;
      const top = el.getBoundingClientRect().top + window.scrollY - headerHeight;
      window.scrollTo({ top, behavior: 'smooth' });

      setTimeout(() => {
        const prev = document.querySelector('.section-highlight-overlay');
        if (prev) prev.remove();
        if (getComputedStyle(el).position === 'static') {
          (el as HTMLElement).style.position = 'relative';
        }
        const overlay = document.createElement('div');
        overlay.className = 'section-highlight-overlay';
        el.appendChild(overlay);
        setTimeout(() => overlay.remove(), 2300);
      }, 700);
    }, 300);

    scrollTimer.current = setTimeout(() => {
      isScrolling.current = false;
    }, 1200);
  };

  return (
    <>
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
                width: 42,
                height: 42,
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

          <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 4 }}>
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <Box key={link.id} onClick={() => scrollTo(link.id)} sx={{ position: 'relative', cursor: 'pointer', userSelect: 'none', pb: 0.5 }}>
                  <Typography
                    sx={{
                      fontFamily: '"Inter", sans-serif',
                      fontSize: '0.72rem',
                      letterSpacing: '0.18em',
                      color: isActive ? 'primary.main' : 'rgba(200,200,200,0.7)',
                      transition: 'color 0.2s',
                      '&:hover': { color: 'primary.main' },
                    }}
                  >
                    {link.label.toUpperCase()}
                  </Typography>
                  <Box
                    sx={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      height: '1px',
                      backgroundColor: 'primary.main',
                      transform: isActive ? 'scaleX(1)' : 'scaleX(0)',
                      transition: 'transform 0.3s ease',
                      transformOrigin: 'center',
                    }}
                  />
                </Box>
              );
            })}
          </Box>

          <IconButton
            onClick={() => setDrawerOpen(true)}
            sx={{ display: { xs: 'flex', md: 'none' }, color: 'rgba(201,168,76,0.8)' }}
          >
            <MenuIcon />
          </IconButton>

        </Toolbar>
      </AppBar>

      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        slotProps={{
          paper: {
            sx: {
              width: 240,
              backgroundColor: '#0D0E11',
              borderLeft: '1px solid rgba(201,168,76,0.12)',
            },
          },
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 1.5, borderBottom: '1px solid rgba(201,168,76,0.08)' }}>
          <IconButton onClick={() => setDrawerOpen(false)} sx={{ color: 'rgba(201,168,76,0.6)', '&:hover': { color: 'primary.main', backgroundColor: 'rgba(201,168,76,0.06)' } }}>
            <CloseIcon />
          </IconButton>
        </Box>

        <List disablePadding sx={{ pt: 1 }}>
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <ListItemButton
                key={link.id}
                onClick={() => scrollTo(link.id)}
                sx={{
                  py: 2,
                  px: 3,
                  borderLeft: isActive ? '2px solid' : '2px solid transparent',
                  borderColor: isActive ? 'primary.main' : 'transparent',
                  transition: 'border-color 0.3s, background-color 0.2s',
                  '&:hover': { backgroundColor: 'rgba(201,168,76,0.05)' },
                }}
              >
                <Typography
                  sx={{
                    fontFamily: '"Inter", sans-serif',
                    fontSize: '0.75rem',
                    letterSpacing: '0.2em',
                    color: isActive ? 'primary.main' : 'rgba(200,200,200,0.75)',
                    transition: 'color 0.2s',
                    '&:hover': { color: 'primary.main' },
                  }}
                >
                  {link.label.toUpperCase()}
                </Typography>
              </ListItemButton>
            );
          })}
        </List>
      </Drawer>
    </>
  );
}

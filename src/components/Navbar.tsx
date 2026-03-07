import { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useScrollTrigger,
  Slide,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const navLinks = [
  { label: 'Início', href: '#hero' },
  { label: 'Sobre', href: '#about' },
  { label: 'Vídeos', href: '#videos' },
  { label: 'Contato', href: '#contact' },
];

function HideOnScroll({ children }: { children: React.ReactElement }) {
  const trigger = useScrollTrigger();
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const scrollTo = (href: string) => {
    setDrawerOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <HideOnScroll>
        <AppBar
          position="fixed"
          elevation={0}
          sx={{
            backgroundColor: 'rgba(13,14,17,0.88)',
            backdropFilter: 'blur(12px)',
            borderBottom: '1px solid rgba(201,168,76,0.15)',
          }}
        >
          <Toolbar sx={{ justifyContent: 'space-between', px: { xs: 2, md: 6 } }}>
            {/* Logo / Brand */}
            <Box
              onClick={() => scrollTo('#hero')}
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1.5,
                cursor: 'pointer',
                userSelect: 'none',
              }}
            >
              <Box
                sx={{
                  width: 36,
                  height: 36,
                  border: '2px solid',
                  borderColor: 'primary.main',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.7rem',
                  color: 'primary.main',
                  fontFamily: '"Playfair Display", serif',
                  fontWeight: 700,
                  letterSpacing: '0.05em',
                }}
              >
                AW
              </Box>
            </Box>

            {/* Desktop nav */}
            <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1 }}>
              {navLinks.map((link) => (
                <Button
                  key={link.label}
                  onClick={() => scrollTo(link.href)}
                  sx={{
                    color: 'text.secondary',
                    fontSize: '0.75rem',
                    letterSpacing: '0.1em',
                    '&:hover': { color: 'primary.main' },
                  }}
                >
                  {link.label}
                </Button>
              ))}
            </Box>

            {/* Mobile menu button */}
            <IconButton
              sx={{ display: { md: 'none' }, color: 'primary.main' }}
              onClick={() => setDrawerOpen(true)}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </HideOnScroll>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        PaperProps={{
          sx: {
            width: 240,
            bgcolor: 'background.paper',
            borderLeft: '1px solid rgba(201,168,76,0.2)',
          },
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 1.5 }}>
          <IconButton onClick={() => setDrawerOpen(false)} sx={{ color: 'primary.main' }}>
            <CloseIcon />
          </IconButton>
        </Box>
        <List>
          {navLinks.map((link) => (
            <ListItem key={link.label} disablePadding>
              <ListItemButton onClick={() => scrollTo(link.href)}>
                <ListItemText
                  primary={link.label}
                  primaryTypographyProps={{
                    sx: {
                      fontFamily: '"Playfair Display", serif',
                      color: 'text.primary',
                      letterSpacing: '0.08em',
                    },
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
}

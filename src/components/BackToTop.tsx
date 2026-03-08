import { useState, useEffect } from 'react';
import { Fab, Zoom, Tooltip } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { useLanguage } from '../contexts/LanguageContext';

export default function BackToTop() {
  const [visible, setVisible] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <Zoom in={visible}>
      <Tooltip title={t.backToTop} placement="left">
        <Fab
          onClick={scrollToTop}
          size="small"
          aria-label={t.backToTop}
          sx={{
            position: 'fixed',
            bottom: 28,
            right: 28,
            zIndex: 1300,
            backgroundColor: 'rgba(13,14,17,0.9)',
            border: '1px solid rgba(201,168,76,0.35)',
            color: 'primary.main',
            backdropFilter: 'blur(8px)',
            boxShadow: '0 4px 20px rgba(0,0,0,0.4)',
            '&:hover': { backgroundColor: 'rgba(201,168,76,0.1)', borderColor: 'primary.main' },
          }}
        >
          <KeyboardArrowUpIcon />
        </Fab>
      </Tooltip>
    </Zoom>
  );
}

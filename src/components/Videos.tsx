import { Box } from '@mui/material';
import { useScrollReveal, revealSx } from '../hooks/useScrollReveal';

const FEATURED_VIDEO_ID = 'cSwWaiP2ReQ';

export default function Videos() {
  const { ref, visible } = useScrollReveal();

  return (
    <Box
      id="videos"
      sx={{
        py: { xs: 8, md: 10 },
        px: { xs: 2, md: 4 },
        backgroundColor: '#0D0E11',
        borderTop: '1px solid rgba(201,168,76,0.08)',
      }}
    >
      <Box ref={ref} sx={{ maxWidth: 1200, mx: 'auto', ...revealSx(visible) }}>
        <Box
          sx={{
            position: 'relative',
            paddingTop: '56.25%',
            borderRadius: 2,
            overflow: 'hidden',
            border: '1px solid rgba(201,168,76,0.15)',
            boxShadow: '0 16px 48px rgba(0,0,0,0.5)',
          }}
        >
          <Box
            component="iframe"
            src={`https://www.youtube.com/embed/${FEATURED_VIDEO_ID}`}
            title="Axioma Watches"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              border: 'none',
            }}
          />
        </Box>
      </Box>
    </Box>
  );
}

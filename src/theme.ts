import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#C9A84C',
      light: '#E8C96A',
      dark: '#9A7A2E',
    },
    secondary: {
      main: '#8EAFC2',
      light: '#B4CDD9',
      dark: '#5E8A9F',
    },
    background: {
      default: '#0D0E11',
      paper: '#151820',
    },
    text: {
      primary: '#E8E8E8',
      secondary: '#A0A8B4',
    },
    divider: 'rgba(201,168,76,0.2)',
  },
  typography: {
    fontFamily: '"Inter", "Roboto", sans-serif',
    h1: {
      fontFamily: '"Inter", sans-serif',
      fontWeight: 700,
      letterSpacing: '0.04em',
    },
    h2: {
      fontFamily: '"Inter", sans-serif',
      fontWeight: 700,
      letterSpacing: '0.03em',
    },
    h3: {
      fontFamily: '"Inter", sans-serif',
      fontWeight: 600,
    },
    h4: {
      fontFamily: '"Inter", sans-serif',
      fontWeight: 600,
    },
    h5: {
      fontFamily: '"Inter", sans-serif',
      fontWeight: 600,
    },
    h6: {
      fontFamily: '"Inter", sans-serif',
      fontWeight: 600,
    },
    body1: {
      fontFamily: '"Inter", "Roboto", sans-serif',
      lineHeight: 1.8,
    },
    body2: {
      fontFamily: '"Inter", "Roboto", sans-serif',
      lineHeight: 1.7,
    },
    subtitle1: {
      fontFamily: '"Inter", "Roboto", sans-serif',
      letterSpacing: '0.12em',
      textTransform: 'uppercase' as const,
    },
    button: {
      fontFamily: '"Inter", "Roboto", sans-serif',
      letterSpacing: '0.1em',
      textTransform: 'uppercase' as const,
    },
  },
  shape: {
    borderRadius: 4,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 2,
          padding: '10px 28px',
        },
        outlined: {
          borderColor: '#C9A84C',
          color: '#C9A84C',
          '&:hover': {
            borderColor: '#E8C96A',
            backgroundColor: 'rgba(201,168,76,0.08)',
          },
        },
        contained: {
          backgroundColor: '#C9A84C',
          color: '#0D0E11',
          '&:hover': {
            backgroundColor: '#E8C96A',
          },
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: 'rgba(201,168,76,0.2)',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          border: '1px solid rgba(201,168,76,0.12)',
        },
      },
    },
  },
});

export default theme;

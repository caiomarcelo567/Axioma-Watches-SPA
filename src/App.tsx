import { ThemeProvider, CssBaseline, Box } from '@mui/material';
import theme from './theme';
import Hero from './components/Hero';
import Promo from './components/Promo';
import About from './components/About';
import Videos from './components/Videos';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ overflowX: 'hidden' }}>
        <Hero />
        <Promo />
        <About />
        <Videos />
        <Contact />
        <Footer />
        <BackToTop />
      </Box>
    </ThemeProvider>
  );
}

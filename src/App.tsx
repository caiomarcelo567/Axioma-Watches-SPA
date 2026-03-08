import { ThemeProvider, CssBaseline, Box } from '@mui/material';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/react"
import theme from './theme';
import { LanguageProvider } from './contexts/LanguageContext';
import Header from './components/Header';
import Hero from './components/Hero';
import Promo from './components/Promo';
import About from './components/About';
import Videos from './components/Videos';
import Partnerships from './components/Partnerships';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <LanguageProvider>
      <CssBaseline />
      <Box sx={{ overflowX: 'hidden' }}>
        <Header />
        <Box sx={{ pt: { xs: '56px', sm: '64px' } }} />
        <Hero />
        <Promo />
        <About />
        <Videos />
        <Partnerships />
        <Contact />
        <Footer />
        <BackToTop />
        <Analytics />
        <SpeedInsights />
      </Box>
      </LanguageProvider>
    </ThemeProvider>
  );
}

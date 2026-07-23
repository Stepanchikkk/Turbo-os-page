import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  colorSchemes: { dark: true },
  palette: {
    mode: 'dark',
    primary: { main: '#14b8a6' },
    secondary: { main: '#f97316' },
    background: { default: '#020617', paper: '#1e293b' },
    text: { primary: '#f1f5f9', secondary: '#94a3b8' },
  },
  typography: {
    fontFamily: '"Roboto", "Inter", system-ui, sans-serif',
  },
  shape: { borderRadius: 12 },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          border: '1px solid rgba(148,163,184,0.12)',
          transition: 'all 0.2s ease',
          '&:hover': {
            borderColor: 'rgba(148,163,184,0.25)',
            boxShadow: '0 8px 24px rgba(0,0,0,0.3)',
            transform: 'translateY(-2px)',
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: { textTransform: 'none', fontWeight: 500 },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: { backgroundImage: 'none' },
      },
    },
  },
});

export default theme;

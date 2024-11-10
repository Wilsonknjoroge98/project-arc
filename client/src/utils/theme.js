import { createTheme, responsiveFontSizes } from '@mui/material/styles';

// https://coolors.co/palette/edf2fb-e2eafc-d7e3fc-ccdbfd-c1d3fe-b6ccfe-abc4ff
const theme = createTheme({
  palette: {
    primary: {
      main: '#000',
    },
    secondary: {
      main: '#FFF',
    },
    background: {
      default: '#EDF2FB',
      paper: '#F9FAFC',
    },
    text: {
      primary: '#2A2D34',
      secondary: '#6D758D',
    },
    error: {
      main: '#E63946',
    },
    warning: {
      main: '#FFB703',
    },
    info: {
      main: '#219EBC',
    },
    success: {
      main: '#2A9D8F',
    },
  },
  typography: {
    fontFamily: 'Poppins, sans-serif',
    color: '#2A2D34',
    h1: {
      fontFamily: 'Poppins, sans-serif',
      fontWeight: 700,
      // fontSize: '3rem',
      lineHeight: 1.2,
    },
    h2: {
      fontFamily: 'Poppins, sans-serif',
      fontWeight: 600,
      fontSize: '2.25rem',
      lineHeight: 1.3,
    },
    h3: {
      fontFamily: 'Poppins, sans-serif',
      fontWeight: 500,
      fontSize: '1.75rem',
      lineHeight: 1.4,
    },
    caption: {
      opacity: '60%',
    },

    body1: {
      fontFamily: 'Poppins, sans-serif',
      fontSize: '1rem',
      lineHeight: 2,
      opacity: '60%',
    },
    body2: {
      fontFamily: 'Poppins, sans-serif',
      fontSize: '0.875rem',
      lineHeight: 2.5,
      opacity: '60%',
    },
    button: {
      fontFamily: 'Poppins, sans-serif',
      fontWeight: 600,
      fontSize: '1rem',
      textTransform: 'uppercase',
    },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
          textTransform: 'none',
          borderRadius: 0,
          maxWidth: '250px',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          padding: '16px',
          boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.05)',
        },
      },
    },
  },
});

export default responsiveFontSizes(theme);

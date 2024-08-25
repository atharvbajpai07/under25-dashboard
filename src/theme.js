// src/theme.js or wherever you configure your theme
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'Oskari G2, sans-serif',
    allVariants: {
      color: '#000000',  /* Primary color for all fonts */
    },
  },
  palette: {
    text: {
      primary: '#000000',  /* Primary text color */
      secondary: '#7A7A7A',  /* Secondary text color */
    },
  },
});

export default theme;

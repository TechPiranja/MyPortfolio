import { createTheme, ThemeProvider } from '@mui/material/styles';

// eslint-disable-next-line react/prop-types
export default function LocalesProvider({ children }) {
  const themeWithLocale = createTheme({
    palette: {
      type: 'dark',
      primary: {
        main: '#D1512D'
      },
      secondary: {
        main: '#411530'
      },
      background: {
        default: '#411530'
      }
    }
  });

  return <ThemeProvider theme={themeWithLocale}>{children}</ThemeProvider>;
}

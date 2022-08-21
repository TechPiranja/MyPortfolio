import { createTheme, ThemeProvider } from '@mui/material/styles';

// eslint-disable-next-line react/prop-types
export default function LocalesProvider({ children }) {
  const themeWithLocale = createTheme({
    palette: {
      type: 'dark',
      primary: {
        main: '#256D85'
      },
      secondary: {
        main: '#B25068'
      },
      background: {
        default: '#002B5B'
      }
    }
  });

  return <ThemeProvider theme={themeWithLocale}>{children}</ThemeProvider>;
}

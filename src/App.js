import React from 'react';
import { ThemeProvider } from 'styled-components';

import { useDarkMode } from './useDarkMode';
import { lightTheme, darkTheme } from './theme';
import { GlobalStyles } from './global';

import Toggle from './components/Toggle';
import Logo from './components/Logo';
import Grid from 'components/Grid';
import CookieConsent from "react-cookie-consent";

function App() {
  const [time, theme, toggleTheme, componentMounted] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  if (!componentMounted) {
    return <div />
  };

  return (
    <ThemeProvider theme={themeMode}>
      <>
        <GlobalStyles />
        <Logo theme={theme} />
        <Grid theme={theme} />
        <Toggle theme={theme} toggleTheme={toggleTheme} />
        <span className="toggle-theme-text">Guten {time}!</span>
        <CookieConsent
          location="bottom"
          buttonText="Einverstanden"
          cookieName="dk-cookie-banner"
          style={{background: themeMode.text === '#FAFAFA' ? 'rgba(226, 226, 226, 0.7)' : 'rgba(150, 153, 156, 0.7)'}}
          buttonStyle={{ background: "#6DA12B", color: "#FFF", fontSize: "16px" }}
          expires={150}
        >
          <span style={{color: themeMode.text === '#FAFAFA' ? '#363537' : '#fff'}}>Diese Website nutzt Cookies, um bestm&ouml;gliche Funktionalit&auml;t bieten zu k&ouml;nnen.{" "}</span>
        </CookieConsent>
      </>
    </ThemeProvider>
  );
};

export default App;

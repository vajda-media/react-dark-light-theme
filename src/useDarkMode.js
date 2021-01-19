import { useEffect, useState } from 'react';
import useSound from 'use-sound';

export const useDarkMode = () => {
  const [theme, setTheme] = useState('light');
  const [localDayTime, setDayTime] = useState('Morgen');
  const [localTime, setTime] = useState(0);
  const [componentMounted, setComponentMounted] = useState(false);

  const [playOn] = useSound(
    'sounds/switch-off.mp3',
    { volume: 0.25 }
  );
  const [playOff] = useSound(
    'sounds/switch-on.mp3',
    { volume: 0.25 }
  );

  const setMode = mode => {
    window.localStorage.setItem('theme', mode)
    setTheme(mode)
  };

  const toggleTheme = () => {
    if (theme === 'light') {
      playOn();
      setMode('dark');
      window.localStorage.setItem('theme-datestamp', new Date());
    } else {
      playOff();
      setMode('light');

      window.localStorage.setItem('theme-datestamp', new Date());
    }

    if (localTime >= 1 && localTime<= 11) {
      setDayTime('Morgen');
    }

    if (localTime >= 12 && localTime <= 17) {
      setDayTime('Tag');
    }

    if (localTime >= 18 && localTime <= 24) {
      setDayTime('Abend');
    }
  };

  useEffect(() => {
    /**
     * Daytime logic for theme and salutation
     */
    const localTheme = window.localStorage.getItem('theme');
    const date = new Date();
    const time = date.toLocaleTimeString('de-DE').split(':')[0];
    let diffSeconds = null;
    setTime(time);

    let savedDateStamp = window.localStorage.getItem('theme-datestamp');

    if (savedDateStamp !== null) {
      const endDate = new Date();
      diffSeconds = (endDate - new Date(window.localStorage.getItem('theme-datestamp'))) / 1000;
    }

    if (diffSeconds !== null && parseInt(diffSeconds) <= 300) {
        window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches && !localTheme ? setMode('dark') : localTheme ? setTheme(localTheme) : setMode('light');

        if (time >= 1 && time <= 11) {
          setDayTime('Morgen');
        }

        if (time >= 12 && time <= 17) {
          setDayTime('Tag');
        }

        if (time >= 18 && time <= 24) {
          setDayTime('Abend');
        }
    } else {
      window.localStorage.removeItem('theme-datestamp');

      if (time >= 1 && time <= 11) {
        setDayTime('Morgen');
        setMode('light');
      } else if (time >= 12 && time <= 17) {
        setDayTime('Tag');
        setMode('light');
      } else {
        setDayTime('Abend');
        setMode('dark');
      }
    }
    setComponentMounted(true);
  }, []);

  return [localDayTime, theme, toggleTheme, componentMounted]
};

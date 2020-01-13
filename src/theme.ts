import {
  DefaultTheme,
  Theme,
  DarkTheme,
  configureFonts
} from 'react-native-paper';
import {fontConfig} from './fonts';

export const lightTheme: Theme = {
  ...DefaultTheme,
  fonts: configureFonts(fontConfig),
  colors: {
    ...DefaultTheme.colors,
    primary: '#27ab83',
    accent: '#27ab83',
    background: '#efeee9',
    onBackground: '#1a1a1a',
    surface: '#efeee9',
    onSurface: '#1a1a1a',
    text: '#1a1a1a',
  },
};

export const darkTheme: Theme = {
    ...DarkTheme,
    mode: 'exact',
    fonts: configureFonts(fontConfig),
    colors: {
      ...DarkTheme.colors,
      primary: '#27ab83',
      accent: '#27ab83',
      background: '#1a1a1a',
      onBackground: '#ffffff',
      surface: '#1a1a1a',
      onSurface: '#ffffff',
      text: '#ffffff',
    }
}

import React, {ReactNode} from 'react';
import {useColorScheme} from 'react-native-appearance';
import {Provider as PaperProvider} from 'react-native-paper';
import {darkTheme, lightTheme} from '@/theme';
import Icon from '@/components/Icon';

type CustomPaperProviderProps = {children: ReactNode};

const paperSettings = {
  icon: Icon,
};

const CustomPaperProvider = (props: CustomPaperProviderProps) => {
  const colorScheme = useColorScheme();
  const theme = colorScheme === 'dark' ? darkTheme : lightTheme;

  return <PaperProvider {...props} theme={theme} settings={paperSettings} />;
};

export default CustomPaperProvider;

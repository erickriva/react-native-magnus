import * as React from 'react';

import { ThemeType } from './type';
import { ThemeContext } from './theme.context';
import { defaultTheme } from '../style';
import deepmerge from 'deepmerge';

export type ThemeProviderProps<T extends ThemeType> = {
  theme?: T;
};

export const ThemeProvider: React.FunctionComponent<
  ThemeProviderProps<ThemeType>
> = (props) => {
  const { theme: themeProp = {}, children } = props;

  const [themeState, setThemeState] = React.useState<ThemeType>(
    deepmerge(defaultTheme, themeProp)
  );

  const setTheme = <T extends ThemeType>(newTheme: T) => {
    const mergedTheme = deepmerge<ThemeType>(defaultTheme, newTheme);
    setThemeState(mergedTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme: themeState, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

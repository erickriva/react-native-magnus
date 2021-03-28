import * as React from 'react';

import { ThemeComponents, ThemeType } from './type';
import { ThemeContext } from './theme.context';
import { defaultTheme } from '../style';
import deepmerge from 'deepmerge';

export type ThemeWithComponents<Theme extends ThemeType = ThemeType> = {
  values?: Theme;
  components?: ThemeComponents;
};

export interface ThemeProviderProps {
  theme?: ThemeWithComponents;
}

export const MagnusThemeProvider: React.FunctionComponent<ThemeProviderProps> = (
  props
) => {
  const { theme, children } = props;

  const themeProp = theme?.values ?? {};
  const componentsProp = theme?.components ?? {};

  const [themeState, setThemeState] = React.useState<ThemeType>(
    deepmerge(defaultTheme, themeProp)
  );
  const [componentsState, setComponentsState] = React.useState<ThemeComponents>(
    componentsProp
  );

  React.useEffect(() => {
    setTheme(theme ?? {});
  }, [theme]);

  const setTheme = ({
    values: themeProps = {},
    components = {},
  }: ThemeWithComponents) => {
    const mergedTheme = deepmerge<ThemeType>(defaultTheme, themeProps);
    setThemeState(mergedTheme);

    if (components) {
      setComponentsState(components);
    }
  };

  return (
    <ThemeContext.Provider
      value={{
        theme: {
          values: themeState,
          components: componentsState,
        },
        setTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

import * as React from 'react';
import { defaultTheme } from '../style';
import { ThemeWithComponents } from './theme.provider';

import { ThemeType } from './type';

export interface ThemeContextType {
  theme: Required<ThemeWithComponents>;
  setTheme: (theme: ThemeWithComponents) => void;
}

export const ThemeContext: React.Context<ThemeContextType> = React.createContext(
  {
    theme: {
      values: defaultTheme as ThemeType,
      components: {},
    },
    setTheme: (_theme: ThemeWithComponents) => {},
  }
);

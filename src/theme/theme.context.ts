import * as React from 'react';
import { defaultTheme } from '../style';

import { ThemeType } from './type';

export interface ThemeContextType {
  theme: ThemeType;
  setTheme: <T extends ThemeType>(theme: T) => void;
}

export const ThemeContext: React.Context<ThemeContextType> = React.createContext(
  {
    theme: defaultTheme as ThemeType,
    setTheme: (_theme: ThemeType) => {},
  }
);

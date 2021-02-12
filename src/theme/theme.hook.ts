import { useContext } from 'react';

import { ThemeContext, ThemeContextType } from './theme.context';

export const useMagnusTheme = (): ThemeContextType => useContext(ThemeContext);

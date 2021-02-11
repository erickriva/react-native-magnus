import { ThemeType } from './type';

export const makeTheme = <T extends ThemeType>(theme: T) => theme;

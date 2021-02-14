import deepmerge from 'deepmerge';
import { ThemeComponents, ThemeType } from './type';

export const mergeThemeComponents = (
  components1: ThemeComponents,
  components2: ThemeComponents
): ThemeComponents => deepmerge<ThemeComponents>(components1, components2);

export const makeTheme = <T extends ThemeType = ThemeType>(theme: T) => theme;

export const makeThemeComponents = (components: ThemeComponents) => components;

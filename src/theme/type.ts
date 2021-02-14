import { StatusBarProps } from 'react-native';
import {
  AvatarProps,
  BadgeProps,
  ButtonProps,
  CheckboxProps,
  CollapseProps,
  DivProps,
  DrawerProps,
  DropdownProps,
  FabProps,
  HeaderProps,
  IconProps,
  ImageProps,
  InputProps,
  MentionProps,
  ModalProps,
  OverlayProps,
  RadioProps,
  ScrollDivProps,
  SelectProps,
  SkeletonProps,
  SnackbarProps,
  TagProps,
  TextProps,
  TextareaProps,
  ToggleProps,
  TooltipProps,
  CarouselProps,
  AnimatedProps,
  AvatarGroupProps,
  CollapseBodyProps,
  CollapseGroupProps,
  CollapseHeaderProps,
  DropdownOptionProps,
  CheckboxGroupProps,
  RadioGroupProps,
  SelectOptionProps,
} from '../ui';

import { ThemeProps, VariantType } from '../types';
import { defaultTheme } from '../style';

/**
 * Can be augmented by users to inject their exact theme into Magnus types.
 * @see TODO LINK TO THE DOCS
 */
// @ts-ignore
export interface UserTheme {}
export type DefaultTheme = typeof defaultTheme;
export type FinalTheme = DefaultTheme & UserTheme;

export interface ThemeComponents {
  Animated?: VariantType<AnimatedProps>;
  Avatar?: VariantType<AvatarProps>;
  AvatarGroup?: VariantType<AvatarGroupProps>;
  Badge?: VariantType<BadgeProps>;
  Button?: VariantType<ButtonProps>;
  Carousel?: VariantType<CarouselProps>;
  Checkbox?: VariantType<CheckboxProps>;
  CheckboxGroup?: VariantType<CheckboxGroupProps>;
  Collapse?: VariantType<CollapseProps>;
  CollapseHeader?: VariantType<CollapseHeaderProps>;
  CollapseBody?: VariantType<CollapseBodyProps>;
  CollapseGroup?: VariantType<CollapseGroupProps>;
  Div?: VariantType<DivProps>;
  Drawer?: VariantType<DrawerProps>;
  Dropdown?: VariantType<DropdownProps>;
  DropdownOption?: VariantType<DropdownOptionProps>;
  Fab?: VariantType<FabProps>;
  Header?: VariantType<HeaderProps>;
  Icon?: VariantType<IconProps>;
  Image?: VariantType<ImageProps>;
  Input?: VariantType<InputProps>;
  Mention?: VariantType<MentionProps>;
  Modal?: VariantType<ModalProps>;
  Overlay?: VariantType<OverlayProps>;
  Radio?: VariantType<RadioProps>;
  RadioGroup?: VariantType<RadioGroupProps>;
  ScrollDiv?: VariantType<ScrollDivProps>;
  Select?: VariantType<SelectProps>;
  SelectOption?: VariantType<SelectOptionProps>;
  Skeleton?: VariantType<SkeletonProps>;
  SkeletonCircle?: VariantType<SkeletonProps>;
  Snackbar?: VariantType<SnackbarProps>;
  Statusbar?: VariantType<StatusBarProps>;
  Tag?: VariantType<TagProps>;
  Text?: VariantType<TextProps>;
  Toggle?: VariantType<ToggleProps>;
  Tooltip?: VariantType<TooltipProps>;
  Textarea?: VariantType<TextareaProps>;
}

// to avoid compatibility issues
export type ThemeType = MagnusThemeType;

export interface MagnusThemeType {
  fontFamily?: {
    normal?: string;
    bold?: string;
    100?: string;
    200?: string;
    300?: string;
    400?: string;
    500?: string;
    600?: string;
    700?: string;
    800?: string;
    900?: string;
  };

  colors?: ThemeProps<string>;
  fontSize?: ThemeProps<number>;
  borderRadius?: { none: 0; circle: 99999 } & ThemeProps<number>;
  spacing?: { none: 0 } & ThemeProps<number>;
  shadowColor?: string;
  shadow?: ThemeProps<{
    shadowOffset?: {
      width: number;
      height: number;
    };
    shadowOpacity?: number;
    shadowRadius?: number;
    elevation?: number;
  }>;
  name?: string;
}

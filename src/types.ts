import { ImageSourcePropType as RNImageSourcePropType } from 'react-native';
import { FinalTheme } from './theme/type';

export type ThemeProps<T> = {
  [name: string]: T;
};

export type VariantType<T extends object> = Omit<
  Partial<T> & {
    variants?: {
      [name: string]: Omit<Partial<T>, 'variant'>;
    };
  },
  'variant'
>;

export type DefaultProps<Props extends object> = {
  [K in keyof Props]?: Props[K];
};

type LiteralUnion<T extends U, U = string> = T | (U & {});

export const borderProps = [
  'borderColor',
  'borderTopColor',
  'borderRightColor',
  'borderBottomColor',
  'borderLeftColor',
  'borderStartColor',
  'borderEndColor',
  'borderWidth',
  'borderTopWidth',
  'borderRightWidth',
  'borderLeftWidth',
  'borderBottomWidth',
  'borderStartWidth',
  'borderEndWidth',
  'borderStyle',
] as const;
export interface BorderPropsType {
  borderColor?: LiteralUnion<keyof FinalTheme['colors']>;
  borderTopColor?: LiteralUnion<keyof FinalTheme['colors']>;
  borderRightColor?: LiteralUnion<keyof FinalTheme['colors']>;
  borderBottomColor?: LiteralUnion<keyof FinalTheme['colors']>;
  borderLeftColor?: LiteralUnion<keyof FinalTheme['colors']>;
  borderStartColor?: LiteralUnion<keyof FinalTheme['colors']>;
  borderEndColor?: LiteralUnion<keyof FinalTheme['colors']>;
  borderWidth?: number;
  borderTopWidth?: number;
  borderRightWidth?: number;
  borderLeftWidth?: number;
  borderBottomWidth?: number;
  borderStartWidth?: number;
  borderEndWidth?: number;
  borderStyle?: 'solid' | 'dotted' | 'dashed';
}

export const spacingProps = [
  'm',
  'mt',
  'mr',
  'mb',
  'ml',
  'mx',
  'my',
  'ms',
  'me',
  'p',
  'pt',
  'pr',
  'pb',
  'pl',
  'px',
  'py',
  'ps',
  'pe',
] as const;
export interface SpacingPropsType {
  m?: LiteralUnion<keyof FinalTheme['spacing'], string | number>;
  mt?: LiteralUnion<keyof FinalTheme['spacing'], string | number>;
  mr?: LiteralUnion<keyof FinalTheme['spacing'], string | number>;
  mb?: LiteralUnion<keyof FinalTheme['spacing'], string | number>;
  ml?: LiteralUnion<keyof FinalTheme['spacing'], string | number>;
  mx?: LiteralUnion<keyof FinalTheme['spacing'], string | number>;
  my?: LiteralUnion<keyof FinalTheme['spacing'], string | number>;
  ms?: LiteralUnion<keyof FinalTheme['spacing'], string | number>;
  me?: LiteralUnion<keyof FinalTheme['spacing'], string | number>;
  p?: LiteralUnion<keyof FinalTheme['spacing'], string | number>;
  pt?: LiteralUnion<keyof FinalTheme['spacing'], string | number>;
  pr?: LiteralUnion<keyof FinalTheme['spacing'], string | number>;
  pb?: LiteralUnion<keyof FinalTheme['spacing'], string | number>;
  pl?: LiteralUnion<keyof FinalTheme['spacing'], string | number>;
  px?: LiteralUnion<keyof FinalTheme['spacing'], string | number>;
  py?: LiteralUnion<keyof FinalTheme['spacing'], string | number>;
  ps?: LiteralUnion<keyof FinalTheme['spacing'], string | number>;
  pe?: LiteralUnion<keyof FinalTheme['spacing'], string | number>;
}

export const roundedProps = [
  'rounded',
  'roundedTopLeft',
  'roundedTopRight',
  'roundedTopStart',
  'roundedTopEnd',
  'roundedBottomLeft',
  'roundedBottomRight',
  'roundedBottomStart',
  'roundedBottomEnd',
  'roundedTop',
  'roundedLeft',
  'roundedRight',
  'roundedStart',
  'roundedEnd',
  'roundedBottom',
] as const;
export interface RoundedPropsType {
  rounded?: LiteralUnion<keyof FinalTheme['borderRadius'], string | number>;
  roundedTopLeft?: LiteralUnion<
    keyof FinalTheme['borderRadius'],
    string | number
  >;
  roundedTopRight?: LiteralUnion<
    keyof FinalTheme['borderRadius'],
    string | number
  >;
  roundedTopStart?: LiteralUnion<
    keyof FinalTheme['borderRadius'],
    string | number
  >;
  roundedTopEnd?: LiteralUnion<
    keyof FinalTheme['borderRadius'],
    string | number
  >;
  roundedBottomLeft?: LiteralUnion<
    keyof FinalTheme['borderRadius'],
    string | number
  >;
  roundedBottomRight?: LiteralUnion<
    keyof FinalTheme['borderRadius'],
    string | number
  >;
  roundedBottomStart?: LiteralUnion<
    keyof FinalTheme['borderRadius'],
    string | number
  >;
  roundedBottomEnd?: LiteralUnion<
    keyof FinalTheme['borderRadius'],
    string | number
  >;
  roundedLeft?: LiteralUnion<keyof FinalTheme['borderRadius'], string | number>;
  roundedRight?: LiteralUnion<
    keyof FinalTheme['borderRadius'],
    string | number
  >;
  roundedStart?: LiteralUnion<
    keyof FinalTheme['borderRadius'],
    string | number
  >;
  roundedEnd?: LiteralUnion<keyof FinalTheme['borderRadius'], string | number>;

  roundedTop?: LiteralUnion<keyof FinalTheme['borderRadius'], string | number>;
  roundedBottom?: LiteralUnion<
    keyof FinalTheme['borderRadius'],
    string | number
  >;
}

export const shadowProps = ['shadow', 'shadowColor'] as const;
export interface ShadowPropsType {
  shadow?: LiteralUnion<keyof FinalTheme['shadow'], string | number>;
  shadowColor?: LiteralUnion<keyof FinalTheme['colors']>;
}

export const dimensionProps = [
  'minH',
  'minW',
  'maxH',
  'maxW',
  'h',
  'w',
] as const;
export interface DimensionPropsType {
  minH?: number | string;
  minW?: number | string;
  maxH?: number | string;
  maxW?: number | string;
  h?: number | string;
  w?: number | string;
}

export const flexProps = [
  'row',
  'flex',
  'flexDir',
  'flexWrap',
  'justifyContent',
  'alignSelf',
  'alignItems',
] as const;
export interface FlexPropsType {
  row?: boolean;
  flex?: number;
  flexDir?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  flexWrap?: 'wrap' | 'nowrap' | 'wrap-reverse';
  justifyContent?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
  alignSelf?:
    | 'auto'
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'stretch'
    | 'baseline';
  alignItems?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';
}

export const positionProps = [
  'position',
  'top',
  'right',
  'bottom',
  'left',
  'start',
  'end',
] as const;
export interface PositionPropsType {
  position?: 'absolute' | 'relative';
  top?: number;
  right?: number;
  bottom?: number;
  left?: number;
  start?: number;
  end?: number;
}

export const backgroundProps = ['bg', 'bgImg', 'bgMode'] as const;
export interface BackgroundPropsType {
  bg?: LiteralUnion<keyof FinalTheme['colors']>;
  bgImg?: RNImageSourcePropType;
  bgMode?: 'contain' | 'cover' | 'stretch' | 'repeat';
}

export const textProps = [
  'color',
  'fontSize',
  'textDecorLine',
  'textDecorStyle',
  'fontStyle',
  'textDecorColor',
  'fontWeight',
  'fontFamily',
  'lineHeight',
  'textAlign',
  'textTransform',
  'letterSpacing',
  'textAlignVertical',
] as const;
export interface TextPropsType {
  color?: LiteralUnion<keyof FinalTheme['colors']>;
  fontSize?: LiteralUnion<keyof FinalTheme['fontSize'], string | number>;
  textDecorLine?:
    | 'none'
    | 'underline'
    | 'line-through'
    | 'underline line-through';
  textDecorStyle?: 'solid' | 'double' | 'dotted' | 'dashed';
  fontStyle?: 'normal' | 'italic';
  textDecorColor?: LiteralUnion<keyof FinalTheme['colors']>;
  fontWeight?:
    | 'normal'
    | 'bold'
    | '100'
    | '200'
    | '300'
    | '400'
    | '500'
    | '600'
    | '700'
    | '800'
    | '900';
  fontFamily?: string;
  lineHeight?: number;
  textAlign?: 'auto' | 'left' | 'right' | 'center' | 'justify';
  textTransform?: 'none' | 'uppercase' | 'lowercase' | 'capitalize';
  letterSpacing?: number;
  textAlignVertical?: 'auto' | 'top' | 'bottom' | 'center';
  textDecorationLine?:
    | 'none'
    | 'underline'
    | 'line-through'
    | 'underline line-through';
  textDecorationStyle?: 'solid' | 'double' | 'dotted' | 'dashed';
  textDecorationColor?: LiteralUnion<keyof FinalTheme['colors']>;
  textShadowColor?: LiteralUnion<keyof FinalTheme['colors']>;
  textShadowOffset?: { width: number; height: number };
  textShadowRadius?: number;
}

export const opacityProps = ['opacity'] as const;
export interface OpacityPropsType {
  opacity?: number;
}

export const overflowProps = ['overflow'] as const;
export interface OverflowPropsType {
  overflow?: 'hidden' | 'visible' | 'scroll';
}

export const zIndexProps = ['zIndex'] as const;
export interface ZIndexPropsType {
  zIndex?: number;
}

export const loadingProps = ['loading', 'loaderSize', 'loaderColor'] as const;
export interface LoadingPropsType {
  loading?: boolean;
  loaderSize?: number | string;
  loaderColor?: LiteralUnion<keyof FinalTheme['colors']>;
}

export const preffixSuffixProps = ['preffix', 'suffix'] as const;
export interface PrefixSuffixPropsType {
  suffix?: React.ReactNode;
  prefix?: React.ReactNode;
}

export const inputProps = ['focusBorderColor'] as const;
export interface InputPropsType {
  focusBorderColor?: LiteralUnion<keyof FinalTheme['colors']>;
}

export const disabledProps = ['disabled'] as const;
export interface DisabledPropsType {
  disabled?: null | boolean;
}

export const buttonProps = [
  'underlayColor',
  'block',
  'borderless',
  'rippleColor',
  'ripple',
] as const;
export interface ButtonPropsType {
  underlayColor?: LiteralUnion<keyof FinalTheme['colors']>;
  block?: boolean;
  borderless?: boolean;
  rippleColor?: LiteralUnion<keyof FinalTheme['colors']>;
  ripple?: boolean;
}

export const overlayProps = ['overlayColor', 'overlayOpacity'] as const;
export interface OverlayPropsType {
  overlayColor?: LiteralUnion<keyof FinalTheme['colors']>;
  overlayOpacity?: number;
}

export const variantProps = ['variant'] as const;
export interface VariantPropsType {
  variant?: string;
}

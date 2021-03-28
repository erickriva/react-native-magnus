import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import {
  BackgroundPropsType,
  DimensionPropsType,
  FlexPropsType,
  OpacityPropsType,
  TextPropsType,
  BorderPropsType,
  SpacingPropsType,
  RoundedPropsType,
  ShadowPropsType,
  VariantPropsType,
} from '../../types';

export interface SnackbarRef {
  show: (message: string | JSX.Element, config?: SnackbarProps) => string;
  hide: (id: string) => void;
  update: (
    id: string,
    message: string | JSX.Element,
    config?: SnackbarProps
  ) => void;
}

export interface SnackbarProps
  extends BorderPropsType,
    SpacingPropsType,
    ShadowPropsType,
    RoundedPropsType,
    DimensionPropsType,
    OpacityPropsType,
    FlexPropsType,
    Pick<BackgroundPropsType, 'bg'>,
    Pick<TextPropsType, 'color' | 'fontSize' | 'fontWeight'>,
    VariantPropsType {
  id?: string;
  duration?: number;
  onClose?: (id: string) => void;
  style?: StyleProp<ViewStyle>;
  useNativeDriver?: boolean;
  prefix?: (id: string) => React.ReactNode;
  suffix?: (id: string) => React.ReactNode;
}

export interface SnackbarContainerProps {
  placement?: 'top' | 'bottom';
  offset?: number;
}

export interface ToastProps extends SnackbarProps {
  message: string | JSX.Element;
}

export type SnackbarType = SnackbarProps & SnackbarContainerProps;

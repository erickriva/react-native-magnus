import {
  ViewProps as RNViewProps,
  ImageSourcePropType as RNImageSourcePropType,
} from 'react-native';

import { AvatarGroup } from './avatar.group.component';
import {
  BorderPropsType,
  SpacingPropsType,
  RoundedPropsType,
  ShadowPropsType,
  BackgroundPropsType,
  FlexPropsType,
  OpacityPropsType,
  PositionPropsType,
  TextPropsType,
  ZIndexPropsType,
  VariantPropsType,
  OverflowPropsType,
  DimensionPropsType,
} from '../../types';

export type CompoundedAvatar<P> = React.FunctionComponent<P> & {
  Group: typeof AvatarGroup;
};

export interface AvatarProps
  extends RNViewProps,
    BorderPropsType,
    SpacingPropsType,
    RoundedPropsType,
    ShadowPropsType,
    PositionPropsType,
    ZIndexPropsType,
    OpacityPropsType,
    Pick<FlexPropsType, 'alignSelf'>,
    Pick<TextPropsType, 'color' | 'fontSize' | 'fontWeight' | 'fontFamily'>,
    Pick<BackgroundPropsType, 'bg'>,
    VariantPropsType {
  size?: number;
  source?: RNImageSourcePropType;
}

export interface AvatarGroupProps
  extends BorderPropsType,
    SpacingPropsType,
    RoundedPropsType,
    ShadowPropsType,
    DimensionPropsType,
    BackgroundPropsType,
    FlexPropsType,
    PositionPropsType,
    OverflowPropsType,
    OpacityPropsType,
    ZIndexPropsType {
  offset?: string | number;
  children: React.ReactElement[] | React.ReactElement;
}

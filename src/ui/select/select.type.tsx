import {
  ViewProps as RNViewProps,
  PressableProps as RNButtonProps,
} from 'react-native';
import {
  BackgroundPropsType,
  DimensionPropsType,
  FlexPropsType,
  PositionPropsType,
  BorderPropsType,
  SpacingPropsType,
  RoundedPropsType,
  ShadowPropsType,
  VariantPropsType,
  ButtonPropsType,
  DisabledPropsType,
  LoadingPropsType,
  PrefixSuffixPropsType,
  TextPropsType,
} from '../../types';
import { SelectOption } from './select.option.component';

export interface CompoundedSelect
  extends React.ForwardRefExoticComponent<
    SelectProps & React.RefAttributes<SelectRef>
  > {
  Option: typeof SelectOption;
}

export type SelectRef = {
  open: () => void;
  close: () => void;
};

export interface SelectProps
  extends RNViewProps,
    BorderPropsType,
    SpacingPropsType,
    RoundedPropsType,
    ShadowPropsType,
    BackgroundPropsType,
    FlexPropsType,
    PositionPropsType,
    DimensionPropsType,
    VariantPropsType {
  title?: string | React.ReactNode;
  message?: string | React.ReactNode;

  showScrollIndicator?: boolean;

  multiple?: boolean;
  value: any;
  footer?: React.ReactElement[] | React.ReactElement;
  onSelect: (value: any) => void;
  data: any[];
  renderItem: (item: any, index: number) => React.ReactElement;
  keyExtractor?: (item: any, index: number) => string;
  isVisible?: boolean;

  searchableProps?: '*' | string[];
  renderNoResultsView?: (searchTerm: string) => React.ReactElement;
  renderSubmitButton?: () => React.ReactElement;
  renderSearchInput?: (props: { clearText: () => void }) => React.ReactElement;
}

export interface SelectOptionProps
  extends RNButtonProps,
    BorderPropsType,
    SpacingPropsType,
    ShadowPropsType,
    RoundedPropsType,
    LoadingPropsType,
    PositionPropsType,
    DisabledPropsType,
    FlexPropsType,
    ButtonPropsType,
    Pick<PrefixSuffixPropsType, 'prefix'>,
    Pick<BackgroundPropsType, 'bg'>,
    DimensionPropsType,
    Pick<TextPropsType, 'color' | 'fontSize'>,
    VariantPropsType {
  center?: boolean;
  value: any;
  onSelect?: (value: any) => void;
  selectedValue?: any;
}

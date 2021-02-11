import React from 'react';
import { ThemeType, useTheme } from '../theme';
import { DefaultProps, VariantPropsType } from '../types';

export const useDefaultProps = <Props extends object>(
  componentName: keyof NonNullable<ThemeType['components']> | null,
  props: Props & VariantPropsType,
  defaultProps: DefaultProps<Props>
) => {
  const { theme } = useTheme();

  const finalProps = React.useMemo(() => {
    if (!componentName) {
      return {
        ...defaultProps,
        ...props,
      };
    }

    let propsFromTheme = {
      // @ts-ignore
      ...(theme.components?.[componentName] ?? {}),
      ...(props.variant &&
        // @ts-ignore
        (theme.components?.[componentName]?.variants?.[props.variant] ?? {})),
    };

    delete propsFromTheme.variants;

    const mergedProps = {
      ...defaultProps,
      ...propsFromTheme,
      ...props,
    };

    return mergedProps;
    // @ts-ignore
  }, [componentName, defaultProps, props, theme.components]);

  return finalProps as Props & Required<typeof defaultProps>;
};

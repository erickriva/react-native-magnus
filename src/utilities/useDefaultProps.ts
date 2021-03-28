import React from 'react';
import { ThemeComponents } from '../theme/type';
import { useTheme } from '../theme';
import { DefaultProps, VariantPropsType } from '../types';

export const useDefaultProps = <Props extends object>(
  componentName: keyof NonNullable<ThemeComponents> | null,
  props: Props & VariantPropsType,
  defaultProps: DefaultProps<Props>
) => {
  const {
    theme: { components },
  } = useTheme();

  const finalProps = React.useMemo(() => {
    if (!componentName) {
      return {
        ...defaultProps,
        ...props,
      };
    }

    let propsFromTheme = {
      // @ts-ignore
      ...(components?.[componentName] ?? {}),
      ...(props.variant &&
        // @ts-ignore
        (components?.[componentName]?.variants?.[props.variant] ?? {})),
    };

    delete propsFromTheme.variants;

    const mergedProps = {
      ...defaultProps,
      ...propsFromTheme,
      ...props,
    };

    return mergedProps;
    // @ts-ignore
  }, [componentName, components, defaultProps, props]);

  return finalProps as Props & Required<typeof defaultProps>;
};

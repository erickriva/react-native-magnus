import React from 'react';
import { ThemeComponents } from '../theme/type';
import { ThemeContext } from '../theme';
import { DefaultProps, VariantPropsType } from '../types';

export function withDefaultProps<
  Props extends object,
  Defaults extends DefaultProps<Props> = {}
>(
  WrappedComponent: React.ComponentClass<Props & Defaults>,
  componentName: keyof NonNullable<ThemeComponents>,
  defaultProps: Defaults
) {
  return class extends React.PureComponent<Props & VariantPropsType> {
    static contextType = ThemeContext;
    context!: React.ContextType<typeof ThemeContext>;

    render() {
      const components = this.context.theme.components;

      if (!componentName) {
        return {
          ...defaultProps,
          ...this.props,
        };
      }

      let propsFromTheme = {
        // @ts-ignore
        ...(components?.[componentName] ?? {}),
        ...(this.props.variant &&
          //@ts-ignore
          (components?.[componentName]?.variants?.[this.props.variant] ?? {})),
      };

      delete propsFromTheme.variants;

      const mergedProps = {
        ...defaultProps,
        ...propsFromTheme,
        ...this.props,
      };

      return <WrappedComponent {...mergedProps} />;
    }
  };
}

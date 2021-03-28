import React from 'react';
import {
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ViewStyle,
} from 'react-native';

import { Toast } from './toast.component';
import {
  SnackbarProps,
  SnackbarRef,
  SnackbarType,
  ToastProps,
} from './snackbar.type';
import { useDefaultProps } from '../../utilities/useDefaultProps';

const Snackbar = React.forwardRef<SnackbarRef, SnackbarType>(
  (incomingProps, ref) => {
    const props = useDefaultProps(null, incomingProps, {
      placement: 'bottom',
      offset: 0,
    });

    const { placement, offset } = props;
    const [toasts, setToasts] = React.useState<ToastProps[]>([]);

    React.useEffect(() => {
      console.log(JSON.stringify(toasts.map((t) => t.id).join(', ')));
    }, [toasts]);

    /**
     * adds new toast in the snackbar
     *
     * @param message
     * @param config
     */
    const show = (message: string | JSX.Element, config?: SnackbarProps) => {
      let id = config?.id ?? Math.random().toString();

      requestAnimationFrame(() => {
        setToasts([
          {
            ...config,
            id,
            message,
            onClose: (id: string) => hide(id),
          },
          ...toasts.filter((t) => t.id !== id),
        ]);
      });

      return id;
    };

    /**
     * updates a existing toast
     *
     * @param id
     * @param message
     * @param config
     */
    const update = (
      id: string,
      message: string | JSX.Element,
      config?: SnackbarProps
    ) => {
      setToasts(
        toasts.map((toast) =>
          toast.id === id ? { ...toast, message, ...config } : toast
        )
      );
    };

    /**
     * removes a toast from the snackbar
     *
     * @param id
     */
    const hide = (id: string) => {
      console.log(`hide ${id}`);
      setToasts(toasts.filter((t) => t.id !== id));
    };

    /**
     * exposing functions through ref
     */
    React.useImperativeHandle(ref, () => ({
      hide,
      show,
      update,
    }));

    let style: ViewStyle = {
      bottom: placement === 'bottom' ? offset : undefined,
      top: placement === 'top' ? offset : undefined,
      justifyContent: placement === 'bottom' ? 'flex-end' : 'flex-start',
      flexDirection: placement === 'bottom' ? 'column' : 'column-reverse',
    };

    return (
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'position' : undefined}
        style={[styles.container, style]}
        pointerEvents="box-none"
      >
        {toasts.map((toast) => {
          const { message, id, ...rest } = toast;

          return (
            <Toast key={id} {...props} id={id} {...rest}>
              {message}
            </Toast>
          );
        })}
      </KeyboardAvoidingView>
    );
  }
);

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: '100%',
  },
});

export { Snackbar };

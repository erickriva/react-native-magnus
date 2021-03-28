import {
  makeTheme,
  makeThemeComponents,
  mergeThemeComponents,
} from 'react-native-magnus';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const saveThemeName = async (themeName: string) => {
  AsyncStorage.setItem('@theme', themeName);
};

export const getThemeName = async () => {
  const themeName = await AsyncStorage.getItem('@theme');
  return themeName ?? 'light';
};

const commonColors = {
  loginExample1Bg: '#F3CFDA',
  brown100: '#865c6c',
  twitter: '#1DA1F2',
  facebook: '#3b5998',
  google: '#4285F4',
  dribbble: '#ea4c88',
};

const commonComponents = makeThemeComponents({
  Text: {
    fontSize: 'lg',
    color: 'textDark',
  },
  Button: {
    fontSize: 'lg',
    textTransform: 'capitalize',

    variants: {
      warning: {
        bg: 'yellow600',
        underlayColor: 'yellow700',
      },
      danger: {
        bg: 'red600',
        underlayColor: 'red700',
      },
      success: {
        bg: 'green600',
        underlayColor: 'green700',
      },
      info: {
        bg: 'teal600',
        underlayColor: 'teal700',
      },

      'warning-border': {
        borderWidth: 2,
        borderColor: 'yellow600',
        color: 'yellow600',
        underlayColor: 'yellow100',
        bg: 'transparent',
      },
      'danger-border': {
        borderWidth: 2,
        borderColor: 'red600',
        color: 'red600',
        underlayColor: 'red100',
        bg: 'transparent',
      },
      'success-border': {
        borderWidth: 2,
        borderColor: 'green600',
        color: 'green600',
        underlayColor: 'green100',
        bg: 'transparent',
      },
      'info-border': {
        borderWidth: 2,
        borderColor: 'teal600',
        color: 'teal600',
        underlayColor: 'teal100',
        bg: 'transparent',
      },
    },
  },
  Input: {
    fontSize: 'xl',
    bg: 'card',
    color: 'textDark',

    variants: {
      'border-only': {
        borderWidth: 1,
        bg: 'screenBg',
      },
    },
  },
  Header: {
    bg: 'card',
    color: 'textDark',
  },
  Statusbar: {
    backgroundColor: 'card',
    animated: false,
  },
  DropdownOption: {
    bg: 'card',
    color: 'textDark',
  },
  Toggle: {
    circleBg: 'card',
    activeCircleBg: 'card',
    activeBg: 'green500',
  },
  CollapseBody: {
    bg: 'card',
  },
  Drawer: {
    bg: 'card',
  },
  Modal: {
    bg: 'card',
  },
  Overlay: {
    bg: 'card',
  },
  Select: {
    bg: 'card',
  },
  SelectOption: {
    bg: 'card',
  },
  Snackbar: {
    bg: 'card',
    color: 'textDark',

    variants: {
      danger: {
        bg: 'red700',
        color: 'white',
      },
      success: {
        bg: 'green700',
        color: 'white',
      },
      warning: {
        bg: 'yellow700',
        color: 'white',
      },
      info: {
        bg: 'blue700',
        color: 'white',
      },
    },
  },
});

export const lightComponents = mergeThemeComponents(commonComponents, {
  Statusbar: {
    barStyle: 'dark-content',
  },
});

export const lightTheme = makeTheme<ExactTheme>({
  name: 'light',
  colors: {
    ...commonColors,
    screenBg: 'gray200',
    card: 'white',
    textLight: 'white',
    textDark: 'gray900',
  },
});

export const darkComponents = mergeThemeComponents(commonComponents, {
  Statusbar: {
    barStyle: 'light-content',
  },

  Button: {
    variants: {
      'warning-border': {
        underlayColor: 'yellow900',
      },
      'danger-border': {
        underlayColor: 'red900',
      },
      'success-border': {
        underlayColor: 'green900',
      },
      'info-border': {
        underlayColor: 'teal900',
      },
    },
  },
});

export const darkTheme = makeTheme({
  name: 'dark',
  colors: {
    ...commonColors,
    screenBg: 'gray800',
    card: 'gray900',
    textLight: 'gray800',
    textDark: 'white',
  },
});

export type ExactTheme = typeof darkTheme;

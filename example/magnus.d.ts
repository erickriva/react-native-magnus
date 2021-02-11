import {} from 'react-native-magnus';
import { ExactTheme } from './src/themes';

declare module 'react-native-magnus' {
  export interface UserTheme extends ExactTheme {}
}

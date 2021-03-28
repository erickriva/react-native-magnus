import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  Button,
  Div,
  Header,
  Icon,
  Text,
  Toggle,
  useTheme,
} from 'react-native-magnus';
import {
  lightTheme,
  darkTheme,
  saveThemeName,
  lightComponents,
  darkComponents,
} from '../themes';

const ExampleHeader: React.FC<{ name: string }> = ({ name }) => {
  const navigation = useNavigation();
  const { theme, setTheme } = useTheme();

  return (
    <Header
      prefix={
        <Button
          rounded="circle"
          mr="lg"
          bg="card"
          justifyContent="center"
          alignItems="center"
          onPress={() => navigation.goBack()}
        >
          <Icon name="arrowleft" fontSize="4xl" color="textDark" />
        </Button>
      }
      suffix={
        <Div row justifyContent="space-between" alignItems="center" mr="lg">
          <Icon name="moon" fontFamily="FontAwesome5" fontSize="xl" mr="md" />
          <Toggle
            h={25}
            w={40}
            on={theme.values.name === 'dark'}
            onPress={() => {
              saveThemeName(
                theme.values.name === 'dark'
                  ? lightTheme.name!
                  : darkTheme.name!
              );
              setTheme({
                values: theme.values.name === 'dark' ? lightTheme : darkTheme,
                components:
                  theme.values.name === 'dark'
                    ? lightComponents
                    : darkComponents,
              });
            }}
          />
        </Div>
      }
    >
      <Div>
        <Text
          textTransform="uppercase"
          fontWeight="bold"
          fontSize="xl"
          color="textDark"
        >
          {name}
        </Text>
        <Text color="gray500">Examples</Text>
      </Div>
    </Header>
  );
};

export default ExampleHeader;

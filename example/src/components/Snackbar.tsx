import React from 'react';
import { ScrollView } from 'react-native';
import { Button, Snackbar, SnackbarRef } from 'react-native-magnus';

import ExamplePage from '../utils/ExamplePage';
import ExampleHeader from '../utils/ExampleHeader';
import ExampleSection from '../utils/ExampleSection';

const SnackbarComponent: React.FC = () => {
  const snackbarRef = React.useRef<SnackbarRef>(null);

  const variants = ['danger', 'success', 'warning', 'info'];

  return (
    <ExamplePage>
      <ExampleHeader name="snackbar" />

      <ScrollView>
        <ExampleSection name="">
          <Button
            block
            p="lg"
            onPress={() => {
              snackbarRef.current?.show('Hello World', {
                variant: variants[Math.floor(Math.random() * variants.length)],
                duration: 5000,
                suffix: (id) => (
                  <Button
                    bg="rgba(0,0,0,0.1)"
                    fontSize="sm"
                    p="sm"
                    px="md"
                    textTransform="uppercase"
                    fontWeight="bold"
                    onPress={() => snackbarRef.current?.hide(id)}
                  >
                    Close
                  </Button>
                ),
              });
            }}
          >
            Open Snackbar
          </Button>
        </ExampleSection>
      </ScrollView>

      <Snackbar
        px="xl"
        py="lg"
        ref={snackbarRef}
        fontSize="lg"
        duration={2000}
      />
    </ExamplePage>
  );
};

export default SnackbarComponent;

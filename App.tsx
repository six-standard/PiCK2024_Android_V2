import React from 'react';
import {SafeAreaView, StatusBar, Text, useColorScheme} from 'react-native';
import {Navigation} from './src';

function App(): React.JSX.Element {
  // const isDarkMode = useColorScheme() === 'dark';

  // const backgroundStyle = {
  //   backgroundColor: isDarkMode ? '#101010' : '#ffffff',
  //   flex: 1,
  // };

  return (
    <>
      <Navigation />
      {/* <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      /> */}
    </>
  );
}

export default App;

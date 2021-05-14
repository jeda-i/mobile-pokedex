import React from 'react';
import { StatusBar } from 'react-native';
import { Home } from './src/pages/home';


export default function App() {
  return (
    <>
      <StatusBar barStyle="default"/>
      <Home />
    </>
  );
}

/*const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
*/
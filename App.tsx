import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import TodoScreens from './screens/TodoScreens';


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <TodoScreens />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#17202A',
  },
});

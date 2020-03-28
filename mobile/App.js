import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import './src/config/ReactotronConfig';

console.tron.log('Hello world');

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello World</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    color: '#fff',
  }
});

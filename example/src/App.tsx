import * as React from 'react';

import { StyleSheet, View } from 'react-native';
import { GgTextView, GGText } from 'react-native-gg-text';

export default function App() {
  return (
    <View style={styles.container}>
      <GgTextView color="#32a852" style={styles.box} />
      <GGText text="张三" />
      <GGText text="李四" backgroundColor="#00f" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});

import { Text, View, StyleSheet, Alert } from 'react-native';
import React, { Component } from 'react';
import { add, sub } from '@gg/utils';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f00',
    paddingVertical: 6,
    paddingHorizontal: 8,
    lineHeight: 16,
    // textAlignVertical: 'top',
  },
  text: {
    fontSize: 16,
    fontWeight: '700',
    color: '#fff',
    lineHeight: 21,
  },
});

interface IProps {
  text: string;
  backgroundColor?: string;
}

export default class GGText extends Component<IProps> {
  pressHandle(text: string) {
    const r1 = add(1, 2);
    const r2 = sub(10, 2);
    Alert.alert(`hello, ${text}, 1 + 2 = ${r1}, 10 - 2 = ${r2}`);
  }

  render() {
    const { text = 'GGText', backgroundColor = '#F00' } = this.props;
    return (
      <View style={[styles.container, { backgroundColor }]}>
        <Text style={[styles.text]} onPress={() => this.pressHandle(text)}>
          {text}
        </Text>
      </View>
    );
  }
}

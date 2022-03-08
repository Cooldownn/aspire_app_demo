import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { globalColors, globalFonts } from '../../assets/global';

export const AmountMoneyComponent = ({ amount, handlePress }) => {
  return (
    <TouchableOpacity
      style={styles.background}
      onPress={() => handlePress(amount)}
    >
      <Text style={styles.text}>S$ </Text>
      <Text style={styles.text}>{amount}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: globalColors.green_demi,
    width: 105,
    height: 40,
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16,
    marginEnd: 10,
  },
  text: {
    color: globalColors.green_main,
    fontSize: 14,
    fontFamily: globalFonts.fontDemiBold.fontFamily,
  },
});

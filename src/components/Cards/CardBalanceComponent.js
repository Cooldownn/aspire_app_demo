import React from 'react';
import { View, StyleSheet } from 'react-native';
import { globalColors, globalFonts } from '../../assets/global';
import { DisplayText } from '../common/DisplayText';

export const CardBalanceComponent = ({ currency, amount, styleMoney }) => {
  return (
    <View
      style={{
        flexDirection: 'row',
      }}
    >
      <DisplayText label={currency} style={styles.currency} />
      <DisplayText label={amount} style={[styles.money, styleMoney]} />
    </View>
  );
};

const styles = StyleSheet.create({
  currency: {
    marginEnd: 10,
    width: 40,
    height: 20,
    textAlign: 'center',
    alignSelf: 'center',
    fontSize: 12,
    fontFamily: globalFonts.fontBold.fontFamily,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: globalColors.green_main,
    backgroundColor: globalColors.green_main,
    overflow: 'hidden',
  },
  money: {
    fontSize: 22,
    fontFamily: globalFonts.fontBold.fontFamily,
    marginTop: 3,
  },
});

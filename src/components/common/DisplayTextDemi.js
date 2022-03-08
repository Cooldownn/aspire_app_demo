import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { globalColors, globalFonts } from '../../assets/global';

export const DisplayTextDemiBold = ({ label, style, ...props }) => {
  return (
    <Text {...props} style={[styles.text, style]}>
      {label}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: globalFonts.fontDemiBold.fontFamily,
    fontSize: 14,
    color: globalColors.white,
  },
});

import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { globalColors, globalFonts } from '../../assets/global';

export const Heading = ({ label, style, ...props }) => {
  return (
    <Text {...props} style={[styles.text, style]}>
      {label}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: globalFonts.fontBold.fontFamily,
    fontSize: 24,
    color: globalColors.white,
  },
});

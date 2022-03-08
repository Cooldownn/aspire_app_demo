import React from 'react';
import { View, StyleSheet } from 'react-native';
import Icon from 'react-native-ionicons';
import ToggleSwitch from 'toggle-switch-react-native';
import { globalColors } from '../../assets/global';
import { DisplayText } from '../common/DisplayText';

export const SectionCardsComponent = ({
  icon,
  header,
  subheader,
  isToggleVisible,
  onPressToggle,
  toggle,
}) => {
  return (
    <View
      style={{
        marginStart: 24,
        marginTop: 30,
        flexDirection: 'row',
        flexGrow: 1,
      }}
    >
      <Icon
        name={icon}
        size={24}
        style={{
          color: globalColors.blue_icon,
        }}
      />
      <View
        style={{
          flexDirection: 'column',
        }}
      >
        <DisplayText label={header} style={styles.header} />
        <DisplayText label={subheader} style={styles.subheader} />
      </View>
      <View style={styles.toggle}>
        {isToggleVisible ? (
          <ToggleSwitch
            isOn={toggle}
            onColor={'green'}
            size={'small'}
            onToggle={onPressToggle}
          />
        ) : null}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    color: globalColors.demi_black,
    marginStart: 12,
  },
  subheader: {
    color: globalColors.grey_sub_text,
    marginStart: 12,
  },
  toggle: {
    flexDirection: 'column',
    flexGrow: 1,
    alignSelf: 'flex-end',
    alignItems: 'flex-end',
    marginEnd: 24,
    marginBottom: 20,
  },
});

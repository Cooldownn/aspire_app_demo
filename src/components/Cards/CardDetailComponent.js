import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Icon from 'react-native-ionicons';
import { globalColors } from '../../assets/global';
import { DisplayText } from '../common/DisplayText';
import { DisplayTextDemiBold } from '../common/DisplayTextDemi';
import { Heading } from '../common/Heading';

export const CardDetailComponent = ({
  accountName,
  accountNumber,
  expiredDate,
  cvvCode,
  cardType,
}) => {
  const cardNumberFormat = (value) => {
    const regex = /^(\d{0,4})(\d{0,4})(\d{0,4})(\d{0,4})$/g;
    const onlyNumbers = value.replace(/[^\d]/g, '');

    return onlyNumbers.replace(regex, (regex, $1, $2, $3, $4) =>
      [$1, $2, $3, $4].filter((group) => !!group).join('        ')
    );
  };

  return (
    <View style={styles.mainCard}>
      <View
        style={{ flexDirection: 'row', alignSelf: 'flex-end', marginEnd: 10 }}
      >
        <Icon name={'airplane'} size={24} style={styles.icon} />
        <Text style={{ marginTop: 13, marginStart: -5, color: 'white' }}>
          Aspire
        </Text>
      </View>
      <Heading label={accountName} style={styles.accountName} />
      <DisplayTextDemiBold
        label={cardNumberFormat(accountNumber)}
        style={styles.accountNumber}
      />
      <View
        style={{
          flexDirection: 'row',
          marginStart: 24,
          marginTop: 10,
        }}
      >
        <DisplayTextDemiBold
          label={`Thru: ${expiredDate}`}
          style={styles.expiredDate}
        />
        <DisplayTextDemiBold label={`CVV: ${cvvCode}`} />
      </View>
      <Heading label={cardType} style={styles.visa} />
    </View>
  );
};

const styles = StyleSheet.create({
  mainCard: {
    width: 336,
    height: 220,
    backgroundColor: globalColors.green_main,
    alignSelf: 'center',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: globalColors.green_main,
  },
  icon: {
    alignSelf: 'flex-end',
    margin: 10,
    color: 'white',
  },
  accountName: {
    marginStart: 24,
    marginTop: 20,
  },
  accountNumber: {
    marginStart: 24,
    marginTop: 10,
  },
  expiredDate: {
    marginEnd: 32,
  },
  visa: {
    alignSelf: 'flex-end',
    margin: 15,
  },
});

import React, { useRef, useCallback, useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Icon from 'react-native-ionicons';
import { globalColors, globalFonts } from '../../assets/global';
import { DisplayText } from '../common/DisplayText';
import { Heading } from '../common/Heading';
import PropTypes from 'prop-types';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import { CardDetailComponent } from './CardDetailComponent';
import { SectionCardsComponent } from './SectionCardsComponent';
import { ROUTES } from '../../navigations/routes';
import { CardBalanceComponent } from './CardBalanceComponent';
import { useFocusEffect } from '@react-navigation/native';

export const DebitCardComponent = ({ currency, amount, navigation }) => {
  const sheetRef = useRef(null);
  const handleSheetchange = useCallback((index) => {}, []);
  const [spendingAmount, setSpendingAmount] = useState(0);
  const [toggle, setToggle] = useState(false);

  const onPressToggle = (isOn) => {
    setToggle(isOn);
    navigation.navigate(ROUTES.SPENDING, {
      setSpendingAmount: setSpendingAmount,
      setToggle: setToggle,
      toggle: toggle,
    });
  };

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <View style={styles.headerAmount}>
        <Icon name={'airplane'} size={24} style={styles.icon} />
        <Heading label={'Debit Card'} style={styles.heading} />
        <DisplayText label={'Available balance'} style={styles.displayText} />
        <View style={styles.balanceRow}>
          <CardBalanceComponent currency={currency} amount={amount} />
        </View>
      </View>
      <BottomSheet
        ref={sheetRef}
        snapPoints={['60%', '85%']}
        onChange={handleSheetchange}
        handleIndicatorStyle={{
          backgroundColor: 'transparent',
        }}
      >
        <BottomSheetView>
          <CardDetailComponent
            accountName={'Mark Henry'}
            accountNumber={'5647341124132020'}
            expiredDate={'12/20'}
            cvvCode={'456'}
            cardType={'VISA'}
          />
          <SectionCardsComponent
            icon={'add-circle-outline'}
            header={'Top-up account'}
            subheader={'Deposit money to your account to use with card'}
          />
          <SectionCardsComponent
            icon={'add-circle-outline'}
            header={'Weekly spending limit'}
            subheader={
              spendingAmount == 0
                ? 'You haven’t set any spending limit on card'
                : `Your weekly spending amount is S$ ${spendingAmount}`
            }
            isToggleVisible={true}
            onPressToggle={onPressToggle}
            toggle={toggle}
          />
          <SectionCardsComponent
            icon={'add-circle-outline'}
            header={'Freeze card'}
            subheader={'Your debit card is currently active'}
            isToggleVisible={true}
          />
          <SectionCardsComponent
            icon={'add-circle-outline'}
            header={'Get a new card'}
            subheader={'This deactivates your current debit card'}
          />
          <SectionCardsComponent
            icon={'add-circle-outline'}
            header={'Deactivate cards'}
            subheader={'Your previously deactivated cards'}
          />
        </BottomSheetView>
      </BottomSheet>
    </View>
  );
};

DebitCardComponent.propTypes = {
  currency: PropTypes.string,
  amount: PropTypes.string,
};

const styles = StyleSheet.create({
  headerAmount: {
    flex: 1,
    backgroundColor: globalColors.blue_main,
  },
  icon: {
    alignSelf: 'flex-end',
    marginTop: 10,
    marginEnd: 20,
    color: globalColors.green_main,
  },
  heading: {
    marginStart: 20,
    marginTop: 20,
  },
  displayText: {
    marginStart: 20,
    marginTop: 20,
  },
  balanceRow: {
    marginStart: 20,
    marginTop: 10,
  },
  cardDetails: {
    flex: 2,
    backgroundColor: globalColors.white,
  },
});

import React, { useRef, useCallback, useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-ionicons';
import { globalColors } from '../assets/global';
import { Heading } from '../components/common/Heading';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import { DisplayText } from '../components/common/DisplayText';
import { CardBalanceComponent } from '../components/Cards/CardBalanceComponent';
import { AmountMoneyComponent } from '../components/Cards/AmountMoneyComponent';

export const SpendingScreen = ({ navigation, route }) => {
  const { setSpendingAmount, setToggle, toggle } = route.params;

  const onBackPress = () => {
    setToggle(toggle);
    navigation.goBack();
  };

  const sheetRef = useRef(null);
  const handleSheetchange = useCallback((index) => {}, []);

  const handlePress = (amount) => {
    setSpending(amount);
  };

  const handleSaveButton = () => {
    setSpendingAmount(spending);
    navigation.goBack();
  };

  const [spending, setSpending] = useState(0);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, backgroundColor: globalColors.blue_main }}>
        <View
          style={{
            flexDirection: 'row',
          }}
        >
          <TouchableOpacity
            onPress={onBackPress}
            style={{
              margin: 16,
              width: 40,
              height: 40,
            }}
          >
            <Icon name={'arrow-back'} color={'white'} />
          </TouchableOpacity>
          <View
            style={{
              flex: 1,
              alignItems: 'flex-end',
              marginEnd: 16,
            }}
          >
            <Icon name={'airplane'} size={24} style={styles.icon} />
          </View>
        </View>
        <View style={{ flex: 1 }}>
          <Heading label={'Spending limit'} style={styles.heading} />
        </View>
      </View>
      <BottomSheet
        ref={sheetRef}
        snapPoints={['70%', '70%']}
        onChange={handleSheetchange}
        enableHandlePanningGesture={false}
        handleIndicatorStyle={{
          backgroundColor: 'transparent',
        }}
      >
        <BottomSheetView
          style={{
            marginStart: 20,
            marginEnd: 20,
            flex: 1,
          }}
        >
          <View
            style={{
              flexDirection: 'row',
            }}
          >
            <Icon name={'wallet'} size={24} />
            <DisplayText
              label={'Set a weekly debit card spending limit'}
              style={styles.text1}
            />
          </View>
          <View
            style={{
              marginTop: 20,
            }}
          >
            <CardBalanceComponent
              currency={'S$'}
              amount={spending}
              styleMoney={styles.textMoney}
            />
          </View>
          <View style={styles.seperatedLine}></View>
          <DisplayText
            label={'Here weekly means the last 7 days - not the calendar week'}
            style={styles.text2}
          />
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
            }}
          >
            <AmountMoneyComponent amount={'5,000'} handlePress={handlePress} />
            <AmountMoneyComponent amount={'10,000'} handlePress={handlePress} />
            <AmountMoneyComponent amount={'15,000'} handlePress={handlePress} />
          </View>
          <View
            style={{
              justifyContent: 'flex-end',
              flex: 1,
              marginHorizontal: 20,
              marginVertical: 10,
            }}
          >
            <TouchableOpacity
              style={{
                backgroundColor: globalColors.green_main,
                justifyContent: 'center',
                height: 56,
                borderRadius: 28,
              }}
              onPress={handleSaveButton}
            >
              <Text
                style={{
                  textAlign: 'center',
                  color: globalColors.white,
                }}
              >
                Save
              </Text>
            </TouchableOpacity>
          </View>
        </BottomSheetView>
      </BottomSheet>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  icon: {
    color: globalColors.green_main,
    marginTop: 20,
  },
  heading: {
    marginStart: 20,
    marginTop: 20,
  },
  text1: {
    color: globalColors.black,
    marginStart: 10,
    marginTop: 5,
  },
  textMoney: {
    color: globalColors.black,
  },
  seperatedLine: {
    height: 0.5,
    backgroundColor: globalColors.grey_sub_text,
    marginTop: 5,
  },
  text2: {
    color: globalColors.grey_sub_text,
    fontSize: 13,
    marginTop: 10,
  },
});

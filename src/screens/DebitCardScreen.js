import React, { useEffect, useState } from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { DebitCardComponent } from '../components/Cards/DebitCardComponent';
import { getCardDetail } from '../contexts/actions/getCard';

export const DebitCardScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const { cardData } = useSelector((state) => {
    return state;
  });
  const [cardDetail, setCardDetail] = useState(null);
  useEffect(() => {
    // Assumption to make a API Call right here -> dispatch action
    // dispatch(getCardDetail());
  }, []);

  useEffect(() => {
    setCardDetail(cardData);
  }, [cardData]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{
          flex: 1,
        }}
      >
        <DebitCardComponent
          currency={'S$'}
          amount={'80,000'}
          navigation={navigation}
        />
      </View>
    </SafeAreaView>
  );
};

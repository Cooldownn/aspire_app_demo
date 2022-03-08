import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ROUTES } from './routes';
import { DebitCardScreen } from '../screens/DebitCardScreen';
import { SpendingScreen } from '../screens/SpendingScreen';

export const DebitCardStack = () => {
  const DebitStack = createStackNavigator();
  return (
    <DebitStack.Navigator initialRouteName={ROUTES.DEBIT_CARD}>
      <DebitStack.Screen
        name={ROUTES.DEBIT_CARD}
        component={DebitCardScreen}
        options={({ navigation, route }) => ({
          headerTitle: ROUTES.DEBIT_CARD,
          headerShown: false,
        })}
      />
      <DebitStack.Screen
        name={ROUTES.SPENDING}
        component={SpendingScreen}
        options={({ navigation, route }) => ({
          headerShown: false,
        })}
      />
    </DebitStack.Navigator>
  );
};

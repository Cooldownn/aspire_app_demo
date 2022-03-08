import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { MainStackNavigator } from './MainStackNavigator';

const MainTab = () => {
  const MainStack = createStackNavigator();

  return (
    <>
      <SafeAreaProvider>
        <NavigationContainer>
          <MainStack.Navigator screenOptions={{ headerShown: false }}>
            <MainStack.Screen name="TabScreen" component={MainStackNavigator} />
          </MainStack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </>
  );
};

export default MainTab;

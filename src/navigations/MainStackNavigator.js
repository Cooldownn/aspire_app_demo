import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, SafeAreaView, StyleSheet, Text, Image } from 'react-native';
import { ROUTES } from './routes';
import { EmptyScreen } from '../screens/EmptyScreen';
import { globalColors, globalFonts } from '../assets/global';
import { DebitCardStack } from './DebitCardStack';
const userImage = require('../assets/images/user.png');
const payImage = require('../assets/images/pay.png');

const Tab = createBottomTabNavigator();
export const MainStackNavigator = () => {
  return (
    <View style={{ flex: 1 }}>
      <Tab.Navigator
        initialRouteName={ROUTES.DEBIT_CARD}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused }) => {
            let imagePath;
            let labelColor = globalColors.grey_sub_text;

            switch (route.name) {
              case ROUTES.HOME:
                imagePath = userImage;
                if (focused) {
                  labelColor = globalColors.green_main;
                }
                break;
              case ROUTES.DEBIT_CARD:
                imagePath = payImage;
                if (focused) {
                  labelColor = globalColors.green_main;
                }
                break;
              case ROUTES.PAYMENTS:
                imagePath = userImage;
                if (focused) {
                  labelColor = globalColors.green_main;
                }
                break;
              case ROUTES.CREDITS:
                imagePath = userImage;
                if (focused) {
                  labelColor = globalColors.green_main;
                }
                break;
              case ROUTES.PROFILE:
                imagePath = userImage;
                if (focused) {
                  labelColor = globalColors.green_main;
                }
                break;
            }

            return (
              <SafeAreaView style={{ flex: 1, marginTop: 5 }}>
                <View
                  style={{
                    alignItems: 'center',
                  }}
                >
                  <Image
                    source={imagePath}
                    style={{
                      width: 20,
                      height: 20,
                      resizeMode: 'center',
                    }}
                  />
                  <Text style={[styles.labelStyle, { color: labelColor }]}>
                    {route.name}
                  </Text>
                </View>
              </SafeAreaView>
            );
          },
        })}
        tabBarOptions={{
          activeTintColor: globalColors.green_main,
          inactiveTintColor: globalColors.grey_sub_text,
          labelStyle: styles.labelStyle,
          labelPosition: 'below-icon',
          showLabel: false,
          keyboardHidesTabBar: true,
        }}
      >
        <Tab.Screen name={ROUTES.HOME} component={EmptyScreen} />
        <Tab.Screen
          name={ROUTES.DEBIT_CARD}
          component={DebitCardStack}
          options={{
            headerShown: false,
          }}
        />
        <Tab.Screen name={ROUTES.PAYMENTS} component={EmptyScreen} />
        <Tab.Screen name={ROUTES.CREDITS} component={EmptyScreen} />
        <Tab.Screen
          name={ROUTES.PROFILE}
          component={EmptyScreen}
          options={({ route }) => ({
            //tabBarVisible: getTabBarVisibility(route),
            //unmountOnBlur: false,
          })}
        />
      </Tab.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  labelStyle: {
    fontSize: 12,
    color: globalColors.green_main,
    fontFamily: globalFonts.fontDemiBold.fontFamily,
    marginTop: 3,
  },
});

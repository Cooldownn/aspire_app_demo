import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, LogBox } from 'react-native';
import store from './contexts/store';
import MainTab from './navigations/MainTab';
import { Provider } from 'react-redux';

export default App = () => {
  LogBox.ignoreAllLogs();
  return (
    <Provider store={store}>
      <MainTab />
    </Provider>
  );
};

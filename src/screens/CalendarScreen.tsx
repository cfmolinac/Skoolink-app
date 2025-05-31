import React from 'react';
import { View } from 'react-native';
import CalendarView from '../components/CalendarView';
import { SafeAreaView } from 'react-native-safe-area-context';

const CalendarScreen = () => (
  <SafeAreaView style={{ flex: 1, backgroundColor: '#FAFAFA' }}>
    <CalendarView />
  </SafeAreaView>
);

export default CalendarScreen;
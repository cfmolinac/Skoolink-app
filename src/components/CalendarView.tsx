import React from 'react';
import { Calendar } from 'react-native-calendars';
import { calendarStyles } from '../styles/CalendarStyles';

const CalendarView = () => (
  <Calendar
    style={calendarStyles.calendar}
    // Puedes agregar más props aquí según tus necesidades
    onDayPress={day => {
      // Maneja la selección de un día
      console.log('Día seleccionado', day);
    }}
    theme={{
      selectedDayBackgroundColor: '#FFB347', // color cálido ejemplo
      todayTextColor: '#FF7043',
      arrowColor: '#FF7043',
      monthTextColor: '#333',
      textDayFontWeight: '500',
      textMonthFontWeight: 'bold',
      textDayHeaderFontWeight: 'bold',
    }}
  />
);

export default CalendarView;
import React, { useState } from 'react'
import DatePicker from 'react-native-date-picker'

const timepicker = () => {
  const [date, setDate] = useState(new Date())

  return <DatePicker date={date} 
  onDateChange={setDate}
  mode = "time" 
  />
}

export default timepicker;
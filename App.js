import React from 'react';
import { Alert, SafeAreaView, StyleSheet, Text, View,} from 'react-native';
import Button from './button';
import Button2 from './button2';
import Button3 from './button3';
import Button4 from './button4';
import Button5 from './button5';
import Button6 from './button6';
import Button7 from './button7';
import Button8 from './button8';
import Button9 from './button9';
import Button10 from './button10';
import Button11 from './button11';
import Header from './Components/header';
import MedHeader from './Components/MedHeader';
import EMedHeader from './Components/EMedHeader';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SmallMed from './Components/SmallMed';
import MediumMed from './Components/MediumMed';
import LargeMed from './Components/LargeMed';
import Calendars from './Components/Calendars';
import Setting from './Components/Setting';
import {BleManager} from 'react-native-ble-plx'


function HomeScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Header/>
      <Button text = 'Medications' onPress={() => navigation.navigate('Medications')}/>
      <Button2 text = 'Settings' onPress={() => navigation.navigate('Settings')}/>
      <Button3 text = 'Dispense' onPress={(Alert)}/>
    </View>
  );
}

function Medications({navigation}) {
  return (
    <View style={styles.container}>
      <MedHeader/>
      <Button4 text = 'edit  meds' onPress={() => navigation.navigate('EditMeds')}/>
      <Button5 text = 'Calendars' onPress={() => navigation.navigate('Calendar')}/>
    </View>
  );
}

function EditMeds({navigation}) {
  return (
    <View style={styles.container}>
      <EMedHeader/>
      <Button6 text = 'Small Medication' onPress={() => navigation.navigate('MedA')}/>
      <Button7 text = 'Medium Medication' onPress={() => navigation.navigate('MedB')}/>
      <Button8 text = 'Large Medication' onPress={() => navigation.navigate('MedC')}/>
    </View>
  );
}
function MedA({navigation}) {
  return (
    <View style={styles.container}>
      <SmallMed/>
    </View>
  );
}
function MedB({navigation}) {
  return (
    <View style={styles.container}>
      <MediumMed/>
    </View>
  );
}
function MedC({navigation}) {
  return (
    <View style={styles.container}>
      <LargeMed/>
    </View>
  );
}
function Calendar({navigation}) {
  return (
    <View style={styles.container}>
      <Calendars/>
    </View>
  );
}
function Settings({navigation}) {
  return (
    <View style={styles.container}>
      <Setting/>
      <Button9 text = 'Profile' onPress={() => navigation.navigate('MedA')}/>
      <Button10 text = 'Notifications' onPress={() => navigation.navigate('MedB')}/>
      <Button11 text = 'Bluetooth' onPress={() => navigation.navigate('Bluetooth')}/>
    </View>
  );
}
function Bluetooth({navigation}) {
  return (
    <View style={styles.container}>
      <Calendars/>
    </View>
  );
}
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" 
        component={HomeScreen} 
        options={{title: 'Overview'}}
        />

        <Stack.Screen name="Medications" 
        component={Medications} 
        options={{title: 'Medications'}}
        />

        <Stack.Screen name="EditMeds" 
        component={EditMeds} 
        options={{title: 'Edit Meds'}}
        />
        <Stack.Screen name="MedA" 
        component={MedA} 
        options={{title: 'Small Med'}}
        />
        <Stack.Screen name="MedB" 
        component={MedB} 
        options={{title: 'Medium Med'}}
        />
        <Stack.Screen name="MedC" 
        component={MedC} 
        options={{title: 'Large Med'}}
        />
        <Stack.Screen name="Calendar" 
        component={Calendar} 
        options={{title: 'Calendar'}}
        />
        <Stack.Screen name="Settings" 
        component={Settings} 
        options={{title: 'Settings'}}
        />
        <Stack.Screen name="Bluetooth" 
        component={Bluetooth} 
        options={{title: 'Bluetooth'}}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "hsl(194, 77%, 35%)",
    flex: 1,
  }
});

import React, {useState} from 'react';
import { Alert, SafeAreaView, StyleSheet, Text, View, TextInput,TouchableOpacity, Pressable} from 'react-native';
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
import { ScrollView } from 'react-native-gesture-handler';
import { Colors } from './Components/colors';
import PhotoButton from './PhotoButton';

function HomeScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Header/>
      <Button text = 'Medications' onPress={() => navigation.navigate('Medications')}/>
      <Button2 text = 'Settings' onPress={() => navigation.navigate('Settings')}/>
      <Button3 text = 'Dispense' onPress={(Alert)}/>
      <PhotoButton text = 'Facial recognition' onPress={(Alert)}/>
    </View>
  );
}

function Medications({navigation}) {
  //const [text, onChangeText] = React.useState('Useless Text');
  //const [number, onChangeNumber] = React.useState('');
  const [name, setName] = useState("");
  return (
    <View style={styles.container}>
      <MedHeader/>
      <TextInput style={styles.input}
        placeholder="Notes"
        onSubmitEditing={(value) => setName(value.nativeEvent.text)}
      />

      <View style={{height: 220}}>
        <ScrollView style={styles.scrollview1}>
          <Text style={styles.text1}onPress={() => navigation.navigate('Notes',{paramkey: name})}>{name} </Text>
        </ScrollView>
      </View>

      <Button4 text = 'edit meds' onPress={() => navigation.navigate('EditMeds')}/>
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
  const [name, setName] = useState("");
  const [nPills, setPills] = useState("");
  const [Dose, setDose] = useState("");
  const [Hour, setHour] = useState("");
  const [Minute, setMinute] = useState("");
  const [monday, setMonday] = useState(false);
  const [tuesday, setTuesday] = useState(false);
  const [wednesday, setWednesday] = useState(false);
  const [thursday, setThursday] = useState(false);
  const [friday, setFriday] = useState(false);
  const [saturday, setSaturday] = useState(false);
  const [sunday, setSunday] = useState(false);

  const mToggle = () => setMonday(value => !value);
  const tToggle = () => setTuesday(value => !value);
  const wToggle = () => setWednesday(value => !value);
  const thToggle = () => setThursday(value => !value);
  const fToggle = () => setFriday(value => !value);
  const sToggle = () => setSaturday(value => !value);
  const suToggle = () => setSunday(value => !value);

  function colorM()
  {
    if(monday == true)
    {
      return '#00FF00';
    }
    else
    {
      return '#FF0000';
    }
  }
  function colorT()
  {
    if(tuesday == true)
    {
      return '#00FF00';
    }
    else
    {
      return '#FF0000';
    }
  }
  function colorW()
  {
    if(wednesday == true)
    {
      return '#00FF00';
    }
    else
    {
      return '#FF0000';
    }
  }
  function colorTh()
  {
    if(thursday == true)
    {
      return '#00FF00';
    }
    else
    {
      return '#FF0000';
    }
  }
  function colorF()
  {
    if(friday == true)
    {
      return '#00FF00';
    }
    else
    {
      return '#FF0000';
    }
  }
  function colorS()
  {
    if(saturday == true)
    {
      return '#00FF00';
    }
    else
    {
      return '#FF0000';
    }
  }
  function colorSu()
  {
    if(sunday == true)
    {
      return '#00FF00';
    }
    else
    {
      return '#FF0000';
    }
  }



  function minutefix(time)
  { 
    if(time > "59"){
      return "59";
    }
    if(time <= "0"){
      return "00";
    }
    if(time == 1){
      return "01";
    }
    if(time == 2){
      return "02";
    }
    if(time == 3){
      return "03";
    }
    if(time == 4){
      return "04";
    }
    if(time == 5){
      return "05";
    }
    if(time == 6){
      return "06";
    }
    if(time == 7){
      return "07";
    }
    if(time == 8){
      return "08";
    }
    if(time == 9){
      return "09";
    }
    else{
      return time;
    }
  }
  function Hourfix(time)
  { 
    if(time == "22"){
      return "10";
    }
    if(time == "21"){
      return "9";
    }
    if(time == "20"){
      return "8";
    }
    if(time == "19"){
      return "7";
    }
    if(time == "18"){
      return "6";
    }
    if(time == "17"){
      return "5";
    }
    if(time == "16"){
      return "4";
    }
    if(time == "15"){
      return "3";
    }
    if(time == "14"){
      return "2";
    }
    if(time == "13"){
      return "1";
    }
    if(time == "12"){
      return "12";
    }
    if(time == "11"){
      return "11";
    }
    if(time == "10"){
      return "10";
    }
    if(time == "9"){
      return "9";
    }
    if(time == "8"){
      return "8";
    }
    if(time == "7"){
      return "7";
    }
    if(time == "6"){
      return "6";
    }
    if(time == "5"){
      return "5";
    }
    if(time == "4"){
      return "4";
    }
    if(time == "3"){
      return "3";
    }
    if(time == "2"){
      return "2";
    }
    if(time == "1"){
      return "1";
    }
    if(time <= "0"){
      return "12";
    }
    if(time <="031" || time > "031"){
      return "00";
    }
    if(time >= "23"){
      return "11";
    }
    else{
      return time;
    }
  }
  function am(time){
    switch(time){
      case "0": return "AM";
      case "1": return "AM";
      case "2": return "AM";
      case "3": return "AM";
      case "4": return "AM";
      case "5": return "AM";
      case "6": return "AM";
      case "7": return "AM";
      case "8": return "AM";
      case "9": return "AM";
      case "10": return "AM";
      case "11": return "AM";
      case "12": return "PM";
      case "13": return "PM";
      case "14": return "PM";
      case "15": return "PM";
      case "16": return "PM";
      case "16": return "PM";
      case "17": return "PM";
      case "18": return "PM";
      case "19": return "PM";
      case "20": return "PM";
      case "21": return "PM";
      case "22": return "PM";
      case "23": return "PM";
    }
  };

  return (
    <View style={styles.container}>
      <SmallMed text = {name}/>
      <TextInput style={styles.input2}
        placeholder="''Name of medicine here''"
        onSubmitEditing={(value) => setName(value.nativeEvent.text)}
      />
      <TextInput style={styles.input2}
        placeholder="''Number of Pills being added to Dispenser''"
        onSubmitEditing={(value) => setPills(value.nativeEvent.text)}
      />
      <TextInput style={styles.input2}
        placeholder="''Pills per dosage''"
        onSubmitEditing={(value) => setDose(value.nativeEvent.text)}
      />
      <TextInput style={styles.input3}
        placeholder="''Hour to take pill''"
        onSubmitEditing={(value) => setHour(value.nativeEvent.text)}
      />
      <TextInput style={styles.input4}
        placeholder="''Minute to take pill''"
        onSubmitEditing={(value) => setMinute(value.nativeEvent.text)}
      />


      <Text style={styles.text3}numberOfLines={1} ellipsizeMode='tail'> 
        {name}
      </Text>

      <Text style={styles.text4}numberOfLines={1} ellipsizeMode='tail'> 
        {nPills} pills total
      </Text>

      <Text style={styles.text4}numberOfLines={1} ellipsizeMode='tail'> 
        {Dose} per dosage
      </Text>

      <Text style={styles.text4}numberOfLines={1} ellipsizeMode='tail'> 
      Time for med - {Hourfix(Hour)} : {minutefix(Minute)} {am(Hour)}
      </Text>   


      <View style={
        {    
          height: 30,
          fontSeize: 15,
          margin: 85,
          backgroundColor: '#03CEA4',
          borderWidth: 1,
          top: -140,
          padding: 2,
          textAlign: 'center',
          justifyContent: 'center',
        }}>
        <Text style={{
          textAlign: 'center',
          justifyContent: 'center',
          textDecorationLine: 'underline'
          }}>
          Days to Dispense. Click all that apply
        </Text>
        
      </View>

      <View style={
        {    
          height: 50,
          width: 85,
          fontSeize: 15,
          margin: 8,
          backgroundColor: colorM(),
          borderWidth: 1,
          padding: 10,
          justifyContent: 'center',
          top: -220,
          borderTopLeftRadius:8,
          borderTopRightRadius:8,
          borderBottomLeftRadius:8,
          borderBottomRightRadius:8,
        }}>
        <TouchableOpacity style={styles.button} onPress={mToggle}>
        <Text>Monday</Text>
        </TouchableOpacity>
      </View>

      <View style={
        {    
          height: 50,
          width: 85,
          fontSeize: 15,
          margin: 8,
          backgroundColor: colorT(),
          borderWidth: 1,
          padding: 10,
          justifyContent: 'center',
          top: -286,
          left: 101,
          borderTopLeftRadius:8,
          borderTopRightRadius:8,
          borderBottomLeftRadius:8,
          borderBottomRightRadius:8,
        }}>
        <TouchableOpacity style={styles.button} onPress={tToggle}>
        <Text>Tuesday</Text>
        </TouchableOpacity>      
      </View>

      <View style={
        {    
          height: 50,
          width: 94,
          fontSeize: 15,
          margin: 8,
          backgroundColor: colorW(),
          borderWidth: 1,
          padding: 10,
          justifyContent: 'center',
          top: -352,
          left: 202,
          borderTopLeftRadius:8,
          borderTopRightRadius:8,
          borderBottomLeftRadius:8,
          borderBottomRightRadius:8,
        }}>
        <TouchableOpacity style={styles.button} onPress={wToggle}>
        <Text>Wednesday</Text>
        </TouchableOpacity>      
      </View>

      <View style={
        {    
          height: 50,
          width: 85,
          fontSeize: 15,
          margin: 8,
          backgroundColor: colorTh(),
          borderWidth: 1,
          padding: 10,
          justifyContent: 'center',
          top: -418,
          left: 312,
          borderTopLeftRadius:8,
          borderTopRightRadius:8,
          borderBottomLeftRadius:8,
          borderBottomRightRadius:8,
        }}>
        <TouchableOpacity style={styles.button} onPress={thToggle}>
        <Text>Thursday</Text>
        </TouchableOpacity>      
      </View>

      <View style={
        {    
          height: 50,
          width: 85,
          fontSeize: 15,
          margin: 8,
          backgroundColor: colorF(),
          borderWidth: 1,
          padding: 10,
          justifyContent: 'center',
          top: -418,
          left: 50,
          borderTopLeftRadius:8,
          borderTopRightRadius:8,
          borderBottomLeftRadius:8,
          borderBottomRightRadius:8,
        }}>
        <TouchableOpacity style={styles.button} onPress={fToggle}>
        <Text>Friday</Text>
        </TouchableOpacity>      
      </View>

      <View style={
        {    
          height: 50,
          width: 85,
          fontSeize: 15,
          margin: 8,
          backgroundColor: colorS(),
          borderWidth: 1,
          padding: 10,
          justifyContent: 'center',
          top: -484,
          left: 151,
          borderTopLeftRadius:8,
          borderTopRightRadius:8,
          borderBottomLeftRadius:8,
          borderBottomRightRadius:8,
        }}>
        <TouchableOpacity style={styles.button} onPress={sToggle}>
        <Text>Saturday</Text>
        </TouchableOpacity>      
      </View>

      <View style={
        {    
          height: 50,
          width: 85,
          fontSeize: 15,
          margin: 8,
          backgroundColor: colorSu(),
          borderWidth: 1,
          padding: 10,
          justifyContent: 'center',
          top: -550,
          left: 252,
          borderTopLeftRadius:8,
          borderTopRightRadius:8,
          borderBottomLeftRadius:8,
          borderBottomRightRadius:8,
        }}>
        <TouchableOpacity style={styles.button} onPress={suToggle}>
        <Text>Sunday</Text>
        </TouchableOpacity>      
      </View>

    </View>
  );
}
function MedB({navigation}) {
  const [name, setName] = useState("");
  const [nPills, setPills] = useState("");
  const [Dose, setDose] = useState("");
  const [Hour, setHour] = useState("");
  const [Minute, setMinute] = useState("");
  const [monday, setMonday] = useState(false);
  const [tuesday, setTuesday] = useState(false);
  const [wednesday, setWednesday] = useState(false);
  const [thursday, setThursday] = useState(false);
  const [friday, setFriday] = useState(false);
  const [saturday, setSaturday] = useState(false);
  const [sunday, setSunday] = useState(false);

  const mToggle = () => setMonday(value => !value);
  const tToggle = () => setTuesday(value => !value);
  const wToggle = () => setWednesday(value => !value);
  const thToggle = () => setThursday(value => !value);
  const fToggle = () => setFriday(value => !value);
  const sToggle = () => setSaturday(value => !value);
  const suToggle = () => setSunday(value => !value);

  function colorM()
  {
    if(monday == true)
    {
      return '#00FF00';
    }
    else
    {
      return '#FF0000';
    }
  }
  function colorT()
  {
    if(tuesday == true)
    {
      return '#00FF00';
    }
    else
    {
      return '#FF0000';
    }
  }
  function colorW()
  {
    if(wednesday == true)
    {
      return '#00FF00';
    }
    else
    {
      return '#FF0000';
    }
  }
  function colorTh()
  {
    if(thursday == true)
    {
      return '#00FF00';
    }
    else
    {
      return '#FF0000';
    }
  }
  function colorF()
  {
    if(friday == true)
    {
      return '#00FF00';
    }
    else
    {
      return '#FF0000';
    }
  }
  function colorS()
  {
    if(saturday == true)
    {
      return '#00FF00';
    }
    else
    {
      return '#FF0000';
    }
  }
  function colorSu()
  {
    if(sunday == true)
    {
      return '#00FF00';
    }
    else
    {
      return '#FF0000';
    }
  }



  function minutefix(time)
  { 
    if(time > "59"){
      return "59";
    }
    if(time <= "0"){
      return "00";
    }
    if(time == 1){
      return "01";
    }
    if(time == 2){
      return "02";
    }
    if(time == 3){
      return "03";
    }
    if(time == 4){
      return "04";
    }
    if(time == 5){
      return "05";
    }
    if(time == 6){
      return "06";
    }
    if(time == 7){
      return "07";
    }
    if(time == 8){
      return "08";
    }
    if(time == 9){
      return "09";
    }
    else{
      return time;
    }
  }
  function Hourfix(time)
  { 
    if(time == "22"){
      return "10";
    }
    if(time == "21"){
      return "9";
    }
    if(time == "20"){
      return "8";
    }
    if(time == "19"){
      return "7";
    }
    if(time == "18"){
      return "6";
    }
    if(time == "17"){
      return "5";
    }
    if(time == "16"){
      return "4";
    }
    if(time == "15"){
      return "3";
    }
    if(time == "14"){
      return "2";
    }
    if(time == "13"){
      return "1";
    }
    if(time == "12"){
      return "12";
    }
    if(time == "11"){
      return "11";
    }
    if(time == "10"){
      return "10";
    }
    if(time == "9"){
      return "9";
    }
    if(time == "8"){
      return "8";
    }
    if(time == "7"){
      return "7";
    }
    if(time == "6"){
      return "6";
    }
    if(time == "5"){
      return "5";
    }
    if(time == "4"){
      return "4";
    }
    if(time == "3"){
      return "3";
    }
    if(time == "2"){
      return "2";
    }
    if(time == "1"){
      return "1";
    }
    if(time <= "0"){
      return "12";
    }
    if(time <="031" || time > "031"){
      return "00";
    }
    if(time >= "23"){
      return "11";
    }
    else{
      return time;
    }
  }
  function am(time){
    switch(time){
      case "0": return "AM";
      case "1": return "AM";
      case "2": return "AM";
      case "3": return "AM";
      case "4": return "AM";
      case "5": return "AM";
      case "6": return "AM";
      case "7": return "AM";
      case "8": return "AM";
      case "9": return "AM";
      case "10": return "AM";
      case "11": return "AM";
      case "12": return "PM";
      case "13": return "PM";
      case "14": return "PM";
      case "15": return "PM";
      case "16": return "PM";
      case "16": return "PM";
      case "17": return "PM";
      case "18": return "PM";
      case "19": return "PM";
      case "20": return "PM";
      case "21": return "PM";
      case "22": return "PM";
      case "23": return "PM";
    }
  };

  return (
    <View style={styles.container}>
      <MediumMed text = {name}/>
      <TextInput style={styles.input2}
        placeholder="''Name of medicine here''"
        onSubmitEditing={(value) => setName(value.nativeEvent.text)}
      />
      <TextInput style={styles.input2}
        placeholder="''Number of Pills being added to Dispenser''"
        onSubmitEditing={(value) => setPills(value.nativeEvent.text)}
      />
      <TextInput style={styles.input2}
        placeholder="''Pills per dosage''"
        onSubmitEditing={(value) => setDose(value.nativeEvent.text)}
      />
      <TextInput style={styles.input3}
        placeholder="''Hour to take pill''"
        onSubmitEditing={(value) => setHour(value.nativeEvent.text)}
      />
      <TextInput style={styles.input4}
        placeholder="''Minute to take pill''"
        onSubmitEditing={(value) => setMinute(value.nativeEvent.text)}
      />


      <Text style={styles.text3}numberOfLines={1} ellipsizeMode='tail'> 
        {name}
      </Text>

      <Text style={styles.text4}numberOfLines={1} ellipsizeMode='tail'> 
        {nPills} pills total
      </Text>

      <Text style={styles.text4}numberOfLines={1} ellipsizeMode='tail'> 
        {Dose} per dosage
      </Text>

      <Text style={styles.text4}numberOfLines={1} ellipsizeMode='tail'> 
      Time for med - {Hourfix(Hour)} : {minutefix(Minute)} {am(Hour)}
      </Text>   


      <View style={
        {    
          height: 30,
          fontSeize: 15,
          margin: 85,
          backgroundColor: '#03CEA4',
          borderWidth: 1,
          top: -140,
          padding: 2,
          textAlign: 'center',
          justifyContent: 'center',
        }}>
        <Text style={{
          textAlign: 'center',
          justifyContent: 'center',
          textDecorationLine: 'underline'
          }}>
          Days to Dispense. Click all that apply
        </Text>
        
      </View>

      <View style={
        {    
          height: 50,
          width: 85,
          fontSeize: 15,
          margin: 8,
          backgroundColor: colorM(),
          borderWidth: 1,
          padding: 10,
          justifyContent: 'center',
          top: -220,
          borderTopLeftRadius:8,
          borderTopRightRadius:8,
          borderBottomLeftRadius:8,
          borderBottomRightRadius:8,
        }}>
        <TouchableOpacity style={styles.button} onPress={mToggle}>
        <Text>Monday</Text>
        </TouchableOpacity>
      </View>

      <View style={
        {    
          height: 50,
          width: 85,
          fontSeize: 15,
          margin: 8,
          backgroundColor: colorT(),
          borderWidth: 1,
          padding: 10,
          justifyContent: 'center',
          top: -286,
          left: 101,
          borderTopLeftRadius:8,
          borderTopRightRadius:8,
          borderBottomLeftRadius:8,
          borderBottomRightRadius:8,
        }}>
        <TouchableOpacity style={styles.button} onPress={tToggle}>
        <Text>Tuesday</Text>
        </TouchableOpacity>      
      </View>

      <View style={
        {    
          height: 50,
          width: 94,
          fontSeize: 15,
          margin: 8,
          backgroundColor: colorW(),
          borderWidth: 1,
          padding: 10,
          justifyContent: 'center',
          top: -352,
          left: 202,
          borderTopLeftRadius:8,
          borderTopRightRadius:8,
          borderBottomLeftRadius:8,
          borderBottomRightRadius:8,
        }}>
        <TouchableOpacity style={styles.button} onPress={wToggle}>
        <Text>Wednesday</Text>
        </TouchableOpacity>      
      </View>

      <View style={
        {    
          height: 50,
          width: 85,
          fontSeize: 15,
          margin: 8,
          backgroundColor: colorTh(),
          borderWidth: 1,
          padding: 10,
          justifyContent: 'center',
          top: -418,
          left: 312,
          borderTopLeftRadius:8,
          borderTopRightRadius:8,
          borderBottomLeftRadius:8,
          borderBottomRightRadius:8,
        }}>
        <TouchableOpacity style={styles.button} onPress={thToggle}>
        <Text>Thursday</Text>
        </TouchableOpacity>      
      </View>

      <View style={
        {    
          height: 50,
          width: 85,
          fontSeize: 15,
          margin: 8,
          backgroundColor: colorF(),
          borderWidth: 1,
          padding: 10,
          justifyContent: 'center',
          top: -418,
          left: 50,
          borderTopLeftRadius:8,
          borderTopRightRadius:8,
          borderBottomLeftRadius:8,
          borderBottomRightRadius:8,
        }}>
        <TouchableOpacity style={styles.button} onPress={fToggle}>
        <Text>Friday</Text>
        </TouchableOpacity>      
      </View>

      <View style={
        {    
          height: 50,
          width: 85,
          fontSeize: 15,
          margin: 8,
          backgroundColor: colorS(),
          borderWidth: 1,
          padding: 10,
          justifyContent: 'center',
          top: -484,
          left: 151,
          borderTopLeftRadius:8,
          borderTopRightRadius:8,
          borderBottomLeftRadius:8,
          borderBottomRightRadius:8,
        }}>
        <TouchableOpacity style={styles.button} onPress={sToggle}>
        <Text>Saturday</Text>
        </TouchableOpacity>      
      </View>

      <View style={
        {    
          height: 50,
          width: 85,
          fontSeize: 15,
          margin: 8,
          backgroundColor: colorSu(),
          borderWidth: 1,
          padding: 10,
          justifyContent: 'center',
          top: -550,
          left: 252,
          borderTopLeftRadius:8,
          borderTopRightRadius:8,
          borderBottomLeftRadius:8,
          borderBottomRightRadius:8,
        }}>
        <TouchableOpacity style={styles.button} onPress={suToggle}>
        <Text>Sunday</Text>
        </TouchableOpacity>      
      </View>

    </View>
  );
}
function MedC({navigation}) {
  const [name, setName] = useState("");
  const [nPills, setPills] = useState("");
  const [Dose, setDose] = useState("");
  const [Hour, setHour] = useState("");
  const [Minute, setMinute] = useState("");
  const [monday, setMonday] = useState(false);
  const [tuesday, setTuesday] = useState(false);
  const [wednesday, setWednesday] = useState(false);
  const [thursday, setThursday] = useState(false);
  const [friday, setFriday] = useState(false);
  const [saturday, setSaturday] = useState(false);
  const [sunday, setSunday] = useState(false);

  const mToggle = () => setMonday(value => !value);
  const tToggle = () => setTuesday(value => !value);
  const wToggle = () => setWednesday(value => !value);
  const thToggle = () => setThursday(value => !value);
  const fToggle = () => setFriday(value => !value);
  const sToggle = () => setSaturday(value => !value);
  const suToggle = () => setSunday(value => !value);

  function colorM()
  {
    if(monday == true)
    {
      return '#00FF00';
    }
    else
    {
      return '#FF0000';
    }
  }
  function colorT()
  {
    if(tuesday == true)
    {
      return '#00FF00';
    }
    else
    {
      return '#FF0000';
    }
  }
  function colorW()
  {
    if(wednesday == true)
    {
      return '#00FF00';
    }
    else
    {
      return '#FF0000';
    }
  }
  function colorTh()
  {
    if(thursday == true)
    {
      return '#00FF00';
    }
    else
    {
      return '#FF0000';
    }
  }
  function colorF()
  {
    if(friday == true)
    {
      return '#00FF00';
    }
    else
    {
      return '#FF0000';
    }
  }
  function colorS()
  {
    if(saturday == true)
    {
      return '#00FF00';
    }
    else
    {
      return '#FF0000';
    }
  }
  function colorSu()
  {
    if(sunday == true)
    {
      return '#00FF00';
    }
    else
    {
      return '#FF0000';
    }
  }



  function minutefix(time)
  { 
    if(time > "59"){
      return "59";
    }
    if(time <= "0"){
      return "00";
    }
    if(time == 1){
      return "01";
    }
    if(time == 2){
      return "02";
    }
    if(time == 3){
      return "03";
    }
    if(time == 4){
      return "04";
    }
    if(time == 5){
      return "05";
    }
    if(time == 6){
      return "06";
    }
    if(time == 7){
      return "07";
    }
    if(time == 8){
      return "08";
    }
    if(time == 9){
      return "09";
    }
    else{
      return time;
    }
  }
  function Hourfix(time)
  { 
    if(time == "22"){
      return "10";
    }
    if(time == "21"){
      return "9";
    }
    if(time == "20"){
      return "8";
    }
    if(time == "19"){
      return "7";
    }
    if(time == "18"){
      return "6";
    }
    if(time == "17"){
      return "5";
    }
    if(time == "16"){
      return "4";
    }
    if(time == "15"){
      return "3";
    }
    if(time == "14"){
      return "2";
    }
    if(time == "13"){
      return "1";
    }
    if(time == "12"){
      return "12";
    }
    if(time == "11"){
      return "11";
    }
    if(time == "10"){
      return "10";
    }
    if(time == "9"){
      return "9";
    }
    if(time == "8"){
      return "8";
    }
    if(time == "7"){
      return "7";
    }
    if(time == "6"){
      return "6";
    }
    if(time == "5"){
      return "5";
    }
    if(time == "4"){
      return "4";
    }
    if(time == "3"){
      return "3";
    }
    if(time == "2"){
      return "2";
    }
    if(time == "1"){
      return "1";
    }
    if(time <= "0"){
      return "12";
    }
    if(time <="031" || time > "031"){
      return "00";
    }
    if(time >= "23"){
      return "11";
    }
    else{
      return time;
    }
  }
  function am(time){
    switch(time){
      case "0": return "AM";
      case "1": return "AM";
      case "2": return "AM";
      case "3": return "AM";
      case "4": return "AM";
      case "5": return "AM";
      case "6": return "AM";
      case "7": return "AM";
      case "8": return "AM";
      case "9": return "AM";
      case "10": return "AM";
      case "11": return "AM";
      case "12": return "PM";
      case "13": return "PM";
      case "14": return "PM";
      case "15": return "PM";
      case "16": return "PM";
      case "16": return "PM";
      case "17": return "PM";
      case "18": return "PM";
      case "19": return "PM";
      case "20": return "PM";
      case "21": return "PM";
      case "22": return "PM";
      case "23": return "PM";
    }
  };

  return (
    <View style={styles.container}>
      <LargeMed text = {name}/>
      <TextInput style={styles.input2}
        placeholder="''Name of medicine here''"
        onSubmitEditing={(value) => setName(value.nativeEvent.text)}
      />
      <TextInput style={styles.input2}
        placeholder="''Number of Pills being added to Dispenser''"
        onSubmitEditing={(value) => setPills(value.nativeEvent.text)}
      />
      <TextInput style={styles.input2}
        placeholder="''Pills per dosage''"
        onSubmitEditing={(value) => setDose(value.nativeEvent.text)}
      />
      <TextInput style={styles.input3}
        placeholder="''Hour to take pill''"
        onSubmitEditing={(value) => setHour(value.nativeEvent.text)}
      />
      <TextInput style={styles.input4}
        placeholder="''Minute to take pill''"
        onSubmitEditing={(value) => setMinute(value.nativeEvent.text)}
      />


      <Text style={styles.text3}numberOfLines={1} ellipsizeMode='tail'> 
        {name}
      </Text>

      <Text style={styles.text4}numberOfLines={1} ellipsizeMode='tail'> 
        {nPills} pills total
      </Text>

      <Text style={styles.text4}numberOfLines={1} ellipsizeMode='tail'> 
        {Dose} per dosage
      </Text>

      <Text style={styles.text4}numberOfLines={1} ellipsizeMode='tail'> 
      Time for med - {Hourfix(Hour)} : {minutefix(Minute)} {am(Hour)}
      </Text>   


      <View style={
        {    
          height: 30,
          fontSeize: 15,
          margin: 85,
          backgroundColor: '#03CEA4',
          borderWidth: 1,
          top: -140,
          padding: 2,
          textAlign: 'center',
          justifyContent: 'center',
        }}>
        <Text style={{
          textAlign: 'center',
          justifyContent: 'center',
          textDecorationLine: 'underline'
          }}>
          Days to Dispense. Click all that apply
        </Text>
        
      </View>

      <View style={
        {    
          height: 50,
          width: 85,
          fontSeize: 15,
          margin: 8,
          backgroundColor: colorM(),
          borderWidth: 1,
          padding: 10,
          justifyContent: 'center',
          top: -220,
          borderTopLeftRadius:8,
          borderTopRightRadius:8,
          borderBottomLeftRadius:8,
          borderBottomRightRadius:8,
        }}>
        <TouchableOpacity style={styles.button} onPress={mToggle}>
        <Text>Monday</Text>
        </TouchableOpacity>
      </View>

      <View style={
        {    
          height: 50,
          width: 85,
          fontSeize: 15,
          margin: 8,
          backgroundColor: colorT(),
          borderWidth: 1,
          padding: 10,
          justifyContent: 'center',
          top: -286,
          left: 101,
          borderTopLeftRadius:8,
          borderTopRightRadius:8,
          borderBottomLeftRadius:8,
          borderBottomRightRadius:8,
        }}>
        <TouchableOpacity style={styles.button} onPress={tToggle}>
        <Text>Tuesday</Text>
        </TouchableOpacity>      
      </View>

      <View style={
        {    
          height: 50,
          width: 94,
          fontSeize: 15,
          margin: 8,
          backgroundColor: colorW(),
          borderWidth: 1,
          padding: 10,
          justifyContent: 'center',
          top: -352,
          left: 202,
          borderTopLeftRadius:8,
          borderTopRightRadius:8,
          borderBottomLeftRadius:8,
          borderBottomRightRadius:8,
        }}>
        <TouchableOpacity style={styles.button} onPress={wToggle}>
        <Text>Wednesday</Text>
        </TouchableOpacity>      
      </View>

      <View style={
        {    
          height: 50,
          width: 85,
          fontSeize: 15,
          margin: 8,
          backgroundColor: colorTh(),
          borderWidth: 1,
          padding: 10,
          justifyContent: 'center',
          top: -418,
          left: 312,
          borderTopLeftRadius:8,
          borderTopRightRadius:8,
          borderBottomLeftRadius:8,
          borderBottomRightRadius:8,
        }}>
        <TouchableOpacity style={styles.button} onPress={thToggle}>
        <Text>Thursday</Text>
        </TouchableOpacity>      
      </View>

      <View style={
        {    
          height: 50,
          width: 85,
          fontSeize: 15,
          margin: 8,
          backgroundColor: colorF(),
          borderWidth: 1,
          padding: 10,
          justifyContent: 'center',
          top: -418,
          left: 50,
          borderTopLeftRadius:8,
          borderTopRightRadius:8,
          borderBottomLeftRadius:8,
          borderBottomRightRadius:8,
        }}>
        <TouchableOpacity style={styles.button} onPress={fToggle}>
        <Text>Friday</Text>
        </TouchableOpacity>      
      </View>

      <View style={
        {    
          height: 50,
          width: 85,
          fontSeize: 15,
          margin: 8,
          backgroundColor: colorS(),
          borderWidth: 1,
          padding: 10,
          justifyContent: 'center',
          top: -484,
          left: 151,
          borderTopLeftRadius:8,
          borderTopRightRadius:8,
          borderBottomLeftRadius:8,
          borderBottomRightRadius:8,
        }}>
        <TouchableOpacity style={styles.button} onPress={sToggle}>
        <Text>Saturday</Text>
        </TouchableOpacity>      
      </View>

      <View style={
        {    
          height: 50,
          width: 85,
          fontSeize: 15,
          margin: 8,
          backgroundColor: colorSu(),
          borderWidth: 1,
          padding: 10,
          justifyContent: 'center',
          top: -550,
          left: 252,
          borderTopLeftRadius:8,
          borderTopRightRadius:8,
          borderBottomLeftRadius:8,
          borderBottomRightRadius:8,
        }}>
        <TouchableOpacity style={styles.button} onPress={suToggle}>
        <Text>Sunday</Text>
        </TouchableOpacity>      
      </View>

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

    </View>
  );
}
function Notes({route}) {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollview1}>
        <Text style={styles.text2}>{route.params.paramkey}</Text>
        </ScrollView>
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
        <Stack.Screen name="Notes" 
        component={Notes} 
        options={{title: 'Notes'}}
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
  },
  input: {
    height: 50,
    fontSeize: 15,
    margin: 10,
    borderWidth: 1,
    padding: 10,
  },
  input2: {
    height: 45,
    fontSeize: 15,
    margin: 8,
    backgroundColor: '#03CEA4',
    borderWidth: 1,
    padding: 10,
  },
  input3: {
    height: 45,
    width: 180,
    fontSeize: 15,
    margin: 8,
    backgroundColor: '#03CEA4',
    borderWidth: 1,
    padding: 10,
  },
  input4: {
    height: 45,
    width: 180,
    fontSeize: 15,
    margin: 8,
    backgroundColor: '#03CEA4',
    borderWidth: 1,
    padding: 10,
    left: 215,
    top: -60.5,
  },
  text1: {
    fontSize: 15,
    fontWeight: 'bold',
    margin: 5,
    padding: 10,
    top: -10,
  },
  text2: {
    fontSize: 18,
    fontWeight: 'bold',
    margin: 10,
  },
  text3: {
    fontSize: 22,
    fontWeight: 'bold',
    margin: 1,
    //padding: 10,
    top: -70,
    textDecorationLine: 'underline',
    left: 7,
  },
  text4: {
    fontSize: 18,
    fontWeight: 'bold',
    margin: 1,
    //padding: 10,
    top: -70,
    left: 7
  },
  text4: {
    fontSize: 18,
    fontWeight: 'bold',
    margin: 1,
    //padding: 10,
    top: -70,
    left: 7
  },
});

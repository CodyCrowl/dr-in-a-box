import React from 'react'
import { Text, View, TextInput, StyleSheet} from 'react-native'

const CustomInput = ({value, setValue, placeholder, secureTextEntry}) => { 
    return (
      <View style={styles.container}>
        <TextInput 
        value = {value}
        onChangeText = {setValue}
        placeholder={placeholder}
        style={styles.input} 
        secureTextEntry={secureTextEntry}
        />
      </View> 
    )
  }
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: '95%',
    left: 10,
    borderColor: 'e8e8e8',
    borderRadius: 5,
    height: 50,
    fontSize: 50,
    paddingHorizontal: 10,
    marginVertical: 10,
    justifyContent: 'center',
  },
  input: {
    fontSize: 26,
  },
});
  
export default CustomInput
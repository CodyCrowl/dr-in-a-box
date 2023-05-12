import React from 'react';
import { View, Text , StyleSheet, TouchableOpacity, Pressable} from 'react-native';


export default function CustomButton({onPress, text}){
  return (
    <TouchableOpacity onPress={onPress}>
        <View style={styles.container} onPress={onPress}>
            <Text style={styles.text}>{text}</Text>
        </View>
    </TouchableOpacity>
    //pressable is similar to view thus why we can replace
  )
} 

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#03CEA4',
        width: '95%',
        left: 10,
        padding: 10,
        marginVertical: 20,

        alignItems: 'center',
        borderRadius: 5,
    },
    text: {
        fontWeight: 'bold',
        fontSize: 50,
        color: 'black',
    }
    
})
